export function Signup() {
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
            </label>
            <br />
            <input className=" w-full   p-1 rounded bg-gray-800 text-gray-50" id="name" placeholder="Krishna Mohan" type="text" />
          </div>
          <div className="space-y-2">
            <label className="text-gray-400" htmlFor="email">
              Email
            </label>
            <br />
            <input className=" w-full   p-1 rounded   bg-gray-800 text-gray-50" id="email" placeholder="krishna@example.com" type="email" />
          </div>
          <div className="space-y-2">
            <label className="text-gray-400" htmlFor="password">
              Password
            </label>
            <br />
            <input className=" w-full   p-1 rounded bg-gray-800 text-gray-50" id="password" type="password" />
          </div>
          <button className=" p-2 rounded w-full bg-blue-900 text-gray-50 hover:bg-blue-800">Sign Up</button>
          <a
            className="inline-block w-full text-center text-sm text-gray-400 underline hover:text-gray-300"
            href="#"
          >
            Already have an account? Sign in
          </a>
        </div>
      </div>
    </div>

  </div>
}