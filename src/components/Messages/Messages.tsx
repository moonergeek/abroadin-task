import { useSelector } from "react-redux";

const Messages = () => {
  const message = useSelector((state) => state);

  return (
    <main className="d-flex flex-column">
      <p
        style={{ width: "40%" }}
        className="mt-4 bg-primary text-white p-3 rounded"
      >
        سلام بچه ها
      </p>
    </main>
  );
};

export default Messages;
