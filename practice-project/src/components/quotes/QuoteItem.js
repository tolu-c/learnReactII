import { Link } from "react-router-dom";

const QuoteItem = (props) => {
  return (
    <li className="flex flex-col gap-y-4 p-3 bg-teal-400/50 text-slate-800 shadow-md rounded-md">
      <figure className="flex flex-col gap-y-2">
        <figcaption className="font-lato text-sm italic font-normal capitalize text-slate-900">
          {props.author}
        </figcaption>
        <blockquote>
          <p className="font-merri text-lg font-semibold">
            {props.text}
          </p>
        </blockquote>
      </figure>
      <Link to={`/quotes/${props.id}`} className="btn">
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
