import ChatWritter from "../../components/ChatWritter/ChatWritter";
import Messages from "../../components/Messages/Messages";
import UsersList from "../../components/UsersList/UsersList";

const Home = () => {
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
};

export default Home;
