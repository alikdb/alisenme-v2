import { useState } from "react";
import OpacityContent from "~/components/animated/opacity";
import BlogItem from "~/components/blog/item";
import { getArticles } from "~/services/articles";
import Button from "~/components/button";
import { useQuery } from "@tanstack/react-query";
import Title from "~/components/title";
import ContentLoader from "react-content-loader";
const Blog = () => {
  const { data, isLoading } = useQuery(["articles"], () => getArticles());

  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <OpacityContent className="container mx-auto px-5 pt-16">
      <Title title="Blog" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-5">
        {!isLoading &&
          data.map((item) => <BlogItem key={item.id} item={item} />)}

        {isLoading &&
          [...Array(10)].map((k, i) => (
            <ContentLoader className="h-24 rounded w-full" key={i}>
              <rect width="100%" height="100%" />
            </ContentLoader>
          ))}
      </div>
      <div className="flex justify-center pb-5">
        <Button disabled={loading} onClick={() => loadMore()} variant="forest">
          {loading ? "Yükleniyor.." : "Devamını Yükle"}
        </Button>
      </div>
    </OpacityContent>
  );
};

export default Blog;
