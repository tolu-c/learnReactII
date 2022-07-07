const HighlightedQuote = (props) => {
  return (
    <div className="flex flex-col gap-y-6 mt-20 my-6">
      <figure className="mx-auto p-6 py-10 bg-slate-600 border border-slate-200 shadow-md rounded-md flex flex-col gap-y-8">
        <p className="text-3xl text-stone-100 font-merri font-bold drop-shadow-[0_1px_2px_rgba(241,245,249,0.25)]">
          {props.text}
        </p>
        <figcaption className="self-end font-lato text-base text-stone-100 italic capitalize font-bold">
          - {props.author}
        </figcaption>
      </figure>

      <div className="pb-3 border-b border-gray-900/40 flex gap-x-4">
        <div className="flex items-center gap-x-1 text-slate-600 cursor-pointer">
          <svg
            className="h-6 w-6 md:w-7 md:h-7"
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
          <span className="font-merri text-base md:text-lg font-bold text-slate-800">
            69
          </span>
        </div>

        <div className="flex items-center gap-x-1 text-slate-600 cursor-pointer">
          <svg
            className="h-6 w-6 md:w-7 md:h-7"
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
          <span className="font-merri text-base md:text-lg font-bold text-slate-800">
            24
          </span>
        </div>
      </div>
    </div>
  );
};

export default HighlightedQuote;
