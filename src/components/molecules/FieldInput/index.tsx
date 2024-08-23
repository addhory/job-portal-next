import React, { ReactNode } from "react";

import { Separator } from "@/components/ui/separator";

type Props = {
  children: ReactNode;
  title: string;
  subtitle: string;
};

const FieldInput = ({ children, subtitle, title }: Props) => {
  return (
    <>
      <div className="flex flex-row items-start gap-4">
        <div className="w-[35%]">
          <p className="font-semibold">{title}</p>
          <p className="text-gray-400 w-72 break-words">{subtitle}</p>
        </div>
        {children}
      </div>
      <Separator />
    </>
  );
};

export default FieldInput;
