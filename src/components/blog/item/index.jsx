import { Link } from "react-router-dom";
const BlogItem = () => {
  return (
    <Link to="/blog/asdfasd">
      <div className="w-full hover:border-gray-400 border border-gray-600 rounded p-5">
        <div className="flex flex-col">
          <span className="text-base md:text-2xl font-bold">
            Vite Absolute Path
          </span>
          <span className="text-xs mt-1 md:mt-0 md:text-base text-gray-400">
            14 Ekim 2022
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
