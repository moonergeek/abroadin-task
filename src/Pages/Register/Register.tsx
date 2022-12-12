const Register = () => {
  return (
    <div className="container mt-4">
      <h3 className="fw-bold mb-4">Register Page</h3>
      <form>
      <div className="form-group mb-3">
          <label htmlFor="email">Fullname</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            placeholder="Enter your fullname"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            className="form-control"
            id="pass"
            placeholder="Password"
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="number">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="number"
            placeholder="Enter your phone number"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
