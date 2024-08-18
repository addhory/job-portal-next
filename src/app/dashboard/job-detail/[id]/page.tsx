import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BREADCRUMB_ITEM = [
  {
    title: "Job Listings",
    href: "/dashboard/job-listings",
  },
  {
    title: "Job Detail",
    isLastItem: true,
  },
];

export default function Page() {
  return (
    <>
      <div className="inline-flex flex-col gap-5 mb-5">
        <Breadcrumb separator>
          <BreadcrumbList>
            {BREADCRUMB_ITEM.map((item: any, idx) => (
              <>
                <BreadcrumbItem key={item.name + idx}>
                  <BreadcrumbLink asChild>
                    {item?.href ? (
                      <Link href={`${item.href}`}>{item.title}</Link>
                    ) : (
                      <BreadcrumbPage>{item?.title}</BreadcrumbPage>
                    )}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {!item?.isLastItem && <BreadcrumbSeparator />}
              </>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="">
          <h6 className="text-2xl font-semibold mb-1">Brand Designer</h6>
          <p>Design . Full Time . 1/10 Hired</p>
        </div>
      </div>
    </>
  );
}
