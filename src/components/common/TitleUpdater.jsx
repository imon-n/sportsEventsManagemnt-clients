import { useEffect } from "react";
import { useLocation } from "react-router";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home",
      "/events": "Events",
      "/createEvent": "Create Event",
      "/manageMyEvents": "Manage Events",
      "/bookings": "My Bookings",
      "/auth/login": "Login",
      "/auth/register": "Register",
    };

    document.title = titles[location.pathname] || "AthleticHub"; }, [location.pathname]);

  return null;
};

export default TitleUpdater;
