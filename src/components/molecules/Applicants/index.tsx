import { EditIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { JOB_APPLICANT_COL, JOB_APPLICANT_DATA } from "@/constants";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Applicants = () => {
  return (
    <>
      {/* start table job list */}
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {JOB_APPLICANT_COL.map((item, idx) => {
              return <TableHead key={item + idx}>{item}</TableHead>;
            })}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {JOB_APPLICANT_DATA.map((item, idx) => {
            return (
              <TableRow key={`${item.name + idx}`}>
                <TableCell className="font-medium">{item?.name}</TableCell>
                <TableCell>{item.appliedDate}</TableCell>

                <TableCell>
                  <Link href={"/dashboard/job-detail/1"}>
                    <Button size={"icon"} variant={"outline"}>
                      <EditIcon size={16} />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {/* end table job list */}
    </>
  );
};

export default Applicants;
