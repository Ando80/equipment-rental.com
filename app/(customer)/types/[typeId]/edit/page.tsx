import { Layout, LayoutTitle } from "@/components/layout";
import { PageParams } from "@/types/next";
import { TypeForm } from "./typeForm";
import { requiredCurrentUser } from "@/auth/current-user";
import { prisma } from "@/prisma";
import { notFound } from "next/navigation";

export default async function RoutePage(
  props: PageParams<{
    typeId: string;
  }>
) {
  const user = await requiredCurrentUser();

  const type = await prisma.type.findUnique({
    where: {
      id: props.params.typeId,
      userId: user.id,
    },
  });

  if (!type) {
    notFound();
  }

  return (
    <Layout>
      <LayoutTitle>Create Type</LayoutTitle>
      <TypeForm defaultValues={type} typeId={type.id} />
    </Layout>
  );
}
