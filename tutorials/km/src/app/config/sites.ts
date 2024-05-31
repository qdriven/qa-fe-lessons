import { Metadata } from "next";

const title = "Software QA Kownledge Base";
const description = "A knowledge base for Software QA";

export const websiteMetaData: Metadata = {
//   metadataBase: new URL("https://keystatic-examples-knowledge-base.vercel.app"),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    siteName: title,
    images: [
      {
        url: `/og?title=${title}`,
        width: 800,
        height: 600,
      },
      {
        url: `/og?title=${title}`,
        width: 1600,
        height: 1200,
      },
    ],
    locale: "zh",
    type: "website",
  },
};