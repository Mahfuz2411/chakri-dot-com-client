import Marquee from "react-fast-marquee";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Ccards from "./Ccards";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";
import { LoaderContext } from "../contexts/LoaderProvider";

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
  const { isLoadingData, setIsLoadingData } = useContext(LoaderContext);

  useEffect(() => {
    fetch("https://chakri-dot-com-server.vercel.app/comment")
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setIsLoadingData((prev) => false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoadingData(false);
      });
  }, [user, comments, isLoadingData]);

  const handleComment = (event) => {
    event.preventDefault();
    const newComment = {
      name: user.displayName,
      image: user.photoURL,
      comment: event.target.comment.value,
      date: findCurrDate(),
    };

    fetch("https://chakri-dot-com-server.vercel.app/comment", {
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
    <div className="container mx-auto w-full flex flex-col justify-center items-center py-20">
      {!isLoadingData && !!comments.length && (
        <div className="container mx-auto py-10 px-5 flex flex-col gap-6">
          <h2 className="text-center font-bold text-4xl">
            Out Client&apos;s Comments
          </h2>
          <Marquee>
            <div className="flex justify-center items-center">
              {comments.map((data) => (
                <Ccards key={data._id} data={data}></Ccards>
              ))}
            </div>
          </Marquee>
        </div>
      )}
      <div>
        <h2 className="text-xl md:text-3xl text-center w-full pb-10 font-bold">Comment Here!</h2>
      <form onSubmit={handleComment} className="join mx-auto pb-10">
        <input
          name="comment"
          className="input input-bordered join-item w-full"
          placeholder="Comment"
        />
        <input
          type="submit"
          className="btn join-item btn-neutral rounded-rl"
          value={"Comment"}
        />
      </form>
      </div>
    </div>
  );
};

export default Comments;
