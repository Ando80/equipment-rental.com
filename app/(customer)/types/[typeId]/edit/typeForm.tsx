"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypeSchema, TypesType } from "./type.schema";
import { Form, useZodForm } from "@/components/ui/form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { createTypeAction, updateTypeAction } from "./type.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export type TypeFormProps = {
  defaultValues?: TypesType;
  typeId?: string;
};

export const TypeForm = (props: TypeFormProps) => {
  const form = useZodForm({
    schema: TypeSchema,
    defaultValues: props.defaultValues,
  });
  const isCreate = !Boolean(props.defaultValues);
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values: TypesType) => {
      const { data, serverError } = isCreate
        ? await createTypeAction(values)
        : await updateTypeAction({
            id: props.typeId ?? "-",
            data: values,
          });

      if (serverError || !data) {
        toast.error(serverError);
        return;
      }
      toast.success("Type creer");

      router.push(`/types`);
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isCreate ? "Create type" : `Edit type ${props.defaultValues?.name}`}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form
          className="flex flex-col gap-4"
          form={form}
          onSubmit={async (values) => {
            await mutation.mutateAsync(values);
          }}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Nom" {...field} />
                </FormControl>
                <FormDescription>Nom du type</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input
                    placeholder="iPhone 15"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value
                        .replaceAll(" ", "-")
                        .toLowerCase();

                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormDescription>
                  The slug is used in the URL of the review page.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className=" bg-pink-300 text-yellow-950 hover:bg-pink-200 ">
            {isCreate ? "Create type" : "Save type"}
          </Button>
        </Form>
      </CardContent>
    </Card>
  );
};
