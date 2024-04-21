import { Layout, LayoutTitle } from "@/components/layout";
import { PageParams } from "@/types/next";
import { TypeForm } from "../[typeId]/edit/typeForm";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout>
      <LayoutTitle>Create Type</LayoutTitle>
      <TypeForm />
    </Layout>
  );
}
