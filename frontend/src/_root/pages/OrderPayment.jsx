import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderPayment = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <div className="flex p-4 items-center gap-3">
          <Link to="/orders/summary">
            <FaArrowLeft className="text-xl" />
          </Link>
          <h3 className="font-bold text font-['Open Sans'] text-black">
            Transfer Sekarang
          </h3>
        </div>

        <hr />

        <div className="flex px-4 mt-4 align-middle">
          <div className="h-12 w-12 bg-green-700 rounded-lg mr-4" />
          <div>
            <h4 className="font-bold">Bank GoTo</h4>
            <p className="text-sm">PT GoTo Gojek Tokopedia Tbk</p>
          </div>
        </div>

        <div className="px-4 mt-6">
          <h3 className="font-bold text-black">Nomor Rekening</h3>
          <p className="mt-4 font-bold bg-gray-300 p-4 rounded-2xl">12345678</p>
        </div>

        <div className="px-4 mt-6">
          <h3 className="font-bold text-black">Jumlah Transfer</h3>
          <p className="mt-4 font-bold bg-gray-300 p-4 rounded-2xl">
            Rp330.123
          </p>
        </div>
      </div>
      <div className="flex flex-col px-4 gap-3 mb-4">
        <Link to="/home">
          <button className="w-full border-green-700 rounded-lg border-2">
            <p className="font-bold text-green-700 py-3">Kembali ke beranda</p>
          </button>
        </Link>
        <Link to="/orders">
          <button className="w-full bg-green-700 rounded-lg ">
            <p className="font-bold text-white py-3">Saya sudah Bayar</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderPayment;
