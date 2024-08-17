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
