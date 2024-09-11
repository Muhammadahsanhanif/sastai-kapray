import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../context/authcontext";
import { Avatar } from "@nextui-org/react";
import { auth, signOut } from "../utlis/firebase";

function Header() {
  const { user, setUser } = useContext(Authcontext);

  console.log("user in header", user);

  const handleSignOut = async () => {
    await signOut(auth);
    setUser({ islogin: false, userInfo: {} });
  };

  return (
    <nav
      className="flex flex-col md:flex-row items-center justify-between px-6 py-4 text-gray-800 border-b border-gray-200 shadow-lg bg-white dark:bg-gray-900 dark:border-gray-700"
      aria-label="Breadcrumb"
    >
      {/* Logo and Store Name */}
      <a className="flex items-center text-gray-900 mb-4 md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="ml-3 text-xl font-bold text-blue-600 dark:text-white">
          UNIQUE STORE
        </span>
      </a>

      {/* Navigation Links */}
      <ol className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 md:space-x-reverse mx-auto">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-base font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 ease-in-out"
          >
            <svg
              className="w-4 h-4 me-2.5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M19.707 9.293l-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
        </li>

        {["Login", "Signup", "Products"].map((item, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 mx-2 text-gray-400"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 9l4-4-4-4"
              />
            </svg>
            <Link
              to={`/${item.toLowerCase()}`}
              className="text-base font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 ease-in-out transform hover:scale-105"
            >
              {item}
            </Link>
          </li>
        ))}
      </ol>

      {/* User Section */}
      {user.islogin && (
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Sign out
          </button>

          {/* User Avatar */}
          <Avatar
            src={user.userInfo.photourl}
            alt="User Avatar"
            size="lg"
            color="primary"
            bordered
            className="border-2 border-gray-200 dark:border-gray-700"
          />
        </div>
      )}
    </nav>
  );
}

export default Header;
