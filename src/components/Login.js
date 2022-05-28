import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./Usercontext";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { auth, toggle } = useContext(AuthContext);

  console.log(auth);
  const navigate = useNavigate();

  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault();
    console.log(user, password);
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        let data = res.data.results;
        console.log(data);
        let y = data.filter((x) => {
          return user === x.name && password === x.birth_year;
        });
        if (y.length) {
          console.log(y);
          toggle();
          navigate("/planets");
        } else {
          auth();
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="relative m-4 flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="my-7 text-2xl w-96 text-center text-white bg-purple-500 p-3 m-auto border-2 rounded-md shadow-md border-top lg:max-w-md">
          {" "}
          User is {`${auth ? "" : "not"} authenticated`}{" "}
        </div>
        <div className="w-full p-6 m-auto bg-white border-t-4 border-cyan-900 rounded-md shadow-md border-top lg:max-w-md">
          <h1 className="text-3xl my-3 font-semibold text-center text-cyan-900">
            LOG IN
          </h1>

          <form className="mt-6">
            <div>
              <label className="block text-sm text-gray-800">User</label>
              <input
                type="text"
                value={user}
                onChange={(e) => handleUser(e)}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <div>
                <label className="block text-sm text-gray-800">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => handlePassword(e)}
                  className="block w-full px-4 py-2 mt-2 text-cyan-900 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                onClick={(e) => handleApi(e)}
                className="w-full px-4 py-2 mb-7 mt-4 tracking-wide text-white transition-colors duration-200 transform bg-cyan-900 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
