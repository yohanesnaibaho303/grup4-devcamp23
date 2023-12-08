import { FaArrowLeft } from "react-icons/fa";

const Orders = () => {
  return (
    <div className="min-h-screen">
      <div className="flex p-4 items-center gap-3">
        <FaArrowLeft className="text-xl" />
        <h3 className="font-bold text font-['Open Sans'] text-black">
          Riwayat Pesanan
        </h3>
      </div>

      <hr />

      <div className="mx-4 flex flex-col gap-2 mt-4  ">
        {/* Card */}
        <div className="shadow-xl drop-shadow-sm rounded px-4 pt-2 pb-3 border">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-green-700 w-7 h-7 rounded mr-2" />
              <div>
                <p className="text-sm font-bold">Event</p>
                <p className="text-xs">8 Dec 2023</p>
              </div>
            </div>
            <p className="bg-green-400 text-green-700 text-sm py-1 px-2 rounded-md">
              Berhasil
            </p>
          </div>
          <hr className="mt-2" />
          <div className="py-2">
            <p className="text-sm">Reguler</p>
            <h6 className="font-bold text-lg">Konser Jekardah</h6>
            <p className="text-sm">Min, 10 Dec 2023</p>
          </div>

          <p className="text-sm mt-2">Total bayar</p>
          <p className="font-bold text-sm">Rp487.500</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
