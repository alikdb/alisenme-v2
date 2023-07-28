import PropTypes from "prop-types";
const Title = ({ title, description }) => {
  return (
    <div className="flex justify-start pb-5 flex-col">
      <h1 className="text-1xl md:text-5xl font-bold">{title}</h1>
      {description && (
        <p className="text-gray-400 text-base mt-3">{description}</p>
      )}
    </div>
  );
};
export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Title.defaultProps = {
  description: null,
};
