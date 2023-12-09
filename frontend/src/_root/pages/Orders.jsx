/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import goHealingAxios from "../../helpers/axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrdersData = async () => {
      try {
        const response = await goHealingAxios.get(`api/v1/orders`);
        const payload = response.data;

        setOrders(payload.data);
      } catch (error) {
        console.log(error);
      }
    };

    getOrdersData();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="flex p-4 items-center gap-3">
        <Link to="/home">
          <FaArrowLeft className="text-xl" />
        </Link>
        <h3 className="font-bold text font-['Open Sans'] text-black">
          Riwayat Pesanan
        </h3>
      </div>

      <hr />

      <div className="mx-4 gap-4 mt-4 flex flex-col">
        {orders.slice(0, 1).map((order, idx) => (
          <OrderCard
            key={idx + order.event_name}
            id={order.id}
            createdAt={order.created_at}
            updatedAt={order.updated_at}
            ticketCategory={order.ticket_category}
            eventName={order.event_name}
            eventDate={order.event_date}
            amount={order.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;

const OrderCard = ({
  id,
  createdAt,
  // updatedAt,
  ticketCategory,
  eventName,
  eventDate,
  amount,
}) => {
  return (
    <Link to={`/orders/${id}`}>
      <div className="shadow-lg drop-shadow-sm rounded px-4 pt-2 pb-3 border">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-green-700 w-7 h-7 rounded mr-2" />
            <div>
              <p className="text-sm font-bold">Event</p>
              <p className="text-xs">8 Des 2023</p>
            </div>
          </div>
          <p className="bg-green-200 text-green-700 text-sm py-1 px-2 rounded-md">
            Berhasil
          </p>
        </div>
        <hr className="mt-2" />
        <div className="py-2">
          <p className="text-sm">VIP</p>
          <h6 className="font-bold text-lg">Artic Monkeys Asia Tour 2023</h6>
          <p className="text-sm">12 Desember 2023 (19:00)</p>
        </div>

        <p className="text-sm mt-2">Total bayar</p>
        <p className="font-bold text-sm">Rp330.000</p>
      </div>
    </Link>
  );
};
