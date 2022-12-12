import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../core/schema/schema";
import { ILoginFormInputs } from "../../core/interface/interface";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: ILoginFormInputs) => console.log(data);

  return (
    <div className="container mt-4">
      <h3 className="fw-bold mb-4">Login Page</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
            {...register("email")}
          />
          <p className="text-danger mt-2">{errors.email?.message}</p>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            {...register("password")}
          />
          <p className="text-danger mt-2">{errors.password?.message}</p>
        </div>

        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" id="check" />
          <label className="form-check-label" htmlFor="check">
            Check me out
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
