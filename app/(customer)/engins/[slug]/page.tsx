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

export default async function RoutePage(props: PageParams<{ slug: string }>) {
  const user = await requiredCurrentUser();
  const slug = props.params.slug;

  const engins = await prisma.engin.findMany({
    where: {
      typeId: slug,
      userId: user.id,
    },
  });

  return (
    <Layout>
      <LayoutTitle>Engins</LayoutTitle>
      <Card className="p-4">
        {engins.length ? (
          <Table>
            <TableHeader>
              <TableHead>Matricule</TableHead>
            </TableHeader>
            <TableBody>
              {engins.map((engin) => (
                <TableRow key={engin.id}>
                  <Link href={`/engins/${engin.id}`} passHref>
                    <TableCell>
                      <a>{engin.registration}</a>
                    </TableCell>
                  </Link>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Link
            href={`/engins/${slug}/new`}
            className="flex w-full items-center justify-center rounded-md border-2 border-dashed border-primary p-8 transition-colors hover:bg-accent/40 lg:p-12"
          >
            Create Engin
          </Link>
        )}
      </Card>
    </Layout>
  );
}
