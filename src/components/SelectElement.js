import React from 'react'
import SelectInput from './SelectInput'

export default function SelectElement({ title, value, options, onSelect }) {
  const changeHandler = event => {
    onSelect(event.target.value)
  }
  return (
    <div className="w-full my-6">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {title}
        <SelectInput
          options={options}
          value={value}
          onChange={changeHandler}
          defaultLabel={`Please select your ${title}`}
        />
      </label>
    </div>
  )
}
