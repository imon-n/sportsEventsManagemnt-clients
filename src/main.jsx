import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import EventDetails from "./components/events/EventDetails";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import BookingsPage from "./pages/BookingsPage";
import CreateEventPage from "./pages/CreateEventPage";
import EventsPage from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ManageEventsPage from "./pages/ManageEventsPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import UpdateEventPage from "./pages/UpdateEventPage";
import AuthProvider from "./provider/AuthProvider";
import PrivateRoute from "./provider/PrivateRoute";
import AboutUs from "./components/homeComponent/AboutUs";
import ContactUs from "./components/homeComponent/ContactUs";
import CategoryCards from "./components/homeComponent/CategoryCards";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "events",
        // loader: () => fetch("https://athletic-hub-server-snowy.vercel.app/events"),
        Component: EventsPage,
      },
      {
        path: "bookings",
        Component: BookingsPage,
      },
      {
        path: "aboutUs",
        Component:AboutUs
      },
      {
        path: "contactUs",
        Component:ContactUs
      },
      {
        path: "CategoryCards",
        Component:CategoryCards
      },
      {
        path: "event/:id",
        loader: ({ params }) =>
          fetch(
            `https://athletic-hub-server-snowy.vercel.app/events/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "updateEvent/:id",
        loader: ({ params }) =>
          fetch(
            `https://athletic-hub-server-snowy.vercel.app/events/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateEventPage></UpdateEventPage>
          </PrivateRoute>
        ),
      },
      {
        path: "manageMyEvents",
        element: (
          <PrivateRoute>
            <ManageEventsPage></ManageEventsPage>
          </PrivateRoute>
        ),
      },
      {
        path: "createEvent",
        element: (
          <PrivateRoute>
            <CreateEventPage></CreateEventPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/*",
        element: <NotFoundPage></NotFoundPage>,
      },
    ],
  },
  {
    path: "/auth",
    Component: MainLayout,
    children: [
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
