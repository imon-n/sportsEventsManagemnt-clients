import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Logout Successfully!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
  <>
    <li>
      <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
    </li>
    <li>
      <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
    </li>
    <li>
      <Link to="/contactUs" onClick={() => setMenuOpen(false)}>Contact</Link>
    </li>
    <li>
      <Link to="/aboutUs" onClick={() => setMenuOpen(false)}>About</Link>
    </li>

    {user && (
      <>
        <li>
          <Link to="/createEvent" onClick={() => setMenuOpen(false)}>Create Event</Link>
        </li>
        <li>
          <Link to="/manageMyEvents" onClick={() => setMenuOpen(false)}>Manage Events</Link>
        </li>
        <li>
          <Link to="/bookings" onClick={() => setMenuOpen(false)}>My Bookings</Link>
        </li>
      </>
    )}
  </>
);


  return (
    <div className="navbar shadow-sm px-4 py-5 bg-blue-500">
      {/* Left side menu button */}
      <div className="flex items-center gap-3 navbar-start">
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div tabIndex={0} role="button" className="btn btn-ghost avatar">
          <div className="w-10 rounded-full">
            <img src="/download.jpeg" alt="Logo" />
          </div>
        </div>
        <Link
          to="/"
          className="btn btn-ghost -ml-8 text-lg md:text-3xl text-white"
        >
          AthleticHub
        </Link>
      </div>

      {/* Center menu for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-xl text-white px-1 font-semibold">
          {links}
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end space-x-1 flex items-center gap-3 sm:space-x-3 sm:gap-0 ">
        {/* Profile dropdown */}
        <div className="relative group">
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-11 rounded-full">
                  <img
                    alt="User Avatar"
                    src={user.photoURL || "/download.jpeg"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-200 rounded-box z-1 mt-3 space-y-2 w-52 p-5 shadow"
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
            <span className="absolute hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 bottom-[38px] transform -translate-x-1/2 whitespace-nowrap z-10">
              {user.displayName}
            </span>
          )}
        </div>

        {!user && (
          <div className="flex items-center gap-2">
            <Link
              to="/auth/login"
              className="btn btn-info w-14 md:w-22 text-white px-3 md:px-8"
            >
              Login
            </Link>
          </div>
        )}
      </div>

      {/* Mobile side menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-5 z-50">
            <button
              className="mb-6 text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              ✕ Close
            </button>
            <ul className="menu text-lg font-semibold space-y-3">{links}</ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
