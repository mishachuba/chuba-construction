import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { ROFeature } from "@/components/ROFeature";
import { About } from "@/components/About";
import { SocialProof } from "@/components/SocialProof";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <ROFeature />
      <About />
      <SocialProof />
      <FAQ />
      <ContactForm />
    </main>
  );
}
