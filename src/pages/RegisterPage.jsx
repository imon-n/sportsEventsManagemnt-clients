import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {
  const [nameError, setNameError] = useState("");
  const [showPass, setPassword] = useState(false);
  const { createUser, setUser } = useAuth();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ name, photo, email, password });

    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Name should be more then 5 character",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    } else {
      setNameError("");
    }


    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Password must include uppercase, lowercase and be at least 6 characters",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }
    

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        return updateProfile(user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser({
            ...user,
            displayName: name,
            photoURL: photo,
          });
          Swal.fire({
            title: `Welcome, ${result.user.displayName || ""}!`,
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
            draggable: true,
          });
          navigate("/");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          title: `Oops ${(errorMessage, errorCode)}!`,
          icon: "success",
          draggable: true,
        });
      });
  };

  return (
    <div className="flex justify-center items-center my-10 ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 border border-green-700">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {nameError && <p className="text-xs text-error">{nameError}</p>}

            {/* Photo URl  */}
            <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            <div className="relative">
              <label className="label">Password</label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
                // pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{5,}"
              />
              <button
                onClick={() => {
                  setPassword(!showPass);
                }}
                className="btn btn-xs absolute top-6 right-6"
              >
                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </div>

            <button type="submit" className="btn bg-blue-500 btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Allready Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
