/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Home.css";

import { FaHistory } from "react-icons/fa";
import goHealingAxios from "../../helpers/axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEventsData = async () => {
      try {
        const response = await goHealingAxios.get("/api/v1/events");
        const payload = response.data;

        setEvents(payload.data);
      } catch (error) {
        console.log(error);
      }
    };

    getEventsData();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-black">Events</h3>
        <Link to="/orders">
          <FaHistory />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {events.map((event, idx) => (
          <EventCard
            key={idx + event.name}
            id={event.id}
            imageUrl={event.image_url}
            city={event.city}
            name={event.name}
          />
        ))}
      </div>
    </div>
  );
};

const EventCard = ({ id, imageUrl, city, name }) => {
  return (
    <Link to={`/${id}`}>
      <div className="w-full rounded-lg shadow-lg  ">
        <img className="rounded-t-lg w-full h-28" src={imageUrl} alt={name} />
        <div className="px-2 pt-4 pb-4">
          <p className="text-sm ">{city}</p>
          <h6 className="font-bold">{name}</h6>
        </div>
      </div>
    </Link>
  );
};

export default Home;
