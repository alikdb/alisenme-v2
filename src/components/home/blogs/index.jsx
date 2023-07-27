import BlogItem from "~/components/blog/item";
const Blogs = () => {
  return (
    <div className="my-5">
      <h3 className="text-xl md:text-3xl font-bold">Son Yazılarım</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
};

export default Blogs;
