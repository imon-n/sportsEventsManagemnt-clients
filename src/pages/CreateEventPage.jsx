import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const CreateEventPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newEvent = Object.fromEntries(formData.entries());
    console.log(newEvent);

    newEvent.email = user.email;
    newEvent.name = user.displayName;

    //Post to Db
    axios
      .post("https://athletic-hub-server-snowy.vercel.app/events", newEvent)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "New Event Created Successfully!!",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
          draggable: true,
        });
        navigate("/events");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="px-24 pb-12">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-600 whitespace-nowrap">
          Create an Event
        </h1>
      </div>

      <form onSubmit={handleAddEvent}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black font-semibold">
          {/* Event Name */}
          <fieldset className="bg-base-200 border-2 rounded-box p-4 border-blue-600">
            <label className="label">Event Name</label>
            <input
              type="text"
              name="eventName"
              className="input w-full"
              placeholder="Event Name"
              required
            />
          </fieldset>

          {/* Event Type */}
          <fieldset className="bg-base-200 border-2 rounded-box p-4 border-blue-600">
            <label className="label">Event Type</label>
            <select name="category" className="select w-full" required>
              <option value="">Select an Event</option>
              <option value="Swimming">Swimming</option>
              <option value="Sprinting">Sprinting</option>
              <option value="Long Jump">Long Jump</option>
              <option value="Hurdle race">Hurdle race</option>
            </select>
          </fieldset>

          {/* Description */}
          <fieldset className="md:col-span-2 bg-base-200 border-2 rounded-box p-4 border-blue-600">
            <label className="label">Description</label>
            <textarea
              name="description"
              className="textarea w-full"
              placeholder="Enter event description here..."
              rows="4"
              required
            ></textarea>
          </fieldset>

          {/* Image URL */}
          <fieldset className="bg-base-200 border-2 rounded-box p-4 border-blue-600">
            <label className="label">Image URL</label>
            <input
              type="text"
              name="image"
              className="input w-full"
              placeholder="Image URL"
              required
            />
          </fieldset>

          {/* Event Date- */}
          <fieldset className="bg-base-200 border-2 rounded-box p-4 border-blue-600">
            <label className="label">Event Date</label>
            <input type="date" name="date" className="input w-full" required />
          </fieldset>
        </div>

        <input
          type="submit"
          className="btn w-full mt-6 bg-blue-600 text-white"
          value="Add Event"
        />
      </form>
    </div>
  );
};

export default CreateEventPage;
