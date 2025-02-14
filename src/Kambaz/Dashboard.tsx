import {Button, Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr/>
            <div id="wd-dashboard-courses">
                <Row xs={1} md={3} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card style={{ height: "325px", width: "275px" }} className="d-flex flex-column">
                            <Card.Img variant="top" src="/images/5010_logo.png" width="100%" height={160} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="wd-dashboard-course-title">
                                    CS5010</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">
                                    Programming Design Paradigm</Card.Text>
                                <div className="mt-auto">
                                    <Link to="/Kambaz/Courses/5010/Home">
                                        <Button variant="primary">Go</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card style={{ height: "325px", width: "275px" }} className="d-flex flex-column">
                            <Card.Img variant="top" src="/images/5800_logo.png" width="100%" height={160} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="wd-dashboard-course-title">
                                    CS5800</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">
                                    Algorithms</Card.Text>
                                <div className="mt-auto">
                                    <Link to="/Kambaz/Courses/5800/Home">
                                        <Button variant="primary">Go</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card style={{ height: "325px", width: "275px" }} className="d-flex flex-column">
                            <Card.Img variant="top" src="/images/5610_logo.png" width="100%" height={160} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="wd-dashboard-course-title">
                                    CS5610</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">
                                    Web Development</Card.Text>
                                <div className="mt-auto">
                                    <Link to="/Kambaz/Courses/5610/Home">
                                        <Button variant="primary">Go</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card style={{ height: "325px", width: "275px" }} className="d-flex flex-column">
                            <Card.Img variant="top" src="/images/6620_logo.png" width="100%" height={160} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="wd-dashboard-course-title">
                                    CS6620</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">
                                    Fundamentals of Cloud Computing</Card.Text>
                                <div className="mt-auto">
                                    <Link to="/Kambaz/Courses/6620/Home">
                                        <Button variant="primary">Go</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card style={{ height: "325px", width: "275px" }} className="d-flex flex-column">
                            <Card.Img variant="top" src="/images/5100_logo.png" width="100%" height={160} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="wd-dashboard-course-title">
                                    CS5100</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">
                                    Foundations of Artificial Intelligence</Card.Text>
                                <div className="mt-auto">
                                    <Link to="/Kambaz/Courses/5100/Home">
                                        <Button variant="primary">Go</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card style={{ height: "325px", width: "275px" }} className="d-flex flex-column">
                            <Card.Img variant="top" src="/images/6650_logo.png" width="100%" height={160} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="wd-dashboard-course-title">
                                    CS6650</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">
                                    Building Scalable and Distributed Systems</Card.Text>
                                <div className="mt-auto">
                                    <Link to="/Kambaz/Courses/6650/Home">
                                        <Button variant="primary">Go</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card style={{ height: "325px", width: "275px" }} className="d-flex flex-column">
                            <Card.Img variant="top" src="/images/6120_logo.png" width="100%" height={160} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="wd-dashboard-course-title">
                                    CS6120</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">
                                    Natural Language Processing</Card.Text>
                                <div className="mt-auto">
                                    <Link to="/Kambaz/Courses/6120/Home">
                                        <Button variant="primary">Go</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
