import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const params = useParams();
  const quoteId = params.quoteId;

  return (
    <div>
      QuoteDetail
      <h3>This quote id is {quoteId}</h3>

      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
