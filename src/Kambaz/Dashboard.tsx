import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr/>
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5010/Home" className="wd-dashboard-course-link">
                        <img src="/images/5010_logo.png" width={200}/>
                        <div>
                            <h5> CS5010 </h5>
                            <p className="wd-dashboard-course-title">Programming Design Paradigm</p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5800/Home" className="wd-dashboard-course-link">
                        <img src="/images/5800_logo.png" width={200}/>
                        <div>
                            <h5> CS5800 </h5>
                            <p className="wd-dashboard-course-title">Algorithms</p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5610/Home" className="wd-dashboard-course-link">
                        <img src="/images/5610_logo.png" width={200}/>
                        <div>
                            <h5> CS5610 </h5>
                            <p className="wd-dashboard-course-title">Web Development</p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/6620/Home" className="wd-dashboard-course-link">
                        <img src="/images/6620_logo.png" width={200}/>
                        <div>
                            <h5> CS6620 </h5>
                            <p className="wd-dashboard-course-title">Fundamentals of Cloud Computing</p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5100/Home" className="wd-dashboard-course-link">
                        <img src="/images/5100_logo.png" width={200}/>
                        <div>
                            <h5> CS5100 </h5>
                            <p className="wd-dashboard-course-title">Foundations of Artificial Intelligence</p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/6650/Home" className="wd-dashboard-course-link">
                        <img src="/images/6650_logo.png" width={200}/>
                        <div>
                            <h5> CS6650 </h5>
                            <p className="wd-dashboard-course-title">Building Scalable Distributed Systems</p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/6120/Home" className="wd-dashboard-course-link">
                        <img src="/images/6120_logo.png" width={200}/>
                        <div>
                            <h5> CS6120 </h5>
                            <p className="wd-dashboard-course-title">Natural Language Processing</p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
