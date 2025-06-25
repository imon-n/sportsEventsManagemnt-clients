import axios from "axios";
import { BiSolidCategory } from "react-icons/bi";
import { FaArrowAltCircleLeft, FaCalendarAlt } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const EventDetails = () => {
  const event = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { _id, eventName, date, description, category, image } = event;

  const handleAddBooking = () => {
    const newBook = {
      eventId: _id,
      eventName,
      date,
      description,
      category,
      image,
      email: user.email,
      name: user.displayName,
      bookedAt: new Date().toISOString().split("T")[0],
    };

    //Post to Db (for booking list)
    axios
      .post("https://athletic-hub-server-snowy.vercel.app/bookings", newBook)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Booking Successfull!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
            draggable: true,
          });
          navigate("/bookings");
        }
      })
      .catch((error) => {
        if (error.response?.status === 409) {
          Swal.fire({
            title: "Already Booked!",
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
            draggable: true,
          });
        } else {
          console.log(error);
          Swal.fire({
            title: "Something went wrong!",
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="rounded-xl flex flex-col gap-10 md:flex-row">
        <div className="md:w-2/5">
          <img
            src={image}
            alt={eventName}
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>

        <div className="md:w-2/3 p-6 mt-5 space-y-4">
          <h2 className="text-3xl font-bold text-blue-600">{eventName}</h2>
          <p className="text-gray-500">{description}</p>

          <div className="flex  gap-1 items-center">
            <BiSolidCategory /> {category}
          </div>
          <div className="flex  gap-1 items-center">
            <FaCalendarAlt /> {date}
          </div>
          <div className="pt-4">
            <Link to="/events" className="btn bg-blue-600 text-white ">
              <button
                className="cursor-pointer"
                onClick={() => handleAddBooking(event._id)}
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Link
        to="/events"
        className="flex justify-center w-full items-center gap-2"
      >
        <FaArrowAltCircleLeft size={20} />
        <div to="/events" className=" font-bold text-2xl  text-blue-600">
          Back to All Events
        </div>
      </Link>
    </div>
  );
};

export default EventDetails;
