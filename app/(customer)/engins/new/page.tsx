import { Layout, LayoutTitle } from "@/components/layout";
import { PageParams } from "@/types/next";
import { EnginForm } from "../[slug]/edit/enginForm";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout>
      <LayoutTitle>Create Type</LayoutTitle>
      <EnginForm />
    </Layout>
  );
}
