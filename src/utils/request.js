import axios from "axios";
import propTypes from "prop-types";
const request = async ({ url, method, data, header }) => {
  const response = await axios({
    url,
    method,
    data,
    header,
  });

  if (response.status !== 200) {
    throw new Error(`Request failed with status code ${response.status}`);
  }

  return response.data;
};

const get = (url) => request({ url, method: "GET" });
const post = (url, data) => request({ url, method: "POST", data });

export { get, post };

request.PropTypes = {
  url: propTypes.string.isRequired,
  method: propTypes.string.isRequired,
  data: propTypes.object,
  header: propTypes.object,
};

request.defaultProps = {
  data: {},
  header: {},
};
