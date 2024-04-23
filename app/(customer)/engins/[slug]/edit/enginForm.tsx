"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnginSchema, EnginType } from "./engin.schema";
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
import { createEnginAction, updateEnginAction } from "./engin.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export type EnginFormProps = {
  defaultValues?: EnginType;
  enginId?: string;
};

export const EnginForm = (props: EnginFormProps) => {
  const form = useZodForm({
    schema: EnginSchema,
    defaultValues: props.defaultValues,
  });
  const isCreate = !Boolean(props.defaultValues);
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values: EnginType) => {
      const { data, serverError } = isCreate
        ? await createEnginAction(values)
        : await updateEnginAction({
            id: props.enginId ?? "-",
            data: values,
          });

      if (serverError || !data) {
        toast.error(serverError);
        return;
      }
      toast.success("Engin creer");

      router.push(`/engins/${data.id}`);
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isCreate
            ? "Create Engin"
            : `Edit Engin ${props.defaultValues?.registration}`}
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
            name="registration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Matricule</FormLabel>
                <FormControl>
                  <Input placeholder="registration" {...field} />
                </FormControl>
                <FormDescription>Registration de l'engin</FormDescription>
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
                    placeholder="A005"
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
            {isCreate ? "Create engin" : "Save engin"}
          </Button>
        </Form>
      </CardContent>
    </Card>
  );
};
