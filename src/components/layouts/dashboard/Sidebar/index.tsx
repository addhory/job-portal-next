import { Button } from "@/components/ui/button";
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
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="h-full">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-4 px-4 text-xl font-bold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <HomeIcon className="mr-2" />
              Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <MailIcon className="mr-2 " />
              Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <BuildingIcon className="mr-2 " />
              Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <UsersIcon className="mr-2 " />
              All Applicants
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <BriefcaseBusinessIcon className="mr-2 " />
              Job Listings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <CalendarDaysIcon className="mr-2 " />
              My Schedule
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-4 px-4 text-xl font-bold">Setting</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <SettingsIcon className="mr-2" />
              Settings
            </Button>
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
