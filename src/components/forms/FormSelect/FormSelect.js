import React from "react";

const formSelect = ({
  options,
  defaultValue,
  handleChange,
  label,
  ...otherProps
}) => {
  if (!Array.isArray(options) || options.length < 1) return null;

  return (
    <div>
      {label && <label>{label}</label>}

      <select value={defaultValue} onChange={handleChange} {...otherProps}>
        {options.map((option, index) => {
          const { value, name } = option;
          return (
            <option key={index} value={value}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default formSelect;
