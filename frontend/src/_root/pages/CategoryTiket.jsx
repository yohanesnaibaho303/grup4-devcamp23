import React from "react";

const CategoryTiket = () => {
  return (
    <div className="w-[390px] h-[844px] relative bg-white">
      <div className="left-[48px] top-[17px] absolute text-black text-base font-bold font-['Open Sans']">
        Kategori tiket
      </div>
      <div className="w-[390px] h-[0px] left-0 top-[285px] absolute border border-zinc-300"></div>
      <div className="w-6 h-6 left-[16px] top-[16px] absolute" />
      <div className="w-[390px] h-[126px] left-0 top-[108px] absolute">
        <div className="w-[390px] h-[126px] left-0 top-0 absolute">
          <div className="w-[390px] h-[0px] left-0 top-[126px] absolute border border-zinc-300"></div>
          <div className="w-[381px] h-[0px] left-0 top-0 absolute border border-zinc-300"></div>
          <div className="left-[16px] top-[16px] absolute text-black text-sm font-normal font-['Open Sans']">
            SHOW 3 - GOLD
          </div>
          <div className="left-[16px] top-[16px] absolute text-black text-sm font-normal font-['Open Sans']">
            SHOW 3 - GOLD
          </div>
          <div className="left-[16px] top-[87px] absolute text-black text-sm font-bold font-['Open Sans']">
            Rp850.000
          </div>
          <div className="left-[16px] top-[87px] absolute text-black text-sm font-bold font-['Open Sans']">
            Rp850.000
          </div>
          <div className="w-[358px] left-[16px] top-[39px] absolute text-black text-xs font-normal font-['Open Sans']">
            Berlaku untuk 1 orang pemegang tiket Platinum Show lorem ipsum lorem
            ipsum
          </div>
          <div className="w-[358px] left-[16px] top-[39px] absolute text-black text-xs font-normal font-['Open Sans']">
            Berlaku untuk 1 orang pemegang tiket Platinum Show lorem ipsum lorem
            ipsum
          </div>
        </div>
        <div className="w-[88px] h-[27px] px-[43px] py-1.5 left-[286px] top-[83px] absolute rounded-lg border-2 border-emerald-600 justify-center items-center gap-2.5 inline-flex">
          <div className="text-emerald-600 text-xs font-bold font-['Open Sans']">
            Pilih
          </div>
        </div>
      </div>
      <div className="w-[358px] h-[19px] left-[16px] top-[72px] absolute">
        <div className="w-4 h-4 left-[342px] top-[1px] absolute" />
        <div className="left-0 top-0 absolute text-black text-sm font-bold font-['Open Sans']">
          SHOW 1 - 22 Desember 2023 (19.00)
        </div>
      </div>
      <div className="w-[358px] h-[19px] left-[16px] top-[250px] absolute">
        <div className="w-4 h-4 left-[358px] top-[17px] absolute origin-top-left -rotate-180" />
        <div className="left-0 top-0 absolute text-black text-sm font-bold font-['Open Sans']">
          SHOW 2 - 22 Desember 2023 (19.00)
        </div>
      </div>
    </div>
  );
};

export default CategoryTiket;
