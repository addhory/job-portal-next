"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon, Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { jobFormSchema } from "@/lib/form-schema";
import { JOB_TYPE_OPTIONS } from "@/constants";

import { TCustomEditorProps } from "@/components/molecules/CKEditor";
import FieldInput from "@/components/molecules/FieldInput";
import InputBenefits from "@/components/molecules/InputBenefits";
import InputSkills from "@/components/molecules/InputSkills";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  }
);

export default function Page() {
  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: [],
      benefits: [],
    },
  });

  const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
    console.log(val);
  };

  return (
    <div>
      <div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
        <ArrowLeftIcon />
        <h6 className="text-2xl font-semibold">Post a Job</h6>
      </div>
      <div className="my-5">
        <p className="text-lg font-semibold">Basic Information</p>
        <p>List out your top perks and benefits</p>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 space-y-6 pt-6"
        >
          <FieldInput
            title="Job Title"
            subtitle="Job titles must be describe one position"
          >
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="e.g Software Engineer"
                      className="w-96"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>At least 80 characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
          <FieldInput
            title="Type of Employment"
            subtitle="You can select multiple type of employment"
          >
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {JOB_TYPE_OPTIONS.map((item, index) => {
                        return (
                          <FormItem
                            key={index}
                            className="flex items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <RadioGroupItem value={item.value} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.name}
                            </FormLabel>
                          </FormItem>
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
          <FieldInput
            title="Salary"
            subtitle="Please specify the estimated salary range for the role."
          >
            <div className="flex flex-row w-2/4 gap-4">
              <FormField
                control={form.control}
                name="salaryForm"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="$100" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-center py-2">To</p>
              <FormField
                control={form.control}
                name="salaryTo"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="$1000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>
          <FieldInput
            title="Categories"
            subtitle="You can select job categories"
          >
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Job Categories" />
                      </SelectTrigger>
                    </FormControl>
                    <FormMessage />
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </FieldInput>
          <FieldInput title="Required skills" subtitle="tes">
            <InputSkills form={form} />
          </FieldInput>
          <FieldInput
            title="Job Descriptions"
            subtitle="Job description must be describe one position"
          >
            <CustomEditor form={form} name={"jobDescription"} />
          </FieldInput>

          <FieldInput
            title="Responsibilities"
            subtitle="Outline the core responsibilities of the position"
          >
            <CustomEditor form={form} name={"responsibility"} />
          </FieldInput>

          <FieldInput
            title="Who You Are"
            subtitle="Add your preferred candidates qualifications"
          >
            <CustomEditor form={form} name={"whoYouAre"} />
          </FieldInput>
          <FieldInput
            title="Nice-To-Haves"
            subtitle="Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply"
          >
            <CustomEditor form={form} name={"niceToHaves"} />
          </FieldInput>

          <FieldInput
            title="Perks and Benefits"
            subtitle="Encourage more people to apply by sharing the attractive rewards and benefits you offer to your employees"
          >
            <InputBenefits form={form} />
          </FieldInput>

          <div className="flex justify-end">
            <Button type="submit">Do a Review</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
