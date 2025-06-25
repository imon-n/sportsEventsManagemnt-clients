import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const ManageEventsPage = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        axios
          .delete(`https://athletic-hub-server-snowy.vercel.app/events/${_id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Event has been deleted.",
                icon: "success",
              });

              // remove the event from the state
              const remainingEvents = events.filter(
                (event) => event._id !== _id
              );
              setEvents(remainingEvents);
            }
          })
          .catch((error) => console.error("Delete error:", error));
      }
    });
  };

  useEffect(() => {
    if (user?.email && user?.accessToken) {
      setLoading(true);
      fetch(
        `https://athletic-hub-server-snowy.vercel.app/events?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setEvents(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(true);
          console.error("Fetch error:", error);
        });
    }
  }, [user?.email, user?.accessToken]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
        <span className="ml-2 text-blue-600">Loading...</span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 pl-2">
        Hi, {user?.displayName}!!
      </h1>
      {/* <h1 className="text-2xl font-bold mb-4">Token: {user?.accessToken}!!</h1> */}

      <div className="overflow-x-auto">
        {events.length === 0 ? (
          <div>
            <h1 className="text-center font-bold text-3xl pt-10  h-64">
              No Events found....!!
            </h1>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr className="font-bold text-lg">
                <th>Event Name</th>
                <th>Category</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event._id}>
                  <td>{event.eventName}</td>
                  <td>{event.category}</td>
                  <td className="whitespace-nowrap">{event.date}</td>
                  <td className="space-x-2 flex">
                    <Link to={`/event/${event._id}`}>
                      <FaInfoCircle size={24} className="text-blue-600" />
                    </Link>
                    <Link to={`/updateEvent/${event._id}`}>
                      <FaEdit size={24} className="text-yellow-500" />
                    </Link>
                    <Link>
                      <button
                        className="cursor-pointer"
                        onClick={() => handleDelete(event._id)}
                      >
                        <MdDelete size={25} className="text-red-600" />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageEventsPage;
