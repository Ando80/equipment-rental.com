import { requiredCurrentUser } from "@/auth/current-user";
import { Layout, LayoutTitle } from "@/components/layout";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/prisma";
import type { PageParams } from "@/types/next";
import Link from "next/link";

export default async function RoutePage(props: PageParams<{}>) {
  const user = await requiredCurrentUser();

  const typesCount = await prisma.type.count({
    where: {
      userId: user.id,
    },
  });
  const enginsCount = await prisma.engin.count({
    where: {
      userId: user.id,
    },
  });

  const locationsCount = await prisma.location.count({
    where: {
      userId: user.id,
    },
  });

  return (
    <Layout>
      <LayoutTitle>Dashboard</LayoutTitle>
      <h2 className="text-xl font-bold">Welcome back, {user.name}</h2>
      <div className="flex flex-wrap items-start gap-4">
        <Card className="min-w-52">
          <CardHeader>
            <CardDescription>Types d'engins</CardDescription>
            <CardTitle className="text-center">{typesCount}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="min-w-52">
          <CardHeader>
            <CardDescription>Categories d'engins</CardDescription>
            <CardTitle className="text-center">{enginsCount}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="min-w-52">
          <CardHeader>
            <CardDescription>Locations</CardDescription>
            <CardTitle className="text-center">{locationsCount}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="min-w-52">
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button className=" bg-stone-200 text-yellow-950 hover:bg-stone-400 ">
              <Link href="/locations/new">Ajouter une location</Link>
            </Button>

            <Button className=" bg-stone-200 text-yellow-950 hover:bg-stone-400">
              <Link href="/types">Voir les Categories d'engins</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
