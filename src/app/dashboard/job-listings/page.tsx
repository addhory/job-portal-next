import { EditIcon } from "lucide-react";
import Link from "next/link";

import { JOB_LISTING_COL, JOB_LISTING_DATA } from "@/constants";

import { Badge } from "@/components/ui/badge";
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

export default function Page() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Job Listings</h1>
      </div>
      {/* start table job list */}
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {JOB_LISTING_COL.map((item, idx) => {
              return <TableHead key={item + idx}>{item}</TableHead>;
            })}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {JOB_LISTING_DATA.map((item, idx) => {
            return (
              <TableRow key={`${item.roles + idx}`}>
                <TableCell className="font-medium">{item?.roles}</TableCell>
                <TableCell>
                  <Badge>{item.status}</Badge>
                </TableCell>
                <TableCell>{item.datePosted}</TableCell>
                <TableCell>{item.dueDate}</TableCell>
                <TableCell>
                  <Badge variant={"outline"}>{item.jobType}</Badge>
                </TableCell>
                <TableCell>{item.applicants}</TableCell>
                <TableCell>
                  {item.applicants} / ${item.needs}
                </TableCell>
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
    </div>
  );
}
