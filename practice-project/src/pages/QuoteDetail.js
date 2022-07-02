import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NotFound from "./NotFound";

const DUMMY_QUOTES = [
  {
    id: "q1",
    text: "I'm a dummy quote",
    author: "John Smith",
  },
  {
    id: "q2",
    text: "I'm another dummy quote",
    author: "John Smith",
  },
];

const QuoteDetail = () => {
  const params = useParams();
  const quoteId = params.quoteId;

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!quote) {
    return <NotFound />;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      
      <Route path={`/quotes/${quoteId}/`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
