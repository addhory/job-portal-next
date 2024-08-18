import { PlusIcon, XIcon } from "lucide-react";
import React, { createRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { jobFormSchema } from "@/lib/form-schema";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props = {
  form: UseFormReturn<z.infer<typeof jobFormSchema>>;
};

const InputSkills = ({ form }: Props) => {
  const [isHide, setHide] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>([]);
  const inputRef = createRef<HTMLInputElement>();

  const handleSaveValue = () => {
    const value = inputRef.current?.value || "";

    if (value === "") {
      return;
    }

    const newValue: any = [...values, value];
    setValues(newValue);

    form.setValue("requiredSkills", newValue);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleDelete = (id: number) => {
    const newSkills: any = values.filter((value, idx) => idx !== id);
    setValues(newSkills);

    form.setValue("requiredSkills", newSkills);
  };

  return (
    <FormField
      control={form.control}
      name="requiredSkills"
      render={() => (
        <FormItem className="block w-2/4">
          <FormControl>
            <>
              <Button
                type="button"
                variant={"outline"}
                className="mb-2"
                onClick={() => setHide((prev) => !prev)}
              >
                <PlusIcon
                  className={cn("mr-2 transition-transform", {
                    "rotate-45": isHide,
                  })}
                />{" "}
                Add Skills
              </Button>
              {isHide && (
                <div className="my-4 flex flex-row gap-4">
                  <Input
                    ref={inputRef}
                    className=""
                    onKeyDown={(e) => {
                      console.log("e", e.key);
                      if (e.key.toLowerCase() === "enter") {
                        handleSaveValue();
                      }
                    }}
                  />
                  <Button type="button" onClick={handleSaveValue}>
                    Save
                  </Button>
                </div>
              )}
              <div className="gap-4 flex flex-wrap">
                {values.map((item, key) => {
                  return (
                    <Badge
                      key={key}
                      variant={"outline"}
                      className="py-1 cursor-pointer"
                      onClick={() => handleDelete(key)}
                    >
                      {item}
                      <XIcon className="ml-1" size={16} />
                    </Badge>
                  );
                })}
              </div>
            </>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputSkills;
