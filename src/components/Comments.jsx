import Marquee from "react-fast-marquee";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Ccards from "./Ccards";
import { AuthContext } from "../contexts/AuthProvider";

const findCurrDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); 
  const day = String(today.getDate()).padStart(2, "0"); 

  const currentDate = `${year}-${month}-${day}`;

  return currentDate;
};

const Comments = () => {
  const [client, setClient] = useState([]);
  const {user} = useContext(AuthContext);

  console.log(user);
  useEffect(() => {
    fetch(
      "http://localhost:5000/comment"
    )
      .then((res) => res.json())
      .then((data) => setClient(data));
  });

  const handleComment = (event) => {
    event.preventDefault();
    const newComment = {
      name: user.displayName,
      comment: event.target.comment.value,
      date: findCurrDate(),
    };
  };

  return (
    <div className="container mx-auto">
      <form className="join w-full ">
        <input
          name="comment"
          className="input input-bordered join-item"
          placeholder="Email"
        />
        <input
          type="submit"
          onClick={handleComment}
          className="btn join-item rounded-rl"
          value={"Comment"}
        />
      </form>
      <div className="container mx-auto py-10 px-5 flex flex-col gap-6">
        <h2 className="text-center font-bold text-4xl">
          Out Client&apos;s Comment
        </h2>
        <Marquee>
          <div className="flex justify-center items-center">
            {client &&
              client.map((data) => <Ccards key={data.id} data={data}></Ccards>)}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Comments;
