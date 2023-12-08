import { FaArrowLeft } from "react-icons/fa";

const OrderSummary = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <div className="flex p-4 items-center gap-3">
          <FaArrowLeft className="text-xl" />
          <h3 className="font-bold text font-['Open Sans'] text-black">
            Ringkasan Pesanan
          </h3>
        </div>

        <hr />

        <div className="flex p-4 gap-4 items-center">
          <div>
            <p className="text-sm">22 Desember 2023</p>
            <h6 className="font-bold text-black">
              From 2 With Love (F2WL) 2024 - Gadhavestra
            </h6>
            <p className="text-sm ">Show 3 - 23 Desember 2023 (19:00)</p>
          </div>
          <div className="w-36 h-14 bg-gray-200" />
        </div>

        <div className="h-1 bg-gray-200" />

        <div className="p-4">
          <h6 className="font-bold text-black">Ringkasan harga</h6>
          <div className="flex justify-between mt-4 text-sm">
            <p>Reguler(x1)</p>
            <p className="font-bold">Rp850.000</p>
          </div>
          <div className="flex justify-between mt-2 text-sm ">
            <p>GoRide</p>
            <p className="font-bold">Rp30.000</p>
          </div>
        </div>

        <hr />

        <div className="flex justify-between p-4">
          <h6 className="font-bold text-black">Total Pembayaran</h6>
          <p className="font-bold">Rp850.000</p>
        </div>
      </div>

      <button className=" bg-green-700 rounded-lg mb-4 mx-4">
        <p className="font-bold text-white py-3">Beli</p>
      </button>
    </div>
  );
};

export default OrderSummary;
