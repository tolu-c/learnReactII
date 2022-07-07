import { Fragment, useState, useEffect } from "react";
import { Prompt } from "react-router-dom";

import LoadingSpinner from "../UI/LoadingSpinner";
import Card from "../UI/Card";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (author.trim().length !== 0 && text.trim().length !== 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [author, text]);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = author;
    const enteredText = text;

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusHandler = () => {
    setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={() =>
          "Are you sure you wanna leave?\nAll you data would be lost!"
        }
      />

      <Card>
        <form
          onFocus={formFocusHandler}
          className="flex flex-col space-y-6"
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className="">
              <LoadingSpinner />
            </div>
          )}

          <div className="flex flex-col space-y-2 justify-center">
            <label
              htmlFor="author"
              className="text-slate-900 text-lg font-normal font-lato capitalize"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              className="rounded-md font-lato px-3 py-2 bg-white text-slate-700 capitalize border border-slate-300 text-base shadow-sm placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:shadow-lg"
            />
          </div>

          <div className="flex flex-col space-y-2 justify-center">
            <label
              htmlFor="text"
              className="text-slate-900 text-lg font-normal font-lato capitalize"
            >
              Text
            </label>
            <textarea
              id="text"
              rows="5"
              value={text}
              onChange={(event) => setText(event.target.value)}
              className="rounded-md font-lato px-3 py-2 bg-white text-slate-700 border border-slate-300 text-base shadow-sm placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:shadow-lg"
            ></textarea>
          </div>
          <div className="">
            <button
              className="w-full py-3 rounded-md disabled:bg-slate-200 disabled:cursor-not-allowed disabled:text-slate-500 disabled:border disabled:border-slate-200 disabled:shadow-none bg-teal-600 text-white border-none cursor-pointer"
              onClick={finishEnteringHandler}
              disabled={disable}
            >
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
