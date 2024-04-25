import { requiredCurrentUser } from "@/auth/current-user";
import { Layout, LayoutTitle } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
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
import Image from "next/image";
import Link from "next/link";
import { DeleteButton } from "./[typeId]/DeleteButton";
import { notFound } from "next/navigation";

export default async function RoutePage(
  props: PageParams<{
    typeId: string;
  }>
) {
  const user = await requiredCurrentUser();

  const types = await prisma.type.findMany({
    where: {
      userId: user.id,
    },
  });
  if (!types) {
    notFound();
  }
  return (
    <div className="m-10 sm:mx-24">
      <Layout>
        <LayoutTitle>Categories</LayoutTitle>
        <Card className="p-1">
          {types.length ? (
            <Table>
              <TableBody className="flex flex-col flex-wrap items-center justify-around gap-4 rounded-[2rem] bg-white px-4 py-16 shadow-xl sm:flex-row">
                {types.map((type) => (
                  <TableRow key={type.id}>
                    <Link href={`/engins/${type.slug}`} key={type.id}>
                      <TableCell className="flex flex-col items-center gap-5">
                        <Image
                          src="/FolderIcon.png"
                          alt="Folder Icon"
                          width={175}
                          height={105}
                        />
                        <h3 className="text-center text-sm font-normal leading-8 text-black md:text-base">
                          Categories:{" "}
                          <span className="font-bold">{type.name}</span>
                        </h3>
                        <div className=" sm:flex-row">
                          <Link href={`/types/${type.id}/edit`}>
                            <Image
                              src="/edit.png"
                              alt="edit Icon"
                              width={35}
                              height={35}
                            />
                          </Link>
                          <DeleteButton typeId={type.id} />
                        </div>
                      </TableCell>
                    </Link>
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
    </div>
  );
}
