import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const [suggestTransportModalVisibility, setSuggestTransportModalVisibility] =
    useState(false);
  const [chooseTransportModalVisibility, setChooseTransportModalVisibility] =
    useState(false);
  const [textGoRideVisibility, setTextGoRideVisibility] = useState(false);
  const [isBtnBuyFirstClick, setIsBtnBuyFirstClick] = useState(true);
  const navigate = useNavigate();

  const handleGoRideClick = () => {
    setTextGoRideVisibility(true);
    setChooseTransportModalVisibility(false);
  };

  const handleBtnWantTransportClick = () => {
    setChooseTransportModalVisibility(true);
    setSuggestTransportModalVisibility(false);
  };

  const handleBtnBuyClick = () => {
    if (isBtnBuyFirstClick) {
      setIsBtnBuyFirstClick(false);
      setSuggestTransportModalVisibility(true);
    } else {
      navigate("/orders/payment");
    }
  };

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
            <p className="text-sm">12 Desember 2023 (19:00)</p>
            <h6 className="font-bold text-black">
              Artic Monkeys Asia Tour 2023
            </h6>
            <p className="text-sm "></p>
          </div>
          <img
            className="w-36 h-18 rounded-lg"
            src="https://imgsrv2.voi.id/GNyuL4nPhKn-fRQV4AK1Q2gFL1zEmkT2RQhw0e09XE4/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yMzcxNDcvMjAyMjEyMTkxNjA1LW1haW4uY3JvcHBlZF8xNjcxNDQwNzQ5LnBuZw.jpg"
            alt=""
          />
        </div>

        <div className="h-1 bg-gray-200" />

        <div className="p-4">
          <h6 className="font-bold text-black">Ringkasan harga</h6>
          <div className="flex justify-between mt-4 text-sm">
            <p>Tiket VIP(x1)</p>
            <p className="font-bold">Rp300.000</p>
          </div>
          {textGoRideVisibility ? (
            <div className="flex justify-between mt-2 text-sm ">
              <p>GoRide</p>
              <p className="font-bold">Rp30.000</p>
            </div>
          ) : null}
        </div>

        <hr />

        <div className="flex justify-between p-4">
          <h6 className="font-bold text-black">Total Pembayaran</h6>
          <p className="font-bold">Rp330.000</p>
        </div>
      </div>

      <button
        className=" bg-green-700 rounded-lg mb-4 mx-4"
        onClick={handleBtnBuyClick}
      >
        <p className="font-bold text-white py-3">Beli</p>
      </button>

      {/*  suggest transport modal */}
      {suggestTransportModalVisibility ? (
        <div className="fixed bottom-0 bg-white px-4 w-full pt-6 border-t-2 border-gray-700 rounded-t-2xl">
          <h6 className="font-bold">Ga pengen ribet mikirin transport?</h6>
          <div className="bg-gray-300 w-full h-48 mt-3" />
          <div className="flex flex-col gap-3 mb-4 mt-6">
            <button className="w-full border-green-700 rounded-lg border-2">
              <p className="font-bold text-green-700 py-2">Ga, makasih</p>
            </button>

            <button
              className="w-full bg-green-700 rounded-lg"
              onClick={handleBtnWantTransportClick}
            >
              <p className="font-bold text-white py-2">
                Pilihkan rekomendasi transport
              </p>
            </button>
          </div>
        </div>
      ) : null}

      {/* transport recommendation modal */}
      {chooseTransportModalVisibility ? (
        <div className="fixed bottom-0 bg-white px-4 w-full pt-6 border-t-2 border-gray-700 rounded-t-2xl">
          <h6 className="font-bold">Rekomendasi Transport</h6>
          <div className="mt-4 flex flex-col gap-5 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <img
                  className="w-14 "
                  src="https://github-production-user-asset-6210df.s3.amazonaws.com/76932074/289181541-173dbf87-9519-49fd-a915-7133c6496f8c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231208%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231208T233743Z&X-Amz-Expires=300&X-Amz-Signature=b773dcbca7fc49e386decc526959704d708309aaad5de897f2051034dfb09792&X-Amz-SignedHeaders=host&actor_id=54427272&key_id=0&repo_id=728940828"
                  alt=""
                />
                <p className="font-bold">GoCar</p>
              </div>
              <p className="font-bold">Rp50.000</p>
            </div>

            <div
              className="flex items-center justify-between"
              onClick={handleGoRideClick}
            >
              <div className="flex gap-2 items-center">
                <img
                  className="w-14 "
                  src="https://github-production-user-asset-6210df.s3.amazonaws.com/76932074/289182446-bf5e098e-5038-4d5f-abd0-b520b43c08b9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231208%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231208T234047Z&X-Amz-Expires=300&X-Amz-Signature=fb877de6f0883ba2f12d384f5c91a134b944e0d3afda24fc12efd2b737b6f610&X-Amz-SignedHeaders=host&actor_id=54427272&key_id=0&repo_id=728940828"
                  alt=""
                />
                <p className="font-bold">GoRide</p>
              </div>
              <p className="font-bold">Rp30.000</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default OrderSummary;
