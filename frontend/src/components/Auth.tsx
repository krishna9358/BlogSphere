export const Auth = () => {
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
            <input className="bg-gray-800 text-gray-50 w-full p-2 rounded" id="email" placeholder="krishna@example.com" type="email" />
          </div>
          <div className="space-y-2">
            <label className="text-gray-400" htmlFor="password">
              Password
            </label>
            <input className="bg-gray-800 text-gray-50 w-full p-2 rounded" id="password" type="password" />
          </div>
          <button className="w-full bg-blue-900 text-gray-50 hover:bg-blue-800 p-2 rounded">Sign In</button>
          <div className="grid grid-cols-2 gap-14">
          <a
            className="inline-block w-full text-center text-sm text-gray-400 underline hover:text-gray-300"
            href="#"
          >
            Forgot your password?
          </a>
          <a
            className="inline-block w-full text-center text-sm text-gray-400 underline hover:text-gray-300"
            href="#"
          >
            Don't have an account? Sign up
          </a>
          </div>
          
        </div>
      </div>
    </div>
    </div>
}