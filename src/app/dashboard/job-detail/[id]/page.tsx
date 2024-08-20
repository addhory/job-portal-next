import Link from "next/link";

import Applicants from "@/components/molecules/Applicants";
import JobDetail from "@/components/molecules/JobDetail";
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
  console.log("test");
  return (
    <>
      <div className="inline-flex flex-col gap-5 mb-5">
        <Breadcrumb>
          <BreadcrumbList>
            {BREADCRUMB_ITEM.map((item: any, idx) => (
              <BreadcrumbItem key={item.name + idx}>
                {item?.href ? (
                  <>
                    <BreadcrumbLink asChild>
                      <Link href={`${item.href}`}>{item.title}</Link>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                  </>
                ) : (
                  <BreadcrumbPage>{item?.title}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="">
          <h6 className="text-2xl font-semibold mb-1">Brand Designer</h6>
          <p>Design . Full Time . 1/10 Hired</p>
        </div>
      </div>
      <Tabs defaultValue="applicants">
        <TabsList className="mb-6">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants />
        </TabsContent>
        <TabsContent value="jobDetails">
          <JobDetail />
        </TabsContent>
      </Tabs>
    </>
  );
}
