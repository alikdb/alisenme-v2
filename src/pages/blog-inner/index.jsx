import { useParams } from "react-router-dom";
import OpacityContent from "~/components/animated/opacity";
const BlogInner = () => {
  const { slug } = useParams();
  return (
    <OpacityContent>
      <div>slug: {slug}</div>
    </OpacityContent>
  );
};

export default BlogInner;
