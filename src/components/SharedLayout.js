import { Outlet, NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const SharedLayout = () => {
  return (
    <>
      <NavLink to="/">
        <a href="">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/003/694/243/small/car-icon-in-flat-style-simple-traffic-icon-free-vector.jpg"
            alt="go home"
          />
        </a>
      </NavLink>
      <Navigation />
      <Outlet />
    </>
  );
};

export default SharedLayout;
