const Card = (props) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg m-4 border border-gray-200">
      {props.children}
    </div>
  );
};

export default Card;
