import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  const [commentText, setCommentText] = useState("");
  const [disable, setDisable] = useState(true);

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if (commentText.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [commentText]);

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentText;

    // send comment to server
    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
    setCommentText("");
  };

  return (
    <form className="flex gap-x-2 w-full mt-2 md:mt-4" onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="w-max mx-auto">
          <LoadingSpinner />
        </div>
      )}
      <input
        type="text"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        name="commentText"
        placeholder="Add a comment"
        className="flex-grow font-lato px-3 py-2 bg-white text-slate-800 border-0 border-b border-slate-300 text-base placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-0 focus:border-b-2 focus:shadow-sm"
      />
      <button
        type="submit"
        className="w-max text-lg px-4 py-1 font-bold disabled:bg-slate-200 disabled:py-1 disabled:px-4 disabled:cursor-not-allowed disabled:text-slate-500 disabled:border disabled:border-slate-200 disabled:shadow-none bg-teal-600 text-white border-none cursor-pointer"
        disabled={disable}
      >
        Add
      </button>
    </form>
  );
};

export default NewCommentForm;
