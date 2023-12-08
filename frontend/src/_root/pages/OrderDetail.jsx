import React from "react";

const OrderDetail = () => {
  return (
    <div className="w-[390px] h-[844px] relative bg-white">
      <div className="left-[48px] top-[17px] absolute text-black text-base font-bold font-['Open Sans']">
        Detail Pesanan
      </div>
      <div className="w-[390px] h-[0px] left-0 top-[54px] absolute border border-zinc-300"></div>
      <div className="w-[390px] h-[0px] left-0 top-[365px] absolute border-4 border-zinc-300"></div>
      <div className="w-6 h-6 left-[16px] top-[16px] absolute" />
      <div className="left-[16px] top-[381px] absolute text-black text-sm font-bold font-['Open Sans']">
        Transaksi berhasil
      </div>
      <div className="left-[16px] top-[456px] absolute text-black text-sm font-bold font-['Open Sans']">
        Detail
      </div>
      <div className="left-[16px] top-[555px] absolute text-black text-sm font-bold font-['Open Sans']">
        Info transport
      </div>
      <div className="left-[16px] top-[630px] absolute text-black text-sm font-bold font-['Open Sans']">
        Total Pembayaran
      </div>
      <div className="left-[145px] top-[70px] absolute text-black text-sm font-bold font-['Open Sans']">
        Tiket Kode QR
      </div>
      <div className="left-[16px] top-[408px] absolute text-neutral-400 text-xs font-normal font-['Open Sans']">
        Tanggal Transaksi
      </div>
      <div className="left-[16px] top-[483px] absolute text-neutral-400 text-xs font-normal font-['Open Sans']">
        Nama Event
      </div>
      <div className="left-[16px] top-[582px] absolute text-neutral-400 text-xs font-normal font-['Open Sans']">
        Jenis{" "}
      </div>
      <div className="left-[16px] top-[507px] absolute text-neutral-400 text-xs font-normal font-['Open Sans']">
        Tiket
      </div>
      <div className="left-[275px] top-[483px] absolute text-right text-black text-xs font-bold font-['Open Sans']">
        Konser Jekardah
      </div>
      <div className="left-[290px] top-[507px] absolute text-right text-black text-xs font-bold font-['Open Sans']">
        SHOW GOLD 3
      </div>
      <div className="left-[331px] top-[582px] absolute text-right text-black text-xs font-bold font-['Open Sans']">
        GoRide
      </div>
      <div className="left-[310px] top-[631px] absolute text-right text-black text-xs font-bold font-['Open Sans']">
        Rp 890.000
      </div>
      <div className="left-[268px] top-[408px] absolute text-right text-black text-xs font-bold font-['Open Sans']">
        29 Nov 2023 06:52
      </div>
      <div className="w-[390px] h-[0px] left-0 top-[440px] absolute border-4 border-gray-200 border-opacity-70"></div>
      <div className="w-[390px] h-[0px] left-0 top-[539px] absolute border-4 border-gray-200 border-opacity-70"></div>
      <div className="w-[390px] h-[0px] left-0 top-[614px] absolute border-4 border-gray-200 border-opacity-70"></div>
      <div className="left-[74px] top-[97px] absolute text-center text-black text-xs font-normal font-['Open Sans']">
        Scan kode QR ini pada saat datang di event
      </div>
      <img
        className="w-[215px] h-[218px] left-[87px] top-[123px] absolute"
        src="https://via.placeholder.com/215x218"
      />
    </div>
  );
};

export default OrderDetail;
