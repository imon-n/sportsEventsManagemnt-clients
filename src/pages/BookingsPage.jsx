import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import BookingCard from "./BookingCard";
import BookingTable from "./BookingTable";

const BookingsPage = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (user?.email && user?.accessToken) {
      setLoading(true);
      fetch(
        `https://athletic-hub-server-snowy.vercel.app/bookings?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setBookings(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          setLoading(true);
        });
    }
  }, [user?.email, user?.accessToken]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
        <span className="ml-2 text-blue-600">Loading events...</span>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col md:flex-row  justify-between items-center ">
        <h1 className="text-2xl text-center font-semibold md:font-bold mt-5">
          MyBooked Events
        </h1>

        <button onClick={handleToggle} className="flex justify-center pr-2">
          <div className="flex items-center  font-semibold text-lg  gap-1 md:gap-1 pl-5 pt-3 ">
            {isOpen ? <h4>Card</h4> : ""}
            <input
              type="checkbox"
              defaultChecked
              className="toggle toggle-primary"
            />
            {isOpen ? "" : <h4>Table</h4>}
          </div>
        </button>
      </div>

      {isOpen ? (
        <div>
          {/* table Formate  */}
          <BookingTable
            bookings={bookings}
            setBookings={setBookings}
          ></BookingTable>
        </div>
      ) : (
        <div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 p-6">
              {bookings.map((booking) => (
                <BookingCard
                  key={booking._id}
                  booking={booking}
                  bookings={bookings}
                  setBookings={setBookings}
                />
              ))}
            </div>
            <Link
              to="/events"
              className="flex justify-center w-full items-center gap-2 my-10 mb-24"
            >
              <FaArrowAltCircleLeft size={20} />
              <div className=" font-bold text-2xl  text-blue-600">
                Back to All Events
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Card Formate  */}
    </>
  );
};

export default BookingsPage;
