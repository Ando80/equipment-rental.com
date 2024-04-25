import { Layout, LayoutTitle } from "@/components/layout";
import { PageParams } from "@/types/next";

import { EnginForm } from "../edit/enginForm";

export default function NewEnginPage(props: PageParams<{ slug: string }>) {
  const { slug } = props.params;
  console.log("Slug:", slug);

  return (
    <Layout>
      <LayoutTitle>Create Engin</LayoutTitle>

      <EnginForm typeId={slug} />
    </Layout>
  );
}
