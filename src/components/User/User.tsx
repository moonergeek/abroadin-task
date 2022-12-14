import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../core/redux/user";

const User = () => {
  const user = useSelector((state: any) => state.userReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    dispatch(logout());
    navigate("/not-logged");
  };

  return (
    <aside className="d-flex flex-column align-items-center">
      <ul className="list-group mt-3">
        <li className="list-group-item d-flex justify-content-between align-items-center h-100 gap-2">
          <p className="fw-bold mt-3 bg-white">{user.email}</p>
          <button onClick={onSubmit} className="btn btn-danger">
            Logout
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default User;
