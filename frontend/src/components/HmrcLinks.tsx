/**
 * Where landlords go for what LedgerLet doesn't do. HMRC's service guide asks for
 * its online services to open in a new browser window, so these all do, and say so.
 */
import type { ReactNode } from "react";

const HMRC_ONLINE_SERVICES = "https://www.gov.uk/log-in-register-hmrc-online-services";
const COMPATIBLE_SOFTWARE =
  "https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax";

function NewTabLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children} (opens in a new tab)
    </a>
  );
}

export const HmrcOnlineLink = () => (
  <NewTabLink href={HMRC_ONLINE_SERVICES}>your HMRC online account</NewTabLink>
);

export const CompatibleSoftwareLink = () => (
  <NewTabLink href={COMPATIBLE_SOFTWARE}>software that can submit it</NewTabLink>
);
