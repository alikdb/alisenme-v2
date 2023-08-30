import { Link } from "react-router-dom";
import { timeAgo } from "~/utils/date";
import PropTypes from "prop-types";

const BlogItem = ({ item }) => {
  return (
    <Link to={`/blog/${item.slug}`}>
      <div className="w-full hover:border-gray-400 border border-gray-600 rounded p-5">
        <div className="flex flex-col">
          <span className="text-base md:text-2xl font-bold">{item.title}</span>
          <span className="text-xs mt-1 md:mt-0 md:text-base text-gray-400">
            {timeAgo(item.created_at)}
          </span>
        </div>
      </div>
    </Link>
  );
};

BlogItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    slug: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.string,
  }),
};

export default BlogItem;
