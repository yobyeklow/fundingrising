import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const { control, name, placeholder = "", children, ...rest } = props;
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <textarea
      placeholder={placeholder}
      {...props}
      {...field}
      className={`resize-none min-h-[140px]  outline-none dark:border-darkStroke dark:bg-darkSecondary dark:text-whiteSoft w-full py-4 px-6 border rounded-xl text-sm font-medium text-darkBG placeholder:neutral5 border-strockColor`}
    ></textarea>
  );
};

export default Textarea;
