import { Container, Row, Col, Stack, Card, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 flex overflow-hidden">
        <Container>
          <Row className="pb-3">
            <Col>
              <Stack direction="horizontal" gap={2}>
                <h1 className="p-2">Events</h1>
                <div className="p-2 ms-auto">
                  <img src="/public/assets/history.svg" alt="history-icon" />
                </div>
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container>
                <Row>
                  <Col>
                    <Card style={{ width: "11rem" }}>
                      <Card.Img variant="top" src="/assets/AM-ticket.jpg" />
                      <Card.Body>
                        <Card.Text className="p-0 m-0">Jakarta</Card.Text>
                        <Card.Text className="p-0 m-0 fw-bold">
                          SEA AquariumTM
                        </Card.Text>
                        <Card.Text className="p-0 m-0">
                          Mulai dari <br />{" "}
                          <span className="fw-bold">Rp. 40.0000</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "11rem" }}>
                      <Card.Img
                        variant="top"
                        src="/assets/coldplay-ticket.jpeg"
                      />
                      <Card.Body>
                        <Card.Text className="p-0 m-0">Jakarta</Card.Text>
                        <Card.Text className="p-0 m-0 fw-bold">
                          SEA AquariumTM
                        </Card.Text>
                        <Card.Text className="p-0 m-0">
                          Mulai dari <br />{" "}
                          <span className="fw-bold">Rp. 40.0000</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="pt-3">
                  <Col>
                    <Card style={{ width: "11rem" }}>
                      <Card.Img variant="top" src="/assets/AM-ticket.jpg" />
                      <Card.Body>
                        <Card.Text className="p-0 m-0">Jakarta</Card.Text>
                        <Card.Text className="p-0 m-0 fw-bold">
                          SEA AquariumTM
                        </Card.Text>
                        <Card.Text className="p-0 m-0">
                          Mulai dari <br />{" "}
                          <span className="fw-bold">Rp. 40.0000</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "11rem" }}>
                      <Card.Img
                        variant="top"
                        src="/assets/coldplay-ticket.jpeg"
                      />
                      <Card.Body>
                        <Card.Text className="p-0 m-0">Jakarta</Card.Text>
                        <Card.Text className="p-0 m-0 fw-bold">
                          SEA AquariumTM
                        </Card.Text>
                        <Card.Text className="p-0 m-0">
                          Mulai dari <br />{" "}
                          <span className="fw-bold">Rp. 40.0000</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="pt-3">
                  <Col>
                    <Card style={{ width: "11rem" }}>
                      <Card.Img variant="top" src="/assets/AM-ticket.jpg" />
                      <Card.Body>
                        <Card.Text className="p-0 m-0">Jakarta</Card.Text>
                        <Card.Text className="p-0 m-0 fw-bold">
                          SEA AquariumTM
                        </Card.Text>
                        <Card.Text className="p-0 m-0">
                          Mulai dari <br />{" "}
                          <span className="fw-bold">Rp. 40.0000</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "11rem" }}>
                      <Card.Img
                        variant="top"
                        src="/assets/coldplay-ticket.jpeg"
                      />
                      <Card.Body>
                        <Card.Text className="p-0 m-0">Jakarta</Card.Text>
                        <Card.Text className="p-0 m-0 fw-bold">
                          SEA AquariumTM
                        </Card.Text>
                        <Card.Text className="p-0 m-0">
                          Mulai dari <br />{" "}
                          <span className="fw-bold">Rp. 40.0000</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="pt-3">
                  <Col>
                    <Card style={{ width: "11rem" }}>
                      <Card.Img variant="top" src="/assets/AM-ticket.jpg" />
                      <Card.Body>
                        <Card.Text className="p-0 m-0">Jakarta</Card.Text>
                        <Card.Text className="p-0 m-0 fw-bold">
                          SEA AquariumTM
                        </Card.Text>
                        <Card.Text className="p-0 m-0">
                          Mulai dari <br />{" "}
                          <span className="fw-bold">Rp. 40.0000</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "11rem" }}>
                      <Card.Img
                        variant="top"
                        src="/assets/coldplay-ticket.jpeg"
                      />
                      <Card.Body>
                        <Card.Text className="p-0 m-0">Jakarta</Card.Text>
                        <Card.Text className="p-0 m-0 fw-bold">
                          SEA AquariumTM
                        </Card.Text>
                        <Card.Text className="p-0 m-0">
                          Mulai dari <br />{" "}
                          <span className="fw-bold">Rp. 40.0000</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Home;
