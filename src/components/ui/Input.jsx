import React from 'react'

const Input = ({ label, id, name, type = 'text', required = false, value, onChange, placeholder = '', ...props }) => {
  return (
    <div className="form-group-custom">
      {label && <label htmlFor={id}>{label}{required && '*'}</label>}
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}

export default Input
