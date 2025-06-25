import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import EventCard from "../components/events/EventCard";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const reversedEvents = [...events].reverse();

  useEffect(() => {
    fetch(
      `https://athletic-hub-server-snowy.vercel.app/events?search=${search}`
    )
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [search]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  if (!events.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
        <span className="ml-2 text-blue-600">Loading events...</span>
      </div>
    );
  }

  return (
    <div className="p-3">
      <div className=" mb-5 flex justify-center gap-1 items-center">
        <div className="relative w-3/4 md:w-1/3">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search Events..."
            className="w-full p-2 rounded-md shadow-sm border-1 focus:border-2 border-blue-400 focus:outline-none focus:ring focus:ring-blue-900"
          />
          <FaSearch
            size={24}
            className="absolute right-3 top-3 text-blue-500 cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {reversedEvents.map((event) => (
          <EventCard key={event._id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
