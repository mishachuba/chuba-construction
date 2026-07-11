import { Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui";

export function MobileBottomBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-warm-200 bg-white p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden"
      role="region"
      aria-label="Quick contact actions"
    >
      <div className="mx-auto flex max-w-md gap-3">
        <Button
          href={`tel:${siteConfig.phone}`}
          variant="primary"
          className="flex-1"
          ariaLabel={`Call ${siteConfig.phoneDisplay}`}
        >
          <Phone className="mr-1.5 h-4 w-4" aria-hidden="true" />
          Call
        </Button>
        <Button
          href={`sms:${siteConfig.phone}`}
          variant="primary"
          className="flex-1"
          ariaLabel={`Text ${siteConfig.phoneDisplay}`}
        >
          <MessageSquare className="mr-1.5 h-4 w-4" aria-hidden="true" />
          Text
        </Button>
      </div>
    </div>
  );
}
