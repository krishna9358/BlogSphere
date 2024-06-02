
import { LoginInput } from "@krishna7060/common"
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";

export const Auth = () => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<LoginInput>({
        username: "",
        password: ""});

    useEffect(() => {
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
            navigate("/blogs");
        }
    }, [navigate]);


    async function postRequest() {
      try{
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs)
        const jwt = response.data.jwt
        localStorage.setItem("jwt", jwt)
        navigate("/blogs")
      }catch(err){
        alert("Error while logging in")
      }
    }



    return <div>
        <div className="flex h-screen w-full items-center justify-center bg-gray-950 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-gray-50">Sign In</h1>
          <p className="text-gray-400">Enter your email and password to access your account.</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-gray-400" htmlFor="email">
              Email
            </label>
            <input onChange={(e) => {setPostInputs({...postInputs, username: e.target.value})}} className="bg-gray-800 text-gray-50 w-full p-2 rounded" id="email" placeholder="krishna@example.com" type="email" />
          </div>
          <div className="space-y-2">
            <label className="text-gray-400" htmlFor="password">
              Password
            </label>
            <input onChange={(e) => {setPostInputs({...postInputs, password: e.target.value})}} className="bg-gray-800 text-gray-50 w-full p-2 rounded" id="password" type="password" />
          </div>
          <button onClick={postRequest} className="w-full bg-blue-900 text-gray-50 hover:bg-blue-800 p-2 rounded">Sign In</button>
          <div className="grid grid-cols-2 gap-14">
          <a
            className="inline-block w-full text-center text-sm text-gray-400 underline hover:text-gray-300"
            href="#"
          >
            Forgot your password?
          </a>
          <Link
            className="inline-block w-full text-center text-sm text-gray-400 underline hover:text-gray-300"
            to={"/signup"}
          >
            Don't have an account? Sign up
          </Link>
          </div>
          
        </div>
      </div>
    </div>
    </div>
}