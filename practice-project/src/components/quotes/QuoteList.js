import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  // console.log(location);

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";
  
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `sort=${isSortingAscending ? "desc" : "asc"}`,
    })
    // history.push(`${location.pathname}?sort=${(isSortingAscending ? "desc" : "asc")}`);
  };

  return (
    <Fragment>
      <div className="flex">
        <button
          onClick={changeSortHandler}
          className="px-4 py-2 text-base font-lato border border-teal-500 rounded-md text-teal-600 hover:bg-teal-700 hover:border-none hover:text-teal-100 flex-none"
        >
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>

      <ul className='flex flex-col gap-y-4 my-4'>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
