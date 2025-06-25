import { BiSolidCategory } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  const { _id, eventName, date, category, image, name } = event;

  return (
    <div className="card bg-base-100 w-96 shadow-sm border-1">
      <figure className="w-full h-full object-cover">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-xl font-bold">{eventName}</h2>
        <div className="flex justify-between items-center">
          <div className="flex justify-between gap-1 items-center">
            <FaCalendarAlt /> {date}
          </div>
          <div className="flex justify-between gap-1 items-center">
            <BiSolidCategory /> {category}
          </div>
        </div>
        <div>
          <h1>Organized/Posted by : {name}</h1>
        </div>
        <Link to={`/event/${_id}`} className="card-actions justify-end">
          <button className="btn w-full mt-6 bg-blue-600 text-white rounded-4xl">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
