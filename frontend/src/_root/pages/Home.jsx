import { Container, Row, Col, Stack, Card } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="flex justify-between">
        <div className="title">Events</div>
        <div className="pt-3 pe-3 ms-auto">
          <img src="/assets/history.svg" alt="history-icon" />
        </div>
      </div>
      <div className="eventContainer shadow rounded-lg">
        <div className="eventCard">
          <div className="eventImageContainer">
            <img src="/assets/AM-ticket.jpg" alt="" className="eventImage" />
          </div>
          <div className="eventContent">
            <div className="eventName">SEA AquariumTM</div>
            <div className="eventLocation">Jakarta</div>
          </div>
        </div>
      </div>
      <div className="rightEventContainer shadow rounded-lg">
        <div className="rightEventCard">
          <div className="rightEventImageContainer">
            <img
              src="/assets/coldplay-ticket.jpeg"
              alt=""
              className="rightEventImage"
            />
          </div>
          <div className="rightEventContent">
            <div className="rightEventName">Nama Event</div>
            <div className="rightEventLocation">Lokasi Event</div>
          </div>
        </div>
      </div>
      <div className="bottomLeftEventContainer shadow rounded-lg">
        <div className="bottomLeftEventCard">
          <div className="bottomLeftEventImageContainer">
            <img
              src="/assets/javajazz.png"
              alt=""
              className="bottomLeftEventImage"
            />
          </div>
          <div className="bottomLeftEventContent">
            <div className="bottomLeftEventName">SEA AquariumTM</div>
            <div className="bottomLeftEventLocation">Jakarta</div>
          </div>
        </div>
      </div>
      <div className="bottomRightEventContainer shadow rounded-lg">
        <div className="bottomRightEventCard">
          <div className="bottomRightEventImageContainer">
            <img
              src="/assets/bornpink.png"
              alt=""
              className="bottomRightEventImage"
            />
          </div>
          <div className="bottomRightEventContent">
            <div className="bottomRightEventName">Nama Event</div>
            <div className="bottomRightEventLocation">Lokasi Event</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
