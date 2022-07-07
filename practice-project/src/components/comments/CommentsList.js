import CommentItem from './CommentItem';

const CommentsList = (props) => {
  return (
    <ul className="mt-4 md:mt-6 grid grid-cols-1 divide-y bg-slate-200/50 divide-slate-500 divide-dashed">
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
