import BlogItem from "~/components/blog/item";
import { getArticles } from "~/services/articles";
import { useQuery } from "@tanstack/react-query";
const Blogs = () => {
  const { data, isLoading } = useQuery(["articles"], () => getArticles());

  return (
    <div className="my-5">
      <h3 className="text-xl md:text-3xl font-bold">Son Yazılarım</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        {isLoading && <div>Yükleniyor...</div>}
        {!isLoading &&
          data &&
          data.map(
            (item, i) => i < 4 && <BlogItem key={item.id} item={item} />
          )}
      </div>
    </div>
  );
};

export default Blogs;
