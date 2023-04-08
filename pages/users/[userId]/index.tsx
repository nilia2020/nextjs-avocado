import { useRouter } from "next/router";

const UserId = () => {
  const router = useRouter();
  const { userId } = router.query;
  return <div>El usuario: {userId}</div>;
};

export default UserId;
