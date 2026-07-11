# Chuba Construction Website

Production-ready marketing website for [chubaconstruction.com](https://chubaconstruction.com) — a licensed, bonded, and insured general contractor serving Walnut Creek, Contra Costa County, and the greater East Bay, California.

Built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS**.

---

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later
- npm (included with Node.js)

### Setup

```bash
cd chuba-construction
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

---

## Updating Business Information

All editable business content lives in **`content/site.ts`**. Update this single file to change:

- Business name, phone, email, license number
- Service lists and RO pricing
- About Us copy
- FAQ items
- SEO title and description
- Social media URLs (when ready)
- Project gallery placeholders

After editing, restart the dev server if it is running.

---

## Replacing Logos

Logo files are in **`public/`**:

| File | Purpose |
|------|---------|
| `Header_Logo.png` | Site header and Open Graph image |
| `Just_Logo.png` | Source for favicon generation |

To replace logos:

1. Swap in new PNG files with the same filenames in `public/`.
2. Regenerate favicons from `Just_Logo.png`:

```bash
JUST="public/Just_Logo.png"
sips -z 16 16 "$JUST" --out public/favicon-16x16.png
sips -z 32 32 "$JUST" --out public/favicon-32x32.png
sips -z 180 180 "$JUST" --out public/apple-touch-icon.png
cp public/favicon-32x32.png public/favicon.ico
```

3. Clear browser cache to see favicon changes.

Original brand assets are also kept in `brand/Logos/` for reference.

---

## Replacing Gallery Images

Project photos are placeholder stock images defined in **`content/site.ts`** under `projects.items`. Each entry has `title`, `image` (URL), and `alt`.

### Option A — Update URLs in site.ts

Replace the `image` URL for each project item with your own hosted image URL (Unsplash, Cloudinary, or your CDN).

### Option B — Use local files

1. Add photos to **`public/projects/`** (create the folder if needed).
2. Update `image` paths in `content/site.ts`:

```ts
image: "/projects/kitchen-remodel-1.jpg",
```

3. Update `alt` text to describe the actual project.

The gallery heading already labels placeholders as sample styles until real photos are added. Remove or change the `projects.subheading` text when you switch to real project photos.

---

## Configuring the Contact Form (Web3Forms)

The contact form submits to [Web3Forms](https://web3forms.com) via a client-side POST.

### Step 1 — Create a Web3Forms account

1. Go to [https://web3forms.com](https://web3forms.com)
2. Sign up (free tier available)
3. Create a new form and copy your **Access Key**

### Step 2 — Set the environment variable

Create **`.env.local`** in the project root (never commit this file):

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
```

### Step 3 — Configure email routing in Web3Forms

In the Web3Forms dashboard, set the notification email to **chubaconstruction@gmail.com** (or your preferred inbox).

### Step 4 — Test locally

Restart `npm run dev` after adding `.env.local`, submit the form, and confirm the email arrives.

### Step 5 — Add to Vercel

In your Vercel project: **Settings → Environment Variables** → add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` for Production (and Preview if desired). Redeploy after saving.

---

## Adding Real Review & Social URLs

Social links are placeholders (`href="#"`) in **`content/site.ts`** under `social.links`. When your profiles are ready:

```ts
{ name: "Google Business", href: "https://g.page/your-profile", icon: "google" },
{ name: "Yelp", href: "https://www.yelp.com/biz/your-business", icon: "yelp" },
// etc.
```

Also update `sameAs` in the JSON-LD schema automatically — it filters out `#` links in `components/JsonLd.tsx`.

---

## Git Init & Push to GitHub

If this folder is not yet a git repository:

```bash
cd chuba-construction
git init
git add .
git commit -m "Initial commit: Chuba Construction website"
```

Create a new repository on GitHub (do not initialize with README if you already have one locally), then:

```bash
git remote add origin git@github.com:YOUR_USERNAME/chuba-construction.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username or organization.

---

## Deploying on Vercel

### Step 1 — Create a Vercel project

1. Go to [https://vercel.com](https://vercel.com) and sign in
2. Click **Add New → Project**
3. Import your GitHub repository
4. Framework preset: **Next.js** (auto-detected)
5. Add environment variable: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
6. Click **Deploy**

Vercel will build and deploy on every push to `main`.

### Step 2 — Custom domain (chubaconstruction.com)

In Vercel: **Project → Settings → Domains** → add `chubaconstruction.com` and `www.chubaconstruction.com`.

#### Option A — DNS records at your registrar

| Type | Name | Value |
|------|------|-------|
| A | `@` (apex) | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

> Vercel may show a different IP if theirs changes — always confirm in the Vercel domain settings panel.

#### Option B — Vercel nameservers

Point your domain's nameservers to Vercel's (shown in the Domains settings). Vercel then manages all DNS records automatically.

After DNS propagates (minutes to 48 hours), Vercel will provision SSL automatically.

---

## Analytics & Search Console (Optional)

Placeholder snippets for Google Analytics 4, Google Tag Manager, and Search Console verification are in **`app/layout.tsx`**, commented out. Uncomment and replace placeholder IDs when ready.

---

## Project Structure

```
chuba-construction/
├── app/
│   ├── layout.tsx          # Root layout, metadata, analytics placeholders
│   ├── page.tsx            # Single-page home
│   ├── not-found.tsx       # 404 page
│   ├── privacy/page.tsx    # Privacy policy
│   ├── sitemap.ts          # Dynamic sitemap.xml
│   ├── robots.ts           # Dynamic robots.txt
│   └── globals.css         # Tailwind + brand tokens
├── components/             # Reusable UI sections
├── content/
│   └── site.ts             # All editable business content
├── public/                 # Static assets (logos, favicons)
└── brand/                  # Original brand asset archive
```

---

## License

Proprietary — © Chuba Construction. All rights reserved.
