import { motion } from "framer-motion";

function Signup() {
  return (
    <>
      <motion.form
        className="max-w-sm mx-auto mt-10 p-8 bg-white shadow-2xl rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Email Input */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-gray-700"
          >
            Your Email
          </label>
          <motion.input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300"
            placeholder="name@example.com"
            required
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* Password Input */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-semibold text-gray-700"
          >
            Your Password
          </label>
          <motion.input
            type="password"
            id="password"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300"
            required
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* Repeat Password Input */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-semibold text-gray-700"
          >
            Repeat Password
          </label>
          <motion.input
            type="password"
            id="repeat-password"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300"
            required
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* Terms Checkbox */}
        <motion.div
          className="flex items-start mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex items-center h-5">
            <motion.input
              id="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400 transition duration-300"
              required
              whileHover={{ scale: 1.1 }}
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
              I have already an account
            </a>
          </label>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full py-3 mt-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register New Account
        </motion.button>
      </motion.form>
    </>
  );
}

export default Signup;
