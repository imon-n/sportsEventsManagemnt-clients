import { useEffect, useState } from "react";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import HomeCard from "./HomeCard";

const HomeCards = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);

  // const reversedEvents = [...events].reverse()

  useEffect(() => {
    fetch("https://athletic-hub-server-snowy.vercel.app/events")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        const LimitedData = sortedData.slice(0, 6);
        console.log("Fetched data:", data);
        setEvents(LimitedData);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [user]);

  // if (navigation.state === "loading") {
  if (!events.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
        <span className="ml-2 text-blue-600">Loading events...</span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mt-20 mb-10 text-center font-bold text-3xl">
        Up Coming Events......
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-4">
        {events.map((event) => (
          <HomeCard key={event._id} event={event}></HomeCard>
        ))}
      </div>

      <Link
        to="/events"
        className="flex justify-center mt-12 mb-10 items-center gap-2"
      >
        <div
          to="/events"
          className="btn w-44 rounded-4xl bg-violet-600 font-bold  text-white"
        >
          See All Events
        </div>
      </Link>
    </div>
  );
};

export default HomeCards;
