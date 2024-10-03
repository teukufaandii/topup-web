import React from "react";

const Header = () => {
  return (
    <div className="navbar backdrop-blur-sm bg-gray-800/50 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-primary hover:text-black">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto focus:border-primary focus:ring focus:ring-primary"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            <li>
              <a className="justify-between hover:bg-gray-200">
                Profile
                <span className="badge badge-primary">New</span>
              </a>
            </li>
            <li>
              <a className="hover:bg-gray-200">Settings</a>
            </li>
            <li>
              <a className="hover:bg-gray-200">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
