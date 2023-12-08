import React from "react";

const OrderSummary = () => {
  return (
    <div className="w-[390px] h-[844px] relative bg-white">
      <div className="w-[339px] h-[59px] px-[154px] py-5 left-[32px] top-[767px] absolute bg-emerald-600 rounded justify-center items-center gap-1 inline-flex">
        <div className="text-white text-base font-bold font-['Inter']">
          Pilih
        </div>
      </div>
      <div className="w-[390px] h-[392px] left-0 top-[452px] absolute bg-white rounded-tl-2xl rounded-tr-2xl shadow" />
      <div className="left-[19px] top-[476px] absolute text-black text-base font-bold font-['Open Sans']">
        Ga pengen ribet mikirin transport?
      </div>
      <div className="w-[350px] h-[182px] left-[19px] top-[510px] absolute bg-zinc-300" />
      <div className="w-[352px] h-12 px-[99px] py-5 left-[19px] top-[780px] absolute bg-emerald-600 rounded justify-center items-center gap-3.5 inline-flex">
        <div className="text-white text-base font-bold font-['Inter']">
          Pilihkan rekomendasi transport
        </div>
      </div>
      <div className="w-[352px] h-12 px-[99px] py-5 left-[19px] top-[716px] absolute bg-white rounded border-2 border-emerald-600 justify-center items-center gap-3.5 inline-flex">
        <div className="text-emerald-600 text-base font-bold font-['Inter']">
          Ga, makasih
        </div>
      </div>
      <div className="left-[15px] top-[235px] absolute text-black text-sm font-normal font-['Inter']">
        SHOW 3 - GOLD(x1)
      </div>
      <div className="left-[294px] top-[235px] absolute text-right text-black text-sm font-bold font-['Inter']">
        Rp850.000
      </div>
      <div className="w-[116px] h-[67px] left-[257px] top-[82px] absolute bg-zinc-300 rounded-lg" />
      <div className="left-[47px] top-[17px] absolute text-black text-base font-bold font-['Open Sans']">
        RIngkasan Pesanan
      </div>
      <div className="w-[390px] h-[0px] left-[-1px] top-[54px] absolute border border-zinc-300"></div>
      <div className="w-[390px] h-[0px] left-[-1px] top-[276px] absolute border border-zinc-300"></div>
      <div className="w-[390px] h-[0px] left-[-1px] top-[173px] absolute border-4 border-zinc-300"></div>
      <div className="w-6 h-6 left-[15px] top-[16px] absolute" />
      <div className="left-[15px] top-[70px] absolute text-black text-sm font-semibold font-['Open Sans']">
        22 Desember 2023
      </div>
      <div className="left-[15px] top-[141px] absolute text-black text-xs font-normal font-['Open Sans']">
        Show 3 - 23 Desember 2023 (19:00)
      </div>
      <div className="w-[229px] left-[15px] top-[93px] absolute text-black text-base font-bold font-['Open Sans']">
        From 2 With Love (F2WL) 2024 - Gadhavestra
      </div>
      <div className="left-[15px] top-[197px] absolute text-black text-base font-bold font-['Open Sans']">
        Ringkasan harga
      </div>
      <div className="left-[15px] top-[300px] absolute text-black text-base font-bold font-['Open Sans']">
        Total Pembayaran
      </div>
      <div className="left-[293px] top-[300px] absolute text-right text-black text-base font-bold font-['Open Sans']">
        Rp850.000
      </div>
    </div>
  );
};

export default OrderSummary;
