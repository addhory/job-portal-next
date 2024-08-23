import { TOption } from "@/types/common";
import { EnumValues } from "zod";

export const JOB_TYPES: EnumValues = [
  "FULL_TIME",
  "PART_TIME",
  "REMOTE",
  "INTERNSHIP",
];

export const JOB_TYPE_OPTIONS = [
  {
    name: "Full Time",
    value: JOB_TYPES[0],
  },
  {
    name: "Part Time",
    value: JOB_TYPES[1],
  },
  {
    name: "Remote",
    value: JOB_TYPES[2],
  },
  {
    name: "Internship",
    value: JOB_TYPES[3],
  },
];

export const JOB_LISTING_COL: string[] = [
  "Roles",
  "Status",
  "Date Posted",
  "Due Date",
  "Job Type",
  "Applicants",
  "Needs",
];

export const JOB_LISTING_DATA = [
  {
    roles: "Software Engineer",
    status: "Live",
    datePosted: "12 Aug 2023",
    dueDate: "12 Sep 2023",
    jobType: "FULL_TIME",
    applicants: 1,
    needs: 10,
  },
];

export const JOB_APPLICANT_COL: string[] = ["Name", "Applied Date"];

export const JOB_APPLICANT_DATA: any[] = [
  {
    name: "John Portaye",
    appliedDate: "11 Sep 2023",
  },
];

export const LOCATION_OPTIONS: TOption[] = [
  {
    label: "Indonesia",
    value: "Indonesia",
  },
  {
    label: "Singapore",
    value: "Singapore",
  },
  {
    label: "Malaysia",
    value: "Malaysia",
  },
  {
    label: "Thailand",
    value: "Thailand",
  },
];

export const EMPLOYEE_QTY_OPTIONS: TOption[] = [
  {
    label: "1-50",
    value: "1-50",
  },
  {
    label: "51-150",
    value: "51-150",
  },
  {
    label: "151-250",
    value: "151-250",
  },
  {
    label: "251-500",
    value: "251-500",
  },
  {
    label: "500-1000",
    value: "500-1000",
  },
  {
    label: "1000+",
    value: "1000+",
  },
];
