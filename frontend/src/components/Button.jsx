// components/ui/Button.jsx
import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Button = ({
  children,
  onClick,
  variant = "default",
  className = "",
  icon: Icon,
  disabled = false,
  type = "button",
}) => {
  const baseStyles =
    "px-5 py-2.5 rounded-full font-medium text-sm focus:outline-none focus:ring-2 transition-all duration-300";

  const variants = {
    default:
      "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur",
    cyan:
      "bg-cyan-500 hover:bg-cyan-600 text-white border border-cyan-400",
    ghost:
      "bg-transparent border border-white/20 text-white hover:bg-white/10",
    danger:
      "bg-red-500 hover:bg-red-600 text-white",
  };

  const classes = `${baseStyles} ${variants[variant] || variants.default} ${className}`;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </div>
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["default", "cyan", "ghost", "danger"]),
  className: PropTypes.string,
  icon: PropTypes.elementType,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
