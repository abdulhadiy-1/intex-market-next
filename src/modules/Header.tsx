import { UserIcon } from "../assets/icons/icon";

const Header = () => {
  return (
    <div className="pt-[39px] pb-[38px] w-full bg-[var(--clr-bg)] border-b-[3px] border-b-[#EBEBFF] flex items-center justify-end text-[var(--clr-grey)] text-[22px] leading-[100%] px-[61px]">
      <span className="after:content-[''] after:w-[3px] after:h-[14px] after:bg-[var(--clr-grey)] after:mx-[28px] flex items-center">
        Просмотр веб-сайта
      </span>
      <div className="flex items-center gap-[10px]">
        <UserIcon /> Joe Melton
      </div>
    </div>
  );
};

export default Header;
