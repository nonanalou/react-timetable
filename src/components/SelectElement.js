import React from 'react'
import SelectInput from './SelectInput'

export default function SelectElement({ title, value, options, onSelect }) {
  const changeHandler = event => {
    onSelect(event.target.value)
  }
  return (
    <div className="w-full my-6">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        forhtml="selector"
      >
        {title}
      </label>
      <SelectInput
        name="selector"
        options={options}
        value={value}
        onChange={changeHandler}
        defaultLabel={`Please select your ${title}`}
      />
    </div>
  )
}
