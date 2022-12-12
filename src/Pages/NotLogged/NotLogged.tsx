import { Link } from "react-router-dom";

const NotLogged = () => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center vh-100">
      <p className="fw-bold h3">You are not logged in yet!</p>

      <div className="btn-group gap-3 mt-2">
        <Link to={"/login"}>
          <button className="btn btn-success">Login</button>
        </Link>

        <Link to={"/register"}>
          <button className="btn btn-primary">Register</button>
        </Link>
      </div>
    </section>
  );
};

export default NotLogged;
