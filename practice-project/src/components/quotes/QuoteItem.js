import { Link } from "react-router-dom";

const QuoteItem = (props) => {
  return (
    <li className="flex flex-col gap-y-4 md:gap-y-6 p-4 md:p-6 md:px-8 bg-white border border-slate-300 text-slate-800 shadow-md rounded-md">
      <figure className="flex flex-col gap-y-2 md:gap-y-3">
        <figcaption className="font-lato text-sm md:text-base italic font-normal capitalize text-slate-900">
          {props.author}
        </figcaption>
        <blockquote>
          <p className="font-merri text-lg md:text-2xl font-semibold">
            {props.text}
          </p>
        </blockquote>
      </figure>
      <div className="flex justify-between items-end">
        <div className="flex gap-x-4 items-center">
          <div className="flex items-center gap-x-1 text-slate-600 cursor-pointer">
            <svg
              className="h-5 w-5 md:w-6 md:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="font-merri text-sm md:text-base font-bold text-slate-800">
              69
            </span>
          </div>

          <div className="flex items-center gap-x-1 text-slate-600 cursor-pointer">
            <svg
              className="h-5 w-5 md:w-6 md:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="font-merri text-sm md:text-base font-bold text-slate-800">
              24
            </span>
          </div>
        </div>
        <Link
          to={`/quotes/${props.id}`}
          className="font-lato font-normal md:text-lg text-slate-600 hover:text-slate-800 hover:underline"
        >
          View
        </Link>
      </div>
    </li>
  );
};

export default QuoteItem;
