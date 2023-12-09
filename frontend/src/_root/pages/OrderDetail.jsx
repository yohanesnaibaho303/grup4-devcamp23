import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderDetail = () => {
  // const [order, setOrder] = useState(null);
  // const { id } = useParams();

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await goHealingAxios.get(`api/v1/orders/${id}`);
  //     const payload = response.data;

  //     setOrder(payload.data);
  //   };

  //   getData();
  // }, [id]);

  return (
    <div className="min-h-screen">
      <div className="flex p-4 items-center gap-3">
        <Link to="/orders/">
          <FaArrowLeft className="text-xl" />
        </Link>
        <h3 className="font-bold text font-['Open Sans'] text-black">
          Detail Pesanan
        </h3>
      </div>

      <hr />

      <div className="flex flex-col items-center mt-4">
        <h6 className="font-bold text-black">Tiket Kode QR</h6>
        <p className="text-gray-500 text-sm mt-2">
          Scan kode QR ini pada saat datang di event
        </p>
        <img
          src="https://www.barcode-generator.org/wp-content/uploads/2013/11/jpeg.jpg"
          alt="qrcode"
        />
      </div>

      <div className="h-1 bg-gray-200 mt-6" />

      <div className="p-4">
        <h6 className="font-bold text-black">Transaksi berhasil</h6>
        <div className="flex justify-between text-sm mt-2">
          <p>Tanggal transaksi</p>
          <p className="font-bold">8 Des 2023 14:52</p>
        </div>
      </div>

      <hr />

      <div className="p-4">
        <h6 className="font-bold text-black">Transaksi berhasil</h6>
        <div className="flex justify-between text-sm mt-2">
          <p>Nama Event</p>
          <p className="font-bold">Artic Monkeys Asia Tour 2023</p>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <p>Kategori Tiket</p>
          <p className="font-bold">VIP</p>
        </div>
      </div>

      <hr />

      <div className="p-4">
        <h6 className="font-bold text-black">Info transport</h6>
        <div className="flex justify-between text-sm mt-2">
          <p>Jenis</p>
          <p className="font-bold">GoRide</p>
        </div>
      </div>

      <hr />

      <div className="p-4 flex justify-between">
        <h6 className="font-bold text-black">Total Pembayaran</h6>
        <p className="font-bold">Rp330.000</p>
      </div>
    </div>
  );
};

export default OrderDetail;
