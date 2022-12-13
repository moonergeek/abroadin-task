import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../core/schema/schema";
import { ILoginFormInputs } from "../../core/interface/interface";
import { useDispatch } from "react-redux";
import { login } from "../../core/redux/user";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = (data: ILoginFormInputs) =>
    dispatch(login({ email: data.email, password: data.password }));

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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
