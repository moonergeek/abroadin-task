import { useSelector } from "react-redux";

const UsersList = () => {
  const user = useSelector((state) => state);
  
  return (
    <aside className="d-flex flex-column align-items-center">
      <ul className="list-group mt-3">
        <li className="list-group-item d-flex justify-content-between align-items-center h-100 gap-2">
          <img
            src="https://picsum.photos/200"
            alt="image"
            width={50}
            className="rounded-circle"
          />
          <p className="fw-bold mt-3">Mahan Jafari</p>
        </li>
      </ul>
    </aside>
  );
};

export default UsersList;
