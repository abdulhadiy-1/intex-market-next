import { NavLink } from "react-router-dom";
import { paths } from "../hooks/paths";

const Navbar = () => {
  return (
    <nav className="h-[100vh] overflow-y-auto w-[20%]">
      <div
        style={{ fontFamily: "Signika" }}
        className="py-[34px] w-full text-center border-b-[3px] border-b-[#EBEBFF] text-[23px] text-[#009398]"
      >
        INTEX-MARKET.UZ
      </div>
      <div className="flex flex-col gap-[15px] w-full px-[41px] pt-[33px]">
        <NavLink className="text-[25px] text-[var(--clr-grey)]" to={paths.home}>Продукты</NavLink>
        <NavLink className="text-[25px] text-[var(--clr-grey)]" to={paths.order}>Заказы</NavLink>
        <NavLink className="text-[25px] text-[var(--clr-grey)]" to={paths.category}>Категории</NavLink>
        <NavLink className="text-[25px] text-[var(--clr-grey)]" to={paths.website}>Сайт</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
