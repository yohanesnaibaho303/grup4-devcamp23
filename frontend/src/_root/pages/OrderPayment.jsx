import React from "react";

const OrderPayment = () => {
  return (
    <div className="w-[390px] h-[844px] relative bg-white">
      <div className="w-[352px] h-12 px-[99px] py-5 left-[19px] top-[778px] absolute bg-emerald-600 rounded justify-center items-center gap-3.5 inline-flex">
        <div className="text-white text-base font-bold font-['Inter']">
          Saya sudah bayar
        </div>
      </div>
      <div className="w-[352px] h-12 px-[99px] py-5 left-[19px] top-[714px] absolute bg-white rounded border-2 border-emerald-600 justify-center items-center gap-3.5 inline-flex">
        <div className="text-emerald-600 text-base font-bold font-['Inter']">
          Kembali ke beranda
        </div>
      </div>
      <div className="left-[48px] top-[20px] absolute text-black text-base font-bold font-['Open Sans']">
        Transfer Sekarang
      </div>
      <div className="w-[390px] h-[0px] left-0 top-[59px] absolute border border-zinc-300"></div>
      <div className="w-6 h-6 left-[16px] top-[19px] absolute" />
      <div className="w-12 h-12 left-[16px] top-[76px] absolute bg-emerald-600 rounded-lg" />
      <div className="w-[167px] h-[37px] left-[79px] top-[81px] absolute">
        <div className="left-0 top-0 absolute text-black text-sm font-bold font-['Open Sans']">
          Bank GoTo
        </div>
        <div className="left-0 top-[21px] absolute text-black text-xs font-normal font-['Open Sans']">
          PT GoTo Gojek Tokopedia Tbk
        </div>
      </div>
      <div className="w-[357px] px-[17px] py-5 left-[16px] top-[184px] absolute bg-zinc-300 rounded-2xl justify-start items-start gap-[221px] inline-flex">
        <div className="text-black text-base font-bold font-['Open Sans']">
          12345678
        </div>
        <div className="w-6 h-6 relative">
          <div className="w-4 h-[18px] left-[4px] top-[3px] absolute"></div>
        </div>
      </div>
      <div className="w-[357px] px-[17px] py-5 left-[14px] top-[320px] absolute bg-zinc-300 rounded-2xl justify-center items-center gap-[206px] inline-flex">
        <div className="text-black text-base font-bold font-['Open Sans']">
          Rp890.123
        </div>
        <div className="w-6 h-6 relative">
          <div className="w-4 h-[18px] left-[4px] top-[3px] absolute"></div>
        </div>
      </div>
      <div className="left-[17px] top-[146px] absolute text-black text-base font-bold font-['Open Sans']">
        Nomor Rekening
      </div>
      <div className="left-[16px] top-[281px] absolute text-black text-base font-bold font-['Open Sans']">
        Jumlah Transfer
      </div>
    </div>
  );
};

export default OrderPayment;
