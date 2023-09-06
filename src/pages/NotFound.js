import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>NotFound</div>
      <p>
        You can return to <NavLink to="/">Home</NavLink>
      </p>
    </>
  );
};

export default NotFound;
