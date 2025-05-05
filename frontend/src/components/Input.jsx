// components/ui/Input.jsx
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils"; // optional utility to join classnames (define if needed)

const Input = React.forwardRef(
  (
    {
      type = "text",
      placeholder = "",
      className = "",
      icon: Icon,
      onChange,
      onKeyDown,
      value,
      name,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        whileFocus={{ scale: 1.02 }}
        className={cn(
          "relative w-full rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-lg",
          className
        )}
      >
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
            <Icon size={18} />
          </div>
        )}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          {...props}
          className={cn(
            "w-full py-3 px-5 text-white bg-transparent outline-none text-sm placeholder-white/40",
            Icon ? "pl-10" : "pl-5"
          )}
        />
      </motion.div>
    );
  }
);

Input.displayName = "Input";

export { Input };
