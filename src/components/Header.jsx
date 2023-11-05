import { useContext } from "react";
import { Link, NavLink} from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/" className="font-bold">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addjobs" className="font-bold">Add Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/myjobs" className="font-bold">My Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/mybids" className="font-bold">My Bids</NavLink>
      </li>
      <li>
        <NavLink to="/requests" className="font-bold">Bid Requests</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="container mx-auto navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="normal-case text-sm md:text-xl font-bold border-2 border-black p-1 md:p-2">
          Charkri.com
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex justify-center items-center gap-2">
              <button onClick={() => logOut()}  className="font-bold text-sm md:text-xl border-2 border-black p-1 md:p-2">Sign Out</button>
              <div className="rounded-full bg-slate-900 outline-0 overflow-hidden">
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-8 h-8 md:w-10 md:h-10 object-cover cursor-pointer"
                />
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="font-bold text-sm md:text-xl border-2 border-black p-1 md:p-2">Sing In</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
