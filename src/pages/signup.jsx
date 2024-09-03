function Signup() {
    return (
      <>
        <form className="max-w-sm mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-semibold text-gray-700"
            >
              Your Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-semibold text-gray-700"
            >
              Repeat Password
            </label>
            <input
              type="password"
              id="repeat-password"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300"
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400 transition duration-300"
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ml-2 text-sm font-medium text-gray-700"
            >
             
              <a
                href="/Login"
                className="text-indigo-500 hover:underline transition duration-300"
              >
                i have already account
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 transition duration-300"
          >
            Register New Account
          </button>
        </form>
      </>
    );
  }
  
  export default Signup;
  