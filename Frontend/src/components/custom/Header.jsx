<<<<<<< HEAD
import React, { useEffect } from "react";
import logo from "/logo.svg";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/Services/login";
import { addUserData } from "@/features/user/userFeatures";

function Header({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log("Printing From Header User Found");
    } else {
      console.log("Printing From Header User Not Found");
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      if (response.statusCode === 200) {
        dispatch(addUserData(""));
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      id="printHeader"
      className="flex justify-between px-10 py-5 shadow-lg items-center bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 transition-all duration-700 ease-in-out hover:from-purple-500 hover:to-green-400"
    >
      {/* Logo with Smooth Scale Animation */}
      <img
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className="transition-transform duration-700 ease-in-out hover:scale-110 hover:drop-shadow-xl"
      />

      {/* Button Section */}
      {user ? (
        <div className="flex items-center gap-6">
          <Button
            variant="outline"
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 hover:scale-105 hover:shadow-lg"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Dashboard
          </Button>

          <Button
            onClick={handleLogout}
            className="bg-gradient-to-r from-red-500 to-purple-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-red-500 hover:scale-105 hover:shadow-lg"
          >
            Logout
          </Button>
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
=======
import React, { useEffect } from "react";
import logo from "/logo.svg";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/Services/login";
import { addUserData } from "@/features/user/userFeatures";

function Header({user}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(user){
      console.log("Printing From Header User Found");
    }
    else{
      console.log("Printing From Header User Not Found");
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      if (response.statusCode == 200) {
        dispatch(addUserData(""));
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      id="printHeader"
      className="flex justify-between px-10 py-5 shadow-md items-center"
    >
      <img src={logo} alt="logo" width={100} height={100} />
      {user ? (
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Dashboard
          </Button>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
>>>>>>> 78274e8c8b6139a5938b71458a0bfd4f72ab704e
