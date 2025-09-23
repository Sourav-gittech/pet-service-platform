import React, { useState, useEffect } from "react";
import { FaUser, FaLock, FaUserMd } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const UserLoginRegister = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState("user");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const [showLoginPass, setShowLoginPass] = useState(false);
  const [showRegPass, setShowRegPass] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#EFFFFF] to-[#d6b4f9] duration-700">
      <div className="absolute w-[1500px] h-[1500px] bg-gray-100 dark:bg-[#d6b4f9] rounded-full top-[-50%] left-[-30%] blur-3xl opacity-40" />

      <div className={`relative flex w-[90%] md:w-[70%] lg:w-[60%] max-w-5xl bg-white dark:bg-[#cf9eff] rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 ${
          isSignUp ? "flex-row-reverse" : "" }`}>

        <div className="w-full md:w-1/2 h-[450px] flex flex-col justify-center items-center p-8 relative">
          {isSignUp ? (
            <>
              <div className="flex gap-2 mb-4">
                <button type="button" onClick={() => setRole("user")} className={`px-4 py-1 rounded-full font-semibold ${
                    role === "user"
                      ? "bg-gray-600 text-white"
                      : "bg-gray-300 text-gray-700" }`}>
                  User
                </button>
                <button type="button" onClick={() => setRole("veterinarian")} className={`px-4 py-1 rounded-full font-semibold ${
                    role === "veterinarian"
                      ? "bg-gray-600 text-white"
                      : "bg-gray-300 text-gray-700" }`}
                >
                  Veterinarian
                </button>
              </div>

              <form className="flex flex-col gap-4 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                  Register as {role === "user" ? "User" : "Veterinarian"}
                </h2>
                <Box className='mt-0 text-[10px] text-center'>{role === "user" ?'':'Please upload your registration certificate'}</Box>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700">
                  <MdEmail className="text-gray-500" />
                  <input type="email" placeholder="Email" className="bg-transparent flex-1 outline-none text-gray-700 dark:text-gray-200"/>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700">
                  <FaLock className="text-gray-500" />
                  <input type={showRegPass ? "text" : "password"} placeholder="Password" className="bg-transparent flex-1 outline-none text-gray-700 dark:text-gray-200"/>
                  <button type="button" onClick={() => setShowRegPass(!showRegPass)} className="text-white">
                    {showRegPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
                  </button>
                </div>

                {role === "veterinarian" && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700">
                    <FaUserMd className="text-gray-500" />
                    <input type="file" placeholder="Specialization" className="bg-transparent flex-1 outline-none text-gray-700 dark:text-gray-200"  accept=".pdf"/>
                  </div>)}

                <button type="submit" className="w-full bg-gray-600 hover:bg-gray-900 text-white py-2 rounded-full font-semibold transition">
                  Create {role === "user" ? "User" : "Veterinarian"} Account
                </button>
              </form>

              <Link to="/terms" className="absolute transition-text duration-300 text-[12px] hover:text-[13px] hover:font-bold bottom-6 right-10">
                *Terms of Services
              </Link>
            </>
          ) : (
            <form className="flex flex-col gap-4 w-full max-w-sm">
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                Login
              </h2>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700">
                <FaUser className="text-gray-500" />
                <input type="text" placeholder="Username" className="bg-transparent flex-1 outline-none text-gray-700 dark:text-gray-200"/>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700">
                <FaLock className="text-gray-500" />
                <input type={showLoginPass ? "text" : "password"} placeholder="Password" className="bg-transparent flex-1 outline-none text-gray-700 dark:text-gray-200"/>
                <button type="button" onClick={() => setShowLoginPass(!showLoginPass)} className="text-white">
                  {showLoginPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>

              <button type="submit" className="w-full bg-gray-600 hover:bg-gray-900 text-white py-2 rounded-full font-semibold transition">
                Sign In
              </button>
            </form>
          )}
        </div>

        {/* Panels Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-tr from-[#392727] to-[#103136] text-white transition-all duration-700">
          {isSignUp ? (
            <>
              <h3 className="text-xl font-bold">Already have an account?</h3>
              <p className="text-sm">Sign in right now</p>
              <button onClick={() => setIsSignUp(false)} className="mt-4 border-2 border-white px-6 py-2 rounded-full font-semibold hover:bg-[#cf9eff] hover:text-gray-900 transition">
                Sign In
              </button>
            </>
          ) : (
            <>
              <h3 className="text-xl font-bold">Don’t have an account?</h3>
              <p className="text-sm">Create your account right now</p>
              <button onClick={() => setIsSignUp(true)} className="mt-4 border-2 border-white px-6 py-2 rounded-full font-semibold hover:bg-[#cf9eff] hover:text-gray-900 transition">
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserLoginRegister;
