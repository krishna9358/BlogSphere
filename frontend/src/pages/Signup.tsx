import { SignupInput } from "@krishna7060/common";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export function Signup() {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name : "",
    username : "",
    password : ""
  });

  useEffect(() => {
    // Redirect user to blog page if they are already logged in
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/blogs");
    }
  }, [navigate]);

  async function sendRequest(){
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
      const jwt = response.data;
      localStorage.setItem("token", jwt); // .setItem("key", value)
      navigate("/blogs");
    }catch(error){
      console.log(error);
      alert("Something went wrong");
    }
  }

  return <div>
    <div className="flex h-screen w-full items-center justify-center bg-gray-950 px-4 dark:bg-gray-950 ">
      <div className="w-full max-w-md space-y-6 border-2 border-gray-500 p-5 rounded">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-gray-50">Sign Up</h1>
          <p className="text-gray-400">Enter your details to create an account.</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-gray-400" htmlFor="name">
              Name
              {/* {JSON.stringify(postInputs)} */} 
            </label>
            <br />
            <input className=" w-full   p-1 rounded bg-gray-800 text-gray-50" id="name" placeholder="Krishna Mohan" type="text" onChange={(e) => {setPostInputs({...postInputs, name : e.target.value})}} />
          </div>
          <div className="space-y-2">
            <label className="text-gray-400" htmlFor="email">
              Email
            </label>
            <br />
            <input className=" w-full   p-1 rounded   bg-gray-800 text-gray-50" id="email" placeholder="krishna@example.com" type="email" onChange={(e) => {setPostInputs({...postInputs, username : e.target.value})}} />
          </div>
          <div className="space-y-2">
            <label className="text-gray-400" htmlFor="password">
              Password
            </label>
            <br />
            <input className=" w-full   p-1 rounded bg-gray-800 text-gray-50" id="password" type="password"  onChange={(e) => {setPostInputs({...postInputs, password: e.target.value})}} />
          </div>
          <button onClick={sendRequest} className=" p-2 rounded w-full bg-blue-900 text-gray-50 hover:bg-blue-800">Sign Up</button>
          <Link
            className="inline-block w-full text-center text-sm text-gray-400 underline hover:text-gray-300"
            to={"/signin"}
          >
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>

  </div>
}