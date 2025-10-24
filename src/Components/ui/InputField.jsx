import React from 'react';


export default function InputField({ 
  label, 
  id, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  className 
}) {


  return (
    <div>
      <label htmlFor={id} className="block text-md md:text-lg font-normal mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        required
      />
    </div>
  );
}