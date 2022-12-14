import { useSelector } from "react-redux";
import ChatWritter from "../../components/ChatWritter/ChatWritter";
import Messages from "../../components/Messages/Messages";
import UsersList from "../../components/User/User";
import NotLogged from "../NotLogged/NotLogged";

const Home = () => {
  const user = useSelector((state: any) => state.userReducer);

  if (user.email) {
    return (
      <main className="container">
        <div className="row vh-100">
          <div className="col-8">
            <Messages />
            <ChatWritter />
          </div>
          <div className="col-4">
            <UsersList />
          </div>
        </div>
      </main>
    );
  }
  return <NotLogged />;
};

export default Home;
