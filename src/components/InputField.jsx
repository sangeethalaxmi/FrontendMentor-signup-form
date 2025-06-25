import React, { forwardRef } from "react";

const InputField = forwardRef(
  ({ type = "text", placeholder, className, ...props }, ref) => {
    return (
      <div className="form-control">
        <input
          type={type}
          ref={ref}
          {...props}
          className={`form-field ${className}`}
          placeholder={placeholder}
        ></input>
      </div>
    );
  }
);

export default InputField;
