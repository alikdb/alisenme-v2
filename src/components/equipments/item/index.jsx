import PropTypes from "prop-types";
const EquipmentItem = ({ item }) => {
  return (
    <div className="bg-gray-800 w-full rounded border-2 border-gray-800 hover:border-gray-600">
      <div className="flex justify-center text-xl my-2">{item.name}</div>
      <div className="aspect-square flex items-center justify-center overflow-hidden">
        <img
          src={item.image}
          className="w-full object-cover rounded-md"
          alt={item.name}
        />
      </div>
    </div>
  );
};

export default EquipmentItem;

EquipmentItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};
