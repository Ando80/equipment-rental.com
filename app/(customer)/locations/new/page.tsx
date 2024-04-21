import { Layout, LayoutTitle } from "@/components/layout";
import { PageParams } from "@/types/next";
import { LocationForm } from "../[locationId]/edit/LocationForm";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout>
      <LayoutTitle>Create Location</LayoutTitle>
      <LocationForm />
    </Layout>
  );
}
