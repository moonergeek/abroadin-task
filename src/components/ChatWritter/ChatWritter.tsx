import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { messageSchema } from "../../core/schema/schema";
import { IChatFormInputs } from "../../core/interface/interface";
import { addMessage } from "../../core/redux/messages";

const ChatWritter = () => {
  const { register, handleSubmit } = useForm<IChatFormInputs>({
    resolver: yupResolver(messageSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = (data: IChatFormInputs) => {
    dispatch(addMessage(data.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex">
        <input
          type="text"
          className="form-control"
          id="chat"
          placeholder="Enter your message"
          {...register("message")}
        />
        <button className="btn btn-success">Send</button>
      </div>
    </form>
  );
};

export default ChatWritter;
