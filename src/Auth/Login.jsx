import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const nav = useNavigate();


// handle submit
  function submit(e) {
    e.preventDefault();
    try {
      let res = axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: userName,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      nav("/");
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col bg-[#BCD6DD]">
      <div
        id="login"
        className="w-64 bg-indigo-50 rounded shadow flex flex-col justify-between p-3"
      >
        <form onSubmit={submit} className="main_color">
          <fieldset className="border-4 border-dotted border-[#408A9E] p-5">
            <legend className="px-2 italic -mx-2">Welcome again!</legend>
            <label
              className="text-xs font-bold after:content-['*'] after:text-red-400"
              htmlFor="email"
            >
              Name{" "}
            </label>
            <input
              className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-[#408A9E]"
              type="text"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label
              className="text-xs font-bold after:content-['*'] after:text-red-400"
              htmlFor="password"
            >
              Password{" "}
            </label>
            <input
              className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-[#408A9E]"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a className="block text-xs main_color text-right mb-4">
              Forgot Password?
            </a>
            <button className="main_btn w-full ml-0">Log In</button>
            {error ? (
              <p className="text-center text-red-600">
                Incorrect username or password.
              </p>
            ) : (
              ""
            )}
          </fieldset>
          <span className="text-black">
            Don't have an account?
            <Link className="text-blue-600" to="/register">
              Sign up
            </Link>
          </span>
        </form>
      </div>
      <Link to="/" className="main_btn m-3">
        back home
      </Link>
      ;
    </div>
  );
};

export default Login;
