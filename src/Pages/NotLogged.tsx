import { Link } from "react-router-dom";

const NotLogged = () => {
  return (
    <>
      <p>You are not logged in yet :))</p>

      <Link to={"/login"}>
        <button className="btn btn-success">Login</button>
      </Link>

      <Link to={"/register"}>
        <button className="btn btn-primary">Register</button>
      </Link>
    </>
  );
};

export default NotLogged;
