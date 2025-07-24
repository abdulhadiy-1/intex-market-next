import type { FC, JSX, ReactNode } from "react";

const IconInput: FC<{
  icon: JSX.Element;
  title: string;
  children: ReactNode;
}> = ({ icon, title, children }) => {
  return (
    <label className="flex items-center gap-[17px] w-[45%]">
      {icon}
      <div className="space-y-[12px] w-full">
        <p className="text-[23.53px]">{title}</p>
        {children}
      </div>
    </label>
  );
};

export default IconInput;
