import { Layout, LayoutTitle } from "@/components/layout";
import { PageParams } from "@/types/next";
import { EnginForm } from "./enginForm";
import { requiredCurrentUser } from "@/auth/current-user";
import { prisma } from "@/prisma";
import { notFound } from "next/navigation";

export default async function RoutePage(
  props: PageParams<{
    enginId: string;
  }>
) {
  const user = await requiredCurrentUser();

  const engin = await prisma.engin.findUnique({
    where: {
      id: props.params.enginId,
      userId: user.id,
    },
  });

  if (!engin) {
    notFound();
  }

  return (
    <Layout>
      <LayoutTitle>Create Engin</LayoutTitle>
      <EnginForm defaultValues={engin} enginId={engin.id} />
    </Layout>
  );
}
