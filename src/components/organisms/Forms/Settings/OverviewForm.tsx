"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { overviewFormSchema } from "@/lib/form-schema";

import TitleForm from "@/components/molecules/TitleForm.tsx";

type Props = {};

export const OverviewForm = (props: Props) => {
  const form = useForm<z.infer<typeof overviewFormSchema>>({
    resolver: zodResolver(overviewFormSchema),
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
    </div>
  );
};
