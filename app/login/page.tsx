"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { setItem, getItem } from '../../localStore';


const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // Add rememberMe state

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = async () => {
    // Call login API 127.0.0.1:8010/login sand json {username, password} and get response {token} and save to localStorage if rememberMe is true
    const response = await axios.post("http://127.0.0.1:8010/login", {
      email,
      password,
    });
    const token = response.data.token;
    //setitem user token
    const employee = response.data.employee;
    setItem('employee', employee);
    setItem('token', token);

  }



  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen ">
      <div className="card shadow-xl bg-white sm:w-2/5 ">
        <div className=" p-14">
          {/* Logo */}
          <div className="flex justify-center">
            <div className=" w-2/5">
              <img
                src="https://img5.pic.in.th/file/secure-sv1/LG-CHOBACCOUNTING-SMALL.webp"
                alt="LG-CHOBACCOUNTING-SMALL.webp"
              />
            </div>
          </div>
          {/* email */}
          <div className="mt-4 text-gray-400 col-auto pt-2">
            <div>
              <label className="">email</label>
            </div>
            <div className="pt-2">
              <input
                type="email"
                className=" border-separate border-2 border-gray-200 rounded-md w-full px-3 py-2 outline-none focus:border-blue-400"
                placeholder="Enter email"
                value={email}
                onChange={handleUsernameChange}
              />
            </div>
          </div>
          {/* password */}
          <div className="mt-4 text-gray-400 col-auto pt-2">
            <div>
              <label className="">password</label>
            </div>
            <div className="pt-2">
              <input
                type="password"
                className=" border-separate border-2 border-gray-200 rounded-md w-full px-3 py-2 outline-none focus:border-blue-400"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          {/* remember me */}
          <div className="mt-4 text-gray-400 col-auto pt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label className="ml-2">Remember me</label>
            </div>
          </div>
          {/* login button */}
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white p-2 rounded-md w-min hover:bg-blue-600 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out transform focus:outline-none focus:shado"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>

          {/* forgot password */}
          <div className="mt-4 text-left">
            <a href="#" className="text-blue-500">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
