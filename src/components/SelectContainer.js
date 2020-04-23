import React from 'react'

export default function SelectContainer(params) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-8">
      <div className="px-6 py-4">
        <h1 className="font-bold text-3xl">stundenplan gibm</h1>
        {/* die daten müssen noch eingefüht werden / wie mit localstorage? */}
        <SelectElement title="job" />
        {/* logic muss hier noch gemacht werden mit dem fade in/out */}
        {/*style="display: none;"*/}
        <SelectElement title="class" />
      </div>
    </div>
  )
}

function SelectElement({ title, input }) {
  return (
    <div className="w-full my-6">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        forhtml="selector"
      >
        {title}
      </label>
      <SelectInput id="selector" />
    </div>
  )
}

function SelectInput({ input }) {
  return (
    <div className="relative">
      <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          // viewbox="0 0 20 20"
        >
          <path d="m9.293 12.95l.707.707l15.657 8l-1.414-1.414l10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}
