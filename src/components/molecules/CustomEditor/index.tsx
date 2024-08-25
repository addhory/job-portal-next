"use client";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { FormField, FormItem, FormMessage } from "@/components/ui/form";

export type TCustomEditorProps = React.HTMLAttributes<HTMLDivElement> & {
  form: UseFormReturn<z.infer<any>>;
  name: string;
};

const CustomEditor = ({ className, form, name }: TCustomEditorProps) => {
  return (
    <div className={cn("block prose", className)}>
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
        render={({ field: _field }) => {
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
