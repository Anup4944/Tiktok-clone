import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "6y6j797u",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
