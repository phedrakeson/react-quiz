import React from 'react'

const Radio = ({ pergunta, options, id, onChange, value, active }) => {
  if (active === false) return null;
  return (
    <fieldset style={{ padding: '2rem', marginBottom: '1rem', border: '2px solid #eee' }}>
      <legend>{pergunta}</legend>
      {options.map(option => (
        <label key={option} style={{ marginBottom: '1rem', fontFamily: 'monospace', fontWeight: 'bold', display: 'block' }}>
          <input id={id} type="radio" checked={value === option} value={option} onChange={onChange} />
          {option}
        </label>
      ))}
    </fieldset>
  )
}

export default Radio