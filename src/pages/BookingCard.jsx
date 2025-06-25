import axios from "axios";
import { BiSolidCategory } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const BookingCard = ({ booking, bookings, setBookings }) => {
  const { _id, eventName, date, category } = booking;

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
      if (result.isConfirmed) {
        axios
          .delete(
            `https://athletic-hub-server-snowy.vercel.app/bookings/${_id}`
          )
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Event has been UnBooked.",
                icon: "success",
              });

              const remaining = bookings.filter((b) => b._id !== _id);
              setBookings(remaining);
            }
          })
          .catch((error) => console.error("Delete error:", error));
      }
    });
  };

  return (
    <div className="card bg-base-300 w-full shadow-sm border-1">
      <div className="card-body">
        <h2 className="text-center text-xl font-bold ">{eventName}</h2>
        <div className="md:flex justify-between items-center">
          <div className="flex md:justify-between gap-1 items-center">
            <FaCalendarAlt /> {date}
          </div>
          <div className="flex md:justify-between gap-1 items-center">
            <BiSolidCategory /> {category}
          </div>
        </div>

        <div className="flex justify-center gap-2 md:gap-7 w-full mx-auto ">
          <button
            onClick={() => handleDelete(_id)}
            className="btn w-full mt-2 md:mt-6 bg-red-800 rounded-4xl text-white whitespace-nowrap"
          >
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
