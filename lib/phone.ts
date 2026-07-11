import { siteConfig } from "@/content/site";

/** E.164 phone number for click-to-call links (e.g. +19253221106) */
export const phoneE164 = siteConfig.phoneE164;

export function getTelHref(): string {
  return `tel:${phoneE164}`;
}

/** Apple FaceTime Audio URL — requires facetime-audio:// scheme */
export function getFaceTimeAudioHref(): string {
  return `facetime-audio://${phoneE164}`;
}

function isTouchMobileDevice(): boolean {
  const ua = navigator.userAgent;
  const isIPadOS =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return (
    /iPhone|iPod/i.test(ua) ||
    /Android/i.test(ua) ||
    /iPad/i.test(ua) ||
    isIPadOS
  );
}

export function isMacDesktopClient(): boolean {
  if (typeof navigator === "undefined") return false;

  const ua = navigator.userAgent;
  const isIPadOS =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return /Mac/i.test(ua) && !/iPhone|iPod|iPad/i.test(ua) && !isIPadOS;
}

export function isAppleCallMenuDevice(): boolean {
  if (typeof navigator === "undefined") return false;

  const ua = navigator.userAgent;
  const isIPadOS =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  const isIPad = /iPad/i.test(ua) || isIPadOS;

  return isMacDesktopClient() || isIPad;
}

/**
 * Best single-link href for the current device.
 * - iPhone / Android / iPad: tel:+1…
 * - Mac desktop: facetime-audio://+1…
 * - Other desktops: tel:+1…
 */
export function getCallHref(): string {
  if (typeof navigator === "undefined") {
    return getTelHref();
  }

  if (isTouchMobileDevice()) {
    return getTelHref();
  }

  if (isMacDesktopClient()) {
    return getFaceTimeAudioHref();
  }

  return getTelHref();
}

/** Opens a URL via a temporary anchor — reliable for custom URL schemes in Chrome. */
export function openCallUrl(url: string): void {
  const link = document.createElement("a");
  link.href = url;
  link.rel = "noopener noreferrer";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
