import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const [error, setError] = useState("");
  const [showPass, setPassword] = useState(false);
  const { user, signInUser, signInWithGoogle, setUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const handleLogin = (e) => {
    console.log(user);

    e.preventDefault();
    const form = e.target;
    // console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user.displayName);
        setUser(user);
        Swal.fire({
          title: `Welcome, ${result.user.displayName || ""}!`,
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
          draggable: true,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          title: `Welcome, ${result.user.displayName || ""}!`,
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
          draggable: true,
        });
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
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
                name="password"
                type={showPass ? "text" : "password"}
                className="input"
                placeholder="Password"
                required
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

            <div>
              <Link to="" className="link link-hover">
                Forgot password?
              </Link>
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button
              type="submit"
              className="btn bg-white text-black border-amber-700 "
            >
              <svg
                aria-label="Email icon"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="black"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              Login
            </button>

            <button
              type="submit"
              onClick={handleLoginWithGoogle}
              className="btn bg-white text-black border-blue-700"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <p className="font-semibold text-center pt-5">
              Dont’t Have An Account ?
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
