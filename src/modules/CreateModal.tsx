import { CloseOutlined } from "@ant-design/icons";
import { useState, type Dispatch, type SetStateAction } from "react";
import {
  CategoryIcon,
  CountIcon,
  FrameIcon,
  ImageIcon,
  PriceIcon,
  SizeIcon,
  StatusIcon,
} from "../assets/icons/icon";
import SearchSelect from "../components/SearchSelect";
import IconInput from "../components/IconInput";
import { Button, Input } from "antd";

const CreateModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [category, setCategory] = useState<number | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [equipment, setEquipment] = useState<number | null>(null);
  const [equipmentUz, setEquipmentUz] = useState<number | null>(null);
  const [count, setCount] = useState<number>(0);
  const [startPrice, setStartPrice] = useState<number>(0);
  const [discountPrice, setDiscountPrice] = useState<number>(0);
  const [frame, setFrame] = useState<string>("");
  const [frameUz, setFrameUz] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [depth, setDepth] = useState<string>("");

  const rows = [
    [
      {
        icon: <CategoryIcon />,
        title: "Категории",
        component: (
          <SearchSelect
            value={category}
            onChange={setCategory}
            placeholder="Select"
          />
        ),
      },
      {
        icon: <CountIcon />,
        title: "Количество",
        component: (
          <Input
            required
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            type="number"
            min={0}
            variant="borderless"
            className="!text-[20px] !bg-white"
          />
        ),
      },
    ],
    [
      {
        icon: <PriceIcon />,
        title: "Стартовая цена (сум)",
        component: (
          <Input
            required
            value={startPrice}
            onChange={(e) => setStartPrice(Number(e.target.value))}
            type="number"
            min={0}
            variant="borderless"
            className="!text-[20px] !bg-white"
          />
        ),
      },
      {
        icon: <PriceIcon />,
        title: "Цена со скидкой (сум)",
        component: (
          <Input
            required
            value={discountPrice}
            onChange={(e) => setDiscountPrice(Number(e.target.value))}
            type="number"
            min={0}
            variant="borderless"
            className="!text-[20px] !bg-white"
          />
        ),
      },
    ],
    [
      {
        icon: <FrameIcon />,
        title: "Рамка",
        component: (
          <Input
            required
            value={frame}
            onChange={(e) => setFrame(e.target.value)}
            variant="borderless"
            className="!text-[20px] !bg-white"
          />
        ),
      },
      {
        icon: <FrameIcon />,
        title: "Рамка на узбекском",
        component: (
          <Input
            required
            value={frameUz}
            onChange={(e) => setFrameUz(e.target.value)}
            variant="borderless"
            className="!text-[20px] !bg-white"
          />
        ),
      },
    ],
    [
      {
        icon: <SizeIcon />,
        title: "Размер (м)",
        component: (
          <Input
            required
            value={size}
            onChange={(e) => setSize(e.target.value)}
            variant="borderless"
            className="!text-[20px] !bg-white"
          />
        ),
      },
      {
        icon: <SizeIcon />,
        title: "Глубина(см)",
        component: (
          <Input
            required
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            variant="borderless"
            className="!text-[20px] !bg-white"
          />
        ),
      },
    ],
    [
      {
        icon: <StatusIcon />,
        title: "Статус",
        component: (
          <SearchSelect
            onChange={setStatus}
            value={status}
            placeholder="Select"
          />
        ),
      },
    ],
  ];

  return (
    <div
      className={`${
        !isOpen && "hidden"
      } absolute inset-0 backdrop-blur-[6px] bg-[#00000058] overflow-y-auto py-[30px] flex`}
    >
      <form className="px-[108px] relative py-[40px] bg-[var(--clr-bg)] mx-auto my-auto rounded-[35px] flex flex-col items-center text-[var(--clr-grey)]">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-[40px] right-[40px] text-[35px] cursor-pointer"
        >
          <CloseOutlined />
        </button>

        <label>
          <input required type="file" hidden />
          <div className="flex items-center border-dashed border-[2px] bg-white border-[#3A3A3A] px-[130px] py-[125px] rounded-[21.73px] gap-[29px] cursor-pointer shadow-lg">
            <ImageIcon />
            <p className="text-[30px]">Выберите изображение</p>
          </div>
        </label>

        {rows.map((row, i) => (
          <div
            key={i}
            className="flex items-center mt-[33px] w-[1000px] justify-between"
          >
            {row.map((input, index) => (
              <IconInput key={index} icon={input.icon} title={input.title}>
                {input.component}
              </IconInput>
            ))}
          </div>
        ))}
        <div className="w-full">
          <div className="pt-[35px]">
            <SearchSelect
              value={equipment}
              onChange={setEquipment}
              placeholder="Комплектация"
            />
          </div>
          <div className="pt-[16px]">
            <SearchSelect
              value={equipmentUz}
              onChange={setEquipmentUz}
              placeholder="Комплектация на узбекском"
            />
          </div>
        </div>
        <div className="flex w-full justify-center pt-[33px]">
          <Button
          htmlType="submit"
            type="primary"
            className="!rounded-[25px] !text-[25px] w-[240px] !h-[50px]"
          >
            Добавить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateModal;
