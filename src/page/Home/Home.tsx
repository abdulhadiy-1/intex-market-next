import { Button, Input } from "antd";
import { LupaIcon } from "../../assets/icons/icon";
import ProductTable from "../../modules/ProductTable";
import { useState } from "react";
import Heading from "../../components/Heading";
import CreateModal from "../../modules/CreateModal";

const Home = () => {
  const [active, setActive] = useState<"Каркасные" | "Надувные">("Каркасные")
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="bg-[var(--clr-bg)] h-[100vh] overflow-y-auto pt-[22px]">

      <div className="containers">
        <div className="flex items-center justify-between">
          <div className="relative rounded-full overflow-hidden shadow-md ">
            <Input placeholder="Найти" className="!py-[15px] !text-[20px] !pl-[34px] !pr-[78px] !border-none !text-[var(--clr-grey)]" />
            <div className="absolute right-[24px] top-[18px] border-l-[1px] border-[var(--clr-grey)] pl-[29px]">
              <LupaIcon />
            </div>
          </div>
          <Button onClick={() => setIsOpen(true)} type="primary" className="!rounded-[29px] !text-[20px] !font-bold !py-[30px] !px-[14px]">+ Добавить продукт</Button>
        </div>
        <div className="flex gap-[46px] justify-center pt-[40px] pb-[66px] w-full">
          <button onClick={() => setActive("Каркасные")}>
          <Heading classList={`${active == "Каркасные" && "!text-[var(--clr-green)] border-b-[3px] border-b-[var(--clr-green)]"} cursor-pointer`} title="Каркасные"/>
          </button>
          <button onClick={() => setActive("Надувные")}>
          <Heading classList={`${active == "Надувные" && "!text-[var(--clr-green)] border-b-[3px] border-b-[var(--clr-green)]"} cursor-pointer`} title="Надувные"/>
          </button>
        </div>
        <ProductTable />
      </div>
      <CreateModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default Home;
