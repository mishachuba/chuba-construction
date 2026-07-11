import type { MouseEvent } from "react";
import { siteConfig } from "@/content/site";

/** E.164 phone number for click-to-call links (e.g. +19253221106) */
export const phoneE164 = siteConfig.phoneE164;

export function getTelHref(): string {
  return `tel:${phoneE164}`;
}

/**
 * On Mac and iPad, facetime-audio: often initiates calls more reliably than tel:
 * when FaceTime / iPhone Cellular Calls is enabled. iPhone keeps tel:.
 */
export function getAppleCallHref(): string | null {
  if (typeof navigator === "undefined") return null;

  const ua = navigator.userAgent;
  const isIPadOS =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  const isIPad = /iPad/.test(ua) || isIPadOS;
  const isMac =
    /Mac/.test(ua) && !/iPhone|iPod/.test(ua) && !isIPadOS && !isIPad;

  if (isMac || isIPad) {
    return `facetime-audio:${phoneE164}`;
  }

  return null;
}

export function handleCallClick(event: MouseEvent<HTMLAnchorElement>): void {
  const appleHref = getAppleCallHref();
  if (appleHref) {
    event.preventDefault();
    window.location.href = appleHref;
  }
}
