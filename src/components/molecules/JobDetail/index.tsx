import {
  AwardIcon,
  BriefcaseBusiness,
  CalendarDays,
  HandCoins,
  Handshake,
  Newspaper,
  PartyPopper,
  UserSearch,
} from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const JobDetail = () => {
  return (
    <>
      <div className="grid w-full grid-cols-3 gap-5">
        <div className="col-span-2 space-y-10">
          <div>
            <div className="inline-flex items-center">
              <Newspaper className="mr-2" />
              <p className="text-2xl font-semibold">Description</p>
            </div>
            <p className="mt-3 text-grey-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto nemo minus, doloremque voluptates ex error magni
              blanditiis praesentium, officiis doloribus incidunt quidem, esse
              vel aspernatur iusto nihil ipsam deleniti reiciendis.
            </p>
          </div>
          <div>
            <div className="inline-flex items-center">
              <Handshake className="mr-2" />
              <p className="text-2xl font-semibold">Responsibilities</p>
            </div>
            <p className="mt-3 text-grey-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto nemo minus, doloremque voluptates ex error magni
              blanditiis praesentium, officiis doloribus incidunt quidem, esse
              vel aspernatur iusto nihil ipsam deleniti reiciendis.
            </p>
          </div>
          <div>
            <div className="inline-flex items-center">
              <UserSearch className="mr-2" />
              <p className="text-2xl font-semibold">Who You Are</p>
            </div>
            <p className="mt-3 text-grey-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto nemo minus, doloremque voluptates ex error magni
              blanditiis praesentium, officiis doloribus incidunt quidem, esse
              vel aspernatur iusto nihil ipsam deleniti reiciendis.
            </p>
          </div>
          <div>
            <div className="inline-flex items-center">
              <AwardIcon className="mr-2" />
              <p className="text-2xl font-semibold">{`Nice to Have's`}</p>
            </div>
            <p className="mt-3 text-grey-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto nemo minus, doloremque voluptates ex error magni
              blanditiis praesentium, officiis doloribus incidunt quidem, esse
              vel aspernatur iusto nihil ipsam deleniti reiciendis.
            </p>
          </div>
        </div>
        <div>
          <h6 className="text-2xl font-semibold">About this role</h6>
          <div className="p-3 my-6 text-center border border-solid rounded-md shadow-md">
            <p>
              1 <span>of 10 capacity</span>
            </p>
            <Progress value={33} className="mt-3" />
          </div>
          <div className="my-6 space-y-5">
            <div className="flex justify-between">
              <div className="inline-flex gap-2 items-center text-gray-500">
                <CalendarDays />
                <p>Apply Before</p>
              </div>
              <p className="font-semibold">13 Sept 2023</p>
            </div>
            <div className="flex justify-between">
              <div className="inline-flex gap-2 items-center text-gray-500">
                <CalendarDays />
                <p>Job Posted At</p>
              </div>
              <p className="font-semibold">13 Sept 2023</p>
            </div>
            <div className="flex justify-between">
              <div className="inline-flex gap-2 items-center text-gray-500">
                <BriefcaseBusiness />
                <p>Job Type</p>
              </div>
              <p className="font-semibold">Full Time</p>
            </div>

            <div className="flex justify-between">
              <div className="inline-flex gap-2 items-center text-gray-500">
                <HandCoins />
                <p>Salary</p>
              </div>
              <p className="font-semibold">$100 - $1000 USD</p>
            </div>
          </div>
          <Separator />
          <div className="my-6">
            <p className="mb-4 text-2xl font-semibold">Category</p>
            <div className="space-x-4">
              <Badge className="py-2 px-4">Design</Badge>
            </div>
          </div>
          <Separator />
          <div className="my-6">
            <p className="mb-4 text-2xl font-semibold">Required Skills</p>
            <div className="flex flex-wrap gap-4">
              {["HTML", "Javascript"].map((item, idx) => (
                <Badge
                  key={item + idx}
                  className="py-2 px-4"
                  variant={"outline"}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-8" />
      <div>
        <p className="text-2xl font-semibold">Perks & Benefits</p>
        <p>This job comes with several perks and benefits.</p>
      </div>
      <div className="grid-cols-4 grid gap-5 my-8">
        {[1, 2, 3, 4].map((item) => (
          <div key={item}>
            <PartyPopper className="text-primary w-8 h-8 mb-6" />
            <p className="text-lg font-semibold">Full Healthcare</p>
            <p className="text-gray-500 text-justify mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus, nobis, minus, impedit ut non harum ullam repudiandae
              dicta adipisci amet recusandae voluptatibus aperiam iure.
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default JobDetail;
