const HighlightedQuote = (props) => {
  return (
    <figure className="mx-auto my-6 mt-20 p-6 py-10 bg-teal-900 border border-slate-200 shadow-md rounded-md flex flex-col gap-y-8">
      <p className="text-3xl text-teal-50 font-merri font-bold drop-shadow-md">
        {props.text}
      </p>
      <figcaption className="self-end font-lato text-base text-teal-50 italic capitalize font-bold">{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
