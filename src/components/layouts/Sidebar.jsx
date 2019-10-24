import React from "react";

import {
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt
} from "react-icons/fa";

export const Sidebar = () => (
  <div className="sidebar">
    <ul className="sidebar__generic">
      <li>
        <span>
          <FaInbox />
        </span>
        <span>Inbox</span>
      </li>
      <li>
        <span>
          <FaRegCalendar />
        </span>
        <span>Today</span>
      </li>
      <li>
        <span>
          <FaRegCalendarAlt />
        </span>
        <span>Next 7 days</span>
      </li>
    </ul>
    <div className="sidebar__middle">
      <span>
        <FaChevronDown />
      </span>
      <h2>Projects</h2>
    </div>
    <ul className="sidebar__projects">Projects will be here</ul>
    add Project component here
  </div>
);
