import React from "react";

type TProps = {
  title: string;
  subtitle: string;
};

const TitleForm = ({ title, subtitle }: TProps) => {
  return (
    <div className="my-5">
      <p className="text-lg font-semibold">{title}</p>
      <p>{subtitle}</p>
    </div>
  );
};

export default TitleForm;
