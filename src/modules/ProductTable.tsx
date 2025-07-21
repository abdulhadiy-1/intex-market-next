import { DeleteIcon, EditIcon } from "../assets/icons/icon";
import a from "../assets/images/pool.png";

const ProductTable = () => {
  return (
    <div>
      <div className="flex w-full py-[17px] px-[50px] bg-white rounded-[30px] text-[20px] mb-[22px] justify-between">
        <div style={{width: `${100 / 7 + 1}%`}} className="flex justify-start">Изображение</div>
        <div style={{width: `${100 / 7 + 3}%`}} className="flex justify-start">Цена(сум)</div>
        <div style={{width: `${100 / 7 - 1}%`}} className="flex justify-start">Количество</div>
        <div style={{width: `${100 / 7 + 2}%`}} className="flex justify-start">Рамка</div>
        <div style={{width: `${100 / 7 - 2}%`}} className="flex justify-start">Размер(м)</div>
        <div style={{width: `${100 / 7 }%`}} className="flex justify-start">Глубина(см)</div>
        <div style={{width: `${100 / 7 - 7}%`}} className="flex justify-start">Действия</div>
      </div>
      <div className="space-y-[8px]">
        <div className="flex w-full py-[17px] px-[50px] bg-white rounded-[30px] text-[20px] justify-between max-h-[69px] ">
          <div style={{width: `${100 / 7 + 1}%`}}>
            <img src={a} alt="" />
          </div>
          <div style={{width: `${100 / 7 + 4}%`}} className="leading-[100%]">
          <div className="relative inline-block">
            <p className="text-[16px] text-gray-600">1.800.000 сум</p>
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-red-500 rotate-[7deg]"></div>
          </div>
          <p className="text-[20px] font-bold">1.520.000 сум</p></div>
          <div style={{width: `${100 / 7 - 2}%`}} className="flex items-center justify-start">10</div>
          <div style={{width: `${100 / 7 + 5}%`}} className="flex items-center justify-start">Металлический</div>
          <div style={{width: `${100 / 7 - 2}%`}} className="flex items-center justify-start">2,7</div>
          <div style={{width: `${100 / 7}%`}} className="flex items-center justify-start">60</div>
          <div style={{width: `${100 / 7 - 7}%`}} className="flex items-center justify-start gap-[18px]"><EditIcon /> <DeleteIcon /></div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
