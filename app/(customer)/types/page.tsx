import { requiredCurrentUser } from "@/auth/current-user";
import { Layout, LayoutTitle } from "@/components/layout";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/prisma";
import { PageParams } from "@/types/next";
import Link from "next/link";

export default async function RoutePage(props: PageParams<{}>) {
  const user = await requiredCurrentUser();

  const types = await prisma.type.findMany({
    where: {
      userId: user.id,
    },
  });
  return (
    <Layout>
      <LayoutTitle>Types</LayoutTitle>
      <Card className="p-4">
        {types.length ? (
          <Table>
            <TableHeader>
              <TableHead>Name</TableHead>
              <TableHead>Slug</TableHead>
            </TableHeader>
            <TableBody>
              {types.map((type) => (
                <TableRow key={type.id}>
                  <Link href={`/types/${type.id}`} key={type.id}>
                    <TableCell>{type.name}</TableCell>
                  </Link>
                  <TableCell className="font-mono">{type.slug}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Link
            href="/types/new"
            className="flex w-full items-center justify-center rounded-md border-2 border-dashed border-primary p-8 transition-colors hover:bg-accent/40 lg:p-12"
          >
            Create Type
          </Link>
        )}
      </Card>
    </Layout>
  );
}
