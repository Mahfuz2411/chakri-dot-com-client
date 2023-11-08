import Marquee from "react-fast-marquee";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Ccards from "./Ccards";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const findCurrDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const currentDate = `${year}-${month}-${day}`;

  return currentDate;
};

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/comment")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [user, comments]);

  const handleComment = (event) => {
    event.preventDefault();
    const newComment = {
      name: user.displayName,
      comment: event.target.comment.value,
      date: findCurrDate(),
    };

    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          event.target.reset();
          Swal.fire({
            title: "Succes",
            text: "Comment added succesfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="container mx-auto w-full flex justify-center items-center py-20">
      <form className="join mx-auto pb-10">
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
      {!!comments.length && (
        <div className="container mx-auto py-10 px-5 flex flex-col gap-6">
          <h2 className="text-center font-bold text-4xl">
            Out Client&apos;s Comments
          </h2>
          <Marquee>
            <div className="flex justify-center items-center">
              {comments.map((data) => (
                <Ccards key={data.id} data={data}></Ccards>
              ))}
            </div>
          </Marquee>
        </div>
      )}
    </div>
  );
};

export default Comments;
