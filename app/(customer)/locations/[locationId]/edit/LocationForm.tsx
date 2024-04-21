"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LocationSchema,
  LocationType,
  PAYEMENTS_CLASSES,
} from "./location.schema";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { createLocationAction } from "./location.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export type LocationFormProps = {
  defaultValues?: LocationType;
};

export const LocationForm = (props: LocationFormProps) => {
  const form = useZodForm({
    schema: LocationSchema,
    defaultValues: props.defaultValues,
  });
  const isCreate = !Boolean(props.defaultValues);
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values: LocationType) => {
      const { data, serverError } = await createLocationAction(values);

      if (!serverError) {
        toast.error(serverError);
        return;
      }
      toast.success("Location creer");

      // router.push(`/locations/${data?.id}`);
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isCreate
            ? "Create location"
            : `Edit location ${props.defaultValues?.firstname}`}
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
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Firstname</FormLabel>
                <FormControl>
                  <Input placeholder="Nom" {...field} />
                </FormControl>
                <FormDescription>
                  Nom de la personne qui vient faire la location
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="payement"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {PAYEMENTS_CLASSES.map((payement) => (
                        <SelectItem value={payement} key={payement}>
                          {payement}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>comment payer la location</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className=" bg-pink-300 text-yellow-950 hover:bg-pink-200 ">
            {isCreate ? "Create location" : "Save location"}
          </Button>
        </Form>
      </CardContent>
    </Card>
  );
};
