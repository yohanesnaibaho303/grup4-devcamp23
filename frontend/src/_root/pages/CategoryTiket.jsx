import { FaArrowLeft } from "react-icons/fa";

const CategoryTiket = () => {
  return (
    <div className="min-h-screen">
      <div className="flex p-4 items-center gap-3">
        <FaArrowLeft className="text-xl" />
        <h3 className="font-bold text font-['Open Sans'] text-black">
          Kategori Tiket
        </h3>
      </div>

      <hr />
      {/* tiket item */}
      <div className="p-4">
        <h6>Reguler</h6>
        <p className="text-xs">Berlaku untuk 1 orang</p>
        <div className="flex justify-between mt-2">
          <p className="font-bold">Rp850.000</p>
          <button className="border-2 border-green-700 rounded-lg px-4">
            <p className="font-bold text-sm text-green-700">Pilih</p>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CategoryTiket;
