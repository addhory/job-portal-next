"use client";

import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { jobFormSchema } from "@/lib/form-schema";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export type TCustomEditorProps = {
  form: UseFormReturn<z.infer<typeof jobFormSchema>>;
  name: any;
};

const CustomEditor = ({ form, name }: TCustomEditorProps) => {
  return (
    <div className="block">
      <CKEditor
        editor={ClassicEditor}
        data={form.getValues(name)}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          form.setValue(name, data);
        }}
      />
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => {
          return (
            <FormItem>
              <FormMessage className="mt-3" />
            </FormItem>
          );
        }}
      />
    </div>
  );
};

export default CustomEditor;
