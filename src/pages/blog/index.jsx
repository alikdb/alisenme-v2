import { useState } from "react";
import OpacityContent from "~/components/animated/opacity";
import BlogItem from "~/components/blog/item";
import Button from "~/components/button";
const Blog = () => {
  const [loading, setLoading] = useState(false);
  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }

  return (
    <OpacityContent className="container mx-auto px-5 pt-16">
      <div className="flex justify-start pb-5">
        <h1 className="text-3xl font-bold">Yazılarım</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 pb-5">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
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
