const CommentItem = (props) => {
  return (
    <li className="p-2 md:p-4 md:text-xl text-slate-800 text-lg font-lato">
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
