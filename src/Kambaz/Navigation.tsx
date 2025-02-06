import {NavLink} from "react-router-dom";
import {FaUserCircle} from "react-icons/fa";
import {AiOutlineDashboard} from "react-icons/ai";
import {LiaBookSolid} from "react-icons/lia";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaInbox } from "react-icons/fa6";
import { AiOutlineSetting } from "react-icons/ai";

export default function KambazNavigation() {
    return (
        <div id="wd-kambaz-navigation" style={{width: 110}}
             className="list-group rounded-0 position-fixed
            bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a href="https://www.northeastern.edu/"
               className="list-group-item bg-black border-0 text-center">
                <img src="/images/NEU.png" width="75px"/>
            </a>
            <NavLink to="/Kambaz/Account" id="wd-account-link"
                  className={({ isActive }) =>
                      `list-group-item text-center border-0 ${
                          isActive ? "bg-light text-danger" : "bg-black text-white"
                      }`
                  }>
                <FaUserCircle className="fs-1 text text-white"/><br/>Account</NavLink>
            <NavLink to="/Kambaz/Dashboard" id="wd-dashboard-link"
                  className={({ isActive }) =>
                      `list-group-item text-center border-0 ${
                          isActive ? "bg-light text-danger" : "bg-black text-white"
                      }`
                  }>
                <AiOutlineDashboard className="fs-1 text-danger"/><br/>Dashboard</NavLink>
            <NavLink to="/Kambaz/Courses" id="wd-course-link"
                     className={({ isActive }) =>
                         `list-group-item text-center border-0 ${
                             isActive ? "bg-light text-danger" : "bg-black text-white"
                         }`
                     }>
                <LiaBookSolid className="fs-1 text-danger"/><br/>Courses</NavLink>
            <NavLink to="/Kambaz/Calendar" id="wd-calendar-link"
                     className={({ isActive }) =>
                         `list-group-item text-center border-0 ${
                             isActive ? "bg-light text-danger" : "bg-black text-white"
                         }`
                     }>
                <MdOutlineCalendarMonth className="fs-1 text-danger"/><br/>Calendar</NavLink>
            <NavLink to="/Kambaz/Inbox" id="wd-inbox-link"
                     className={({ isActive }) =>
                         `list-group-item text-center border-0 ${
                             isActive ? "bg-light text-danger" : "bg-black text-white"
                         }`
                     }>
                <FaInbox className="fs-1 text-danger"/><br/>Inbox</NavLink>
            <NavLink to="/Labs" id="wd-labs-link"
                     className={({ isActive }) =>
                         `list-group-item text-center border-0 ${
                             isActive ? "bg-light text-danger" : "bg-black text-white"
                         }`
                     }>
                <AiOutlineSetting className="fs-1 text-danger"/><br/>Labs</NavLink>
        </div>
    )
}
