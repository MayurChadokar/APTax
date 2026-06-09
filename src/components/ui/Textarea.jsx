import React from 'react'

const Textarea = ({ label, id, name, required = false, value, onChange, placeholder = '', rows = 4, ...props }) => {
  return (
    <div className="form-group-custom">
      {label && <label htmlFor={id}>{label}{required && '*'}</label>}
      <textarea
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        {...props}
      ></textarea>
    </div>
  )
}

export default Textarea
