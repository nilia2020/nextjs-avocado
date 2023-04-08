import { useRouter } from "next/router";

const ProductItem = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>ProductItem: {productId}</div>;
};

export default ProductItem;
