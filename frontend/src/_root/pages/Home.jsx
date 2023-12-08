import axios from "axios";
import Spinner from "../../components/Spinner";
import { useEffect, useState } from "react";
import { eventHome } from "../../constans";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";

import { Row, Col, Card } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(eventHome);
  const [loading, setLoading] = useState(false);

  const firstEventData = data[0];
  const secondEventData = data[1];
  const thirdEventData = data[2];
  const fourthEventData = data[3];

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get("url")
  //     .then((res) => {
  //       setData(res.data.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div className="container">
      <div className="flex justify-between">
        <div className="title">Events</div>
        <div className="pt-3 pe-3 ms-auto">
          <Link to="/orders">
            <img src="/assets/history.svg" alt="history-icon" />
          </Link>
        </div>
      </div>
      {/* <Row>
        {eventHome.map((data) => {
          return (
            <Card style={{ width: "18rem" }} key={data.id}>
              <Card.Img variant="top" src={data.image_url} />
              <Card.Body>
                <Card.Title>{data.city}</Card.Title>
                <Card.Text>{data.name}</Card.Text>
                <Card.Text>{data.date}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Row> */}
      <Link to={`/${firstEventData.id}`}>
        <div className="eventContainer shadow rounded-lg">
          {eventHome.slice(0, 1).map((data) => (
            <div className="eventCard" key={data.id}>
              <div className="eventImageContainer">
                <img src={data.image_url} alt="" className="eventImage" />
              </div>
              <div className="eventContent">
                <div className="eventLocation">{data.city}</div>
                <div className="eventName">{data.name}</div>
              </div>
            </div>
          ))}
        </div>
      </Link>
      <Link to={`/${secondEventData.id}`}>
        <div className="rightEventContainer shadow rounded-lg">
          {eventHome.slice(1, 2).map((data) => {
            return (
              <div className="rightEventCard" key={data.id}>
                <div className="rightEventImageContainer">
                  <img
                    src={data.image_url}
                    alt="second"
                    className="rightEventImage"
                  />
                </div>
                <div className="rightEventContent">
                  <div className="rightEventLocation">{data.city}</div>
                  <div className="rightEventName">{data.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Link>
      <Link to={`/${thirdEventData.id}`}>
        <div className="bottomLeftEventContainer shadow rounded-lg pt-16">
          {eventHome.slice(2, 3).map((data) => {
            return (
              <div className="bottomLeftEventCard" key={data.id}>
                <div className="bottomLeftEventImageContainer">
                  <img
                    src={data.image_url}
                    alt=""
                    className="bottomLeftEventImage"
                  />
                </div>
                <div className="bottomLeftEventContent">
                  <div className="bottomLeftEventLocation">{data.city}</div>
                  <div className="bottomLeftEventName">{data.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Link>
      <Link to={`/${fourthEventData.id}`}>
        <div className="bottomRightEventContainer shadow rounded-lg pt-16">
          {eventHome.slice(3, 4).map((data) => {
            return (
              <div className="bottomRightEventCard" key={data.id}>
                <div className="bottomRightEventImageContainer">
                  <img
                    src={data.image_url}
                    alt=""
                    className="bottomRightEventImage"
                  />
                </div>
                <div className="bottomRightEventContent">
                  <div className="bottomRightEventLocation">{data.city}</div>
                  <div className="bottomRightEventName">{data.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Link>
    </div>
  );
};

export default Home;
