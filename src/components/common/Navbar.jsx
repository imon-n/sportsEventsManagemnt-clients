import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  // console.log(user);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Logout Successfully!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>

      {user && (
        <>
          <li>
            <Link to="/createEvent">Create Event</Link>
          </li>
          <li>
            <Link to="/manageMyEvents">Manage Events</Link>
          </li>
          <li>
            <Link to="/bookings">My Bookings</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar shadow-sm px-4 py-5 bg-blue-500">
      <div className="navbar-start">
        <div tabIndex={0} role="button" className="btn btn-ghost avatar">
          <div className="w-10 rounded-full">
            <img src="/download.jpeg" alt="Logo" />
          </div>
        </div>
        <Link className="btn btn-ghost -ml-8 text-lg md:text-3xl text-white">
          AthleticHub
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-xl text-white px-1 font-semibold">
          {links}
        </ul>
      </div>

      <div className="navbar-end space-x-1 flex items-center gap-3 sm:space-x-3 sm:gap-0 ">
        <div className="relative group">
          {/* extra  */}
          {user && (
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar "
              >
                <div className="w-11 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-200  rounded-box z-1 mt-3 space-y-2 w-52 p-5 shadow"
              >
                <li className="pb-1 text-center font-bold">
                  {user.displayName}
                </li>
                <hr />
                <li className="font-semibold flex justify-center items-center">
                  {links}
                </li>
                <li>
                  <Link
                    onClick={handleLogOut}
                    className="btn bg-red-600 border-none w-full text-white font-semibold px-3 md:px-8"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {user && (
            <span className="absolute hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 bottom-[38px]   transform -translate-x-1/2 whitespace-nowrap z-10">
              {user.displayName}
            </span>
          )}
        </div>

        {/* ----------------- */}
        {user ? (
          <div></div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              to="/auth/login"
              className="btn btn-info w-14 md:w-22 text-white  px-3 md:px-8"
            >
              Login
            </Link>
          </div>
        )}
        {/* ------------------- */}

        {/*  */}
      </div>
    </div>
  );
};

export default Navbar;
