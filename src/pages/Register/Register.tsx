import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../core/schema/schema";

const Register = () => {
  interface IFormInputs {
    fullname: string;
    email: string;
    password: string;
    confirmPassword: string;
    number: number;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <div className="container mt-4">
      <h3 className="fw-bold mb-4">Register Page</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-3">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            placeholder="Enter your fullname"
            {...register("fullname")}
          />

          <p className="text-danger mt-2">{errors.fullname?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            {...register("email")}
          />
          <p className="text-danger mt-2">{errors.email?.message}</p>
        </div>

        <div className="form-group mt-3">
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

        <div className="form-group mt-3">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Password"
            {...register("confirmPassword")}
          />
          <p className="text-danger mt-2">{errors.confirmPassword?.message}</p>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="number">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="number"
            placeholder="Enter your phone number"
            {...register("number")}
          />
          <p className="text-danger mt-2">{errors.number?.message}</p>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
