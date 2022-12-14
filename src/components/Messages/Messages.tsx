import { useSelector } from "react-redux";

const Messages = () => {
  const message = useSelector((state: any) => state.messageReducer);
  const user = useSelector((state: any) => state.userReducer);

  return (
    <main className="d-flex flex-column mt-4">
      {message.map((item: string, index: string) => (
        <div key={index} className="alert alert-dark" role="alert">
          <h6>{user.email}</h6>
          {item}
        </div>
      ))}
    </main>
  );
};

export default Messages;
