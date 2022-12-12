import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="d-flex align-items-center flex-column justify-content-center vh-100">
      <h3 className="display-1 fw-bold">404</h3>
      <p className="lead">The page you’re looking for doesn’t exist.</p>
      <Link to={"/"}>
        <button className="btn btn-primary">Go Home</button>
      </Link>
    </section>
  );
};

export default NotFound;
