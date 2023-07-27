import { useParams } from "react-router-dom";
const BlogInner = () => {
  const { slug } = useParams();
  return <> {slug}</>;
};

export default BlogInner;
