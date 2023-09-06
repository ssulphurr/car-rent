import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>NotFound</div>
      <p>
        Yoo can return to <NavLink to="/">Home</NavLink>
      </p>
    </>
  );
};

export default NotFound;
