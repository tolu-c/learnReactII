import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  const quoteId = params.quoteId;
  
  return (
    <div>
      QuoteDetail
      <h3>This quote id is {quoteId}</h3>
    </div>
  );
};

export default QuoteDetail;
