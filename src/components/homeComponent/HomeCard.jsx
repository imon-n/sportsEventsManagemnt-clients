import React from 'react';
import { BiSolidCategory } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router";

const HomeCard = ({ event }) => {
    const { _id, eventName, date, category, name } = event;

    return (
        <div className="card bg-base-100 w-full shadow-sm border-1">
          <div className="card-body">
            <h2 className="text-center text-xl font-bold">{eventName}</h2>
            <div className="md:flex justify-between items-center">
              <div className="flex md:justify-between gap-1 items-center">
                <FaCalendarAlt /> {date}
              </div>
              <div className="flex md:justify-between gap-1 items-center">
                <BiSolidCategory /> {category}
              </div>
            </div>
            <div>
              <h1>Organized/Posted by : {name}</h1>
            </div>
            <Link to={`/event/${_id}`} className="card-actions justify-end">
              <button className="btn w-full rounded-4xl mt-6 bg-blue-600 text-white">Details</button>
            </Link>
          </div>
          
        </div>
      );
};

export default HomeCard;