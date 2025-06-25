import axios from "axios";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const BookingTable = ({ bookings, setBookings }) => {
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
    <div className="max-w-7xl mx-auto mt-8">
      <div className="overflow-x-auto">
        {bookings.length === 0 ? (
          <div>
            <h1 className="text-center font-bold text-3xl pt-10  h-64">
              No Bookings...!!
            </h1>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr className="font-bold text-lg">
                <th>Event Name</th>
                <th>Category</th>
                <th>Event Date</th>
                <th>Booking Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((book) => (
                <tr key={book._id}>
                  <td className="font-semibold">{book.eventName}</td>
                  <td>{book.category}</td>
                  <td>{book.date}</td>
                  <td>{book.bookedAt}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="bg-red-800 hover:bg-blue-900 cursor-pointer rounded-3xl whitespace-nowrap text-white font-semibold px-4 py-2 shadow-md transition-all duration-300"
                    >
                      Cancel Booking
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
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
  );
};

export default BookingTable;
