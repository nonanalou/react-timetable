import React from 'react'

export default function SelectInput({
  options,
  value,
  onChange,
  defaultLabel = null,
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        {defaultLabel && (
          //-----------> this is not working with empty classes
          <option value="" disabled>
            {defaultLabel}
          </option>
        )}
        {/* {defaultLabel && <option default>{defaultLabel}</option>} */}
        {options.map(entry => {
          return (
            <option data-testid="selectOption" key={entry.id} value={entry.id}>
              {entry.label}
            </option>
          )
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}
