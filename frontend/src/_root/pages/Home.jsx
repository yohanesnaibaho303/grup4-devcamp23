/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Home.css";

import { FaHistory } from "react-icons/fa";
import goHealingAxios from "../../helpers/axios";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await goHealingAxios.get("/api/v1/events");
        const data = await response.json();

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getEvents();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-black">Events</h3>
        <FaHistory />
      </div>

      <div className="flex gap-4">
        {/* card item */}
        <div className="w-1/2 rounded-lg shadow-lg  ">
          <img
            className="rounded-t-lg"
            src="https://imgsrv2.voi.id/GNyuL4nPhKn-fRQV4AK1Q2gFL1zEmkT2RQhw0e09XE4/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yMzcxNDcvMjAyMjEyMTkxNjA1LW1haW4uY3JvcHBlZF8xNjcxNDQwNzQ5LnBuZw.jpg"
            alt=""
          />
          <div className="px-2 pt-4 pb-4">
            <p className="text-sm ">Jakarta</p>
            <h6 className="font-bold">SEA AquariumTM</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ id, imageUrl, city, name }) => {
  return (
    <div className="w-1/2 rounded-lg shadow-lg  ">
      <img className="rounded-t-lg" src={imageUrl} alt={name} />
      <div className="px-2 pt-4 pb-4">
        <p className="text-sm ">{city}</p>
        <h6 className="font-bold">{name}</h6>
      </div>
    </div>
  );
};

export default Home;
