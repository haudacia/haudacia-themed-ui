import PropTypes from "prop-types";

import "./button.css";
import "../styles.css";

export const ThemedButton = ({
  backgroundColor,
  size = "md",
  label,
  theme = "retroClean",
  rounded = false,
  ...props
}) => {
  const shape = rounded ? "rounded" : "";
  return (
    <button
      type="button"
      className={[theme, size, shape].join(" ")}
      style={backgroundColor && { backgroundColor: backgroundColor }}
      {...props}
    >
      {props.children || label}
    </button>
  );
};

ThemedButton.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(["retroClean", "retroGlow"]),
  rounded: PropTypes.bool,
};
