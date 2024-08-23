"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { overviewFormSchema } from "@/lib/form-schema";
import { cn } from "@/lib/utils";
import { EMPLOYEE_QTY_OPTIONS, LOCATION_OPTIONS } from "@/constants";

import type { TCustomEditorProps } from "@/components/molecules/CKEditor";
import CustomUpload from "@/components/molecules/CustomUpload";
import FieldInput from "@/components/molecules/FieldInput";
import InputSkills from "@/components/molecules/InputSkills";
import TitleForm from "@/components/molecules/TitleForm.tsx";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const CustomEditor = dynamic<TCustomEditorProps>(
  () => import("@/components/molecules/CKEditor"),
  {
    ssr: false,
    loading: () => (
      <div className="inline-flex items-center">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </div>
    ),
  },
);

type Props = {};

export const OverviewForm = (props: Props) => {
  const form = useForm<z.infer<typeof overviewFormSchema>>({
    resolver: zodResolver(overviewFormSchema),
    defaultValues: {
      techStack: [],
    },
  });

  const handleSubmit = (value: z.infer<typeof overviewFormSchema>) => {
    console.log("overviewValue", value);
  };

  return (
    <div>
      <TitleForm
        title="Basic Information"
        subtitle="This is company information you can update anytime"
      />
      <Separator className="mb-6" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FieldInput
            title="Company Logo"
            subtitle="This image will be shown publicly as company logo"
          >
            <CustomUpload form={form} name="image" />
          </FieldInput>
          <FieldInput
            title="Company Details"
            subtitle="Introduce your company core info quickly to users by fill up company details"
          >
            <div className="flex flex-col flex-1 space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input
                        className="w-96"
                        placeholder="e.g Facebook"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website Url</FormLabel>
                    <FormControl>
                      <Input
                        className="w-96"
                        placeholder="e.g https://facebook.com"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="w-96">
                    <FormLabel>Location</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                      </FormControl>
                      <FormMessage />
                      <SelectContent>
                        {LOCATION_OPTIONS.map((item, idx) => (
                          <SelectItem key={`${item}-${idx}`} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-5 w-full">
                <FormField
                  control={form.control}
                  name="employee"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Employee</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Employee Qty" />
                          </SelectTrigger>
                        </FormControl>
                        <FormMessage />
                        <SelectContent>
                          {EMPLOYEE_QTY_OPTIONS.map((item, idx) => (
                            <SelectItem
                              key={`${item}-${idx}`}
                              value={item.value}
                            >
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Industry</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Industry" />
                          </SelectTrigger>
                        </FormControl>
                        <FormMessage />
                        <SelectContent>
                          {LOCATION_OPTIONS.map((item, idx) => (
                            <SelectItem
                              key={`${item}-${idx}`}
                              value={item.value}
                            >
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateFounded"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date Founded</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="inline-block">
                <InputSkills
                  form={form}
                  name={"techStack"}
                  label="Add Tech Stack"
                />
              </div>
            </div>
          </FieldInput>
          <FieldInput
            title="About Company"
            subtitle="Brief description for your company. URL's are hpyerlinked"
          >
            <CustomEditor form={form} name={"description"} />
          </FieldInput>
          <div className="flex justify-end">
            <Button className="px-10">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
