"use client";

import {
  BriefcaseBusinessIcon,
  BuildingIcon,
  CalendarDaysIcon,
  HomeIcon,
  LogOutIcon,
  MailIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

import { Button } from "@/components/ui/button";

const SIDEBAR_MENU: { link?: string; name: string; icon: ReactNode }[] = [
  {
    link: "/dashboard",
    name: "Home",
    icon: <HomeIcon className="mr-2" />,
  },
  {
    link: "/dashboard/messages",
    name: "Messages",
    icon: <MailIcon className="mr-2" />,
  },
  {
    link: "/dashboard/company-profile",
    name: "Company Profile",
    icon: <BuildingIcon className="mr-2" />,
  },
  {
    link: "/dashboard/applicants",
    name: "All Applicants",
    icon: <UsersIcon className="mr-2" />,
  },
  {
    link: "/dashboard/job-listings",
    name: "Job Listings",
    icon: <BriefcaseBusinessIcon className="mr-2" />,
  },
  {
    link: "/dashboard/my-schedule",
    name: "My Schedule",
    icon: <CalendarDaysIcon className="mr-2" />,
  },
];

const Sidebar = () => {
  return (
    <div className="h-full">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-4 px-4 text-xl font-bold">Dashboard</h2>
          <div className="space-y-3">
            {SIDEBAR_MENU.map((item, idx) => (
              <Link href={`${item.link}`} key={idx} className="block">
                <Button
                  variant={"ghost"}
                  className="w-full justify-start rounded-none hover:text-primary"
                >
                  {item.icon}
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-4 px-4 text-xl font-bold">Setting</h2>
          <div className="space-y-3">
            <Link href={`/dashboard/settings`} className="block">
              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-none hover:text-primary"
              >
                <SettingsIcon className="mr-2" />
                Settings
              </Button>
            </Link>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none text-red-400 hover:text-red-500 hover:bg-red-100"
            >
              <LogOutIcon className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
