import React, { useEffect, useState } from 'react'
import { getJobs } from '../utils/API'

export default function SelectContainer(params) {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    // async function fetcher() {
    //   const optionsraw = await getJobs()
    //   const options = optionsraw.map(entry => {
    //     return { id: entry.beruf_id, label: entry.beruf_name }
    //   })
    // }
    // fetcher()
    getJobs().then(optionsRaw => {
      const options = optionsRaw.map(entry => {
        return { id: entry.beruf_id, label: entry.beruf_name }
      })
      setJobs(options)
    })
  }, [])

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-8">
      <div className="px-6 py-4">
        <h1 className="font-bold text-3xl">stundenplan gibm</h1>
        {/* die daten müssen noch eingefüht werden / wie mit localstorage? */}
        <SelectElement
          title="job"
          options={jobs}
          onSelect={value => console.log(value)}
        />
        {/* logic muss hier noch gemacht werden mit dem fade in/out */}
        {/*style="display: none;"*/}
        {/* <SelectElement title="class" /> */}
      </div>
    </div>
  )
}

function SelectElement({ title, options, onSelect }) {
  const changeHandler = e => {
    // (val) => {}
    onSelect(e.target.value)
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
        id="selector"
        options={options}
        onChange={changeHandler}
        defaultLabel={`Please select your ${title}`}
      />
    </div>
  )
}

function SelectInput({ options, onChange, defaultLabel = null }) {
  //options = [{ id: 1, label: 'bla'}]
  return (
    <div className="relative">
      <select
        onChange={onChange}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        {defaultLabel && <option default>{defaultLabel}</option>}
        {options.map(entry => {
          return (
            <option key={entry.id} value={entry.id}>
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
