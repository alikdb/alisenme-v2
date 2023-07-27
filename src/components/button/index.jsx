import PropTypes from 'prop-types'
import cs from "classnames"
const Button = ({ children, title, variant, className, ...props }) => {
  return (
    <button className={cs({
      className,
      "opacity-50": props.disabled,
      "px-4 py-2 rounded hover:opacity-75": true,
      "bg-gray-700": variant === "primary",
      "bg-green-300/50 px-4 py-2 rounded hover:opacity-75": variant === "forest",
    })} {...props}>{children ? children : title}</button>
  )

}

export default Button

Button.propTypes = {

  children: PropTypes.node,
  title: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'forest']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
}
Button.defaultProps = {
  variant: "primary",
  disabled: false,
  className: "",
  children: null,
  title: ""
}
