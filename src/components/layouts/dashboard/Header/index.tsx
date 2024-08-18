"use client";

import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="p-6 border-b border-border flex justify-between items-center">
      <div>
        <h2>Company</h2>
        <h3 className="font-bold">Twitter</h3>
      </div>
      <div>
        <Link href={`/dashboard/post-a-job`}>
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
