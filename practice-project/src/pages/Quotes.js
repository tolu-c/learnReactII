import QuoteList from "../components/quotes/QuoteList";

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

const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
