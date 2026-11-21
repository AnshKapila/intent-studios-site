import type { Metadata } from "next";
import { WEBSITE_TYPE_PAGES } from "@/data/services";
import { SITE } from "@/data/site";
import { WebsiteTypeTemplate } from "@/components/services/WebsiteTypeTemplate";

const data = WEBSITE_TYPE_PAGES.ecommerce;

export const metadata: Metadata = {
  title: data.name,
  description: data.intro,
  alternates: {
    canonical: `${SITE.url}${data.href}`,
  },
};

export default function EcommerceWebsitePage() {
  return <WebsiteTypeTemplate data={data} />;
}
