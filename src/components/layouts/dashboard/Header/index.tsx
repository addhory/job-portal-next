"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();

  return (
    <div className="p-6 border-b border-border flex justify-between items-center">
      <div>
        <h2>Company</h2>
        <h3 className="font-bold">Twitter</h3>
      </div>
      <div>
        <Link href={`${pathname}/post-a-job`}>
          <Button>
            <PlusIcon className="mr-2" />
            Post a job
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
