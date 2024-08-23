import { PlusIcon, XIcon } from "lucide-react";
import React, { createRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props = {
  form: UseFormReturn<z.infer<any>>;
  name: string;
  label: string;
};

const InputSkills = ({ form, name, label = "" }: Props) => {
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

    form.setValue(name, newValue);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleDelete = (id: number) => {
    const newSkills: any = values.filter((value, idx) => idx !== id);
    setValues(newSkills);

    form.setValue(name, newSkills);
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className="block w-2/4">
          <FormLabel className="block">{label}</FormLabel>
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
                />
                {label}
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
