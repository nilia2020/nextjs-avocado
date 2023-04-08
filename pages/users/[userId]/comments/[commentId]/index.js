import { useRouter } from "next/router";

const CommentItem = () => {
  const router = useRouter();
  const { userId, commentId } = router.query;
  return (
    <div>
      El usuario: {userId} y su comentario: {commentId}
    </div>
  );
};

export default CommentItem;
