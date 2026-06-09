import React from 'react'

const Select = ({ label, id, name, required = false, value, onChange, options = [], ...props }) => {
  return (
    <div className="form-group-custom">
      {label && <label htmlFor={id}>{label}{required && '*'}</label>}
      <div className="select-arrow-wrapper">
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="select-arrow-icon">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  )
}

export default Select
