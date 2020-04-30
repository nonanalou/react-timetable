import React, { useEffect, useState, useContext } from 'react'
import { getJobs, getCourses } from '../utils/API'
import { TimetableContext } from './TimetableContext'
import SelectElement from './SelectElement'

export default function SelectContainer() {
  const context = useContext(TimetableContext)
  const [jobs, setJobs] = useState([])
  const [courses, setCourses] = useState([])
  const [showCourses, setShowCourses] = useState(false)

  // gets the jobs from the api on the first render
  useEffect(() => {
    setShowCourses(false)
    getJobs().then(optionsRaw => {
      //maps over the jobs and set the values to a "reusable"-keys
      const options = optionsRaw.map(entry => {
        return { id: entry.beruf_id, label: entry.beruf_name }
      })
      setJobs(options)
    })
  }, [])

  // get the courses after a job got chosen
  useEffect(() => {
    if (context.jobId) {
      getCourses(context.jobId).then(optionsRaw => {
        //maps over the courses and set the values to a "reusable"-keys
        const options = optionsRaw.map(entry => {
          return { id: entry.klasse_id, label: entry.klasse_name }
        })
        setCourses(options)
        setShowCourses(true)
      })
    }
  }, [context.jobId])

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-8">
      <div className="px-6 py-4">
        <h1 className="font-bold text-3xl">stundenplan gibm</h1>
        <SelectElement
          title="job"
          value={context.jobId}
          options={jobs}
          defaultLabel={context.jobId}
          onSelect={value => {
            context.setCourseId('')
            context.setJobId(value)
          }}
        />
        {showCourses && (
          <SelectElement
            title="class"
            value={context.courseId}
            options={courses}
            defaultLabel={context.courseId}
            onSelect={value => context.setCourseId(value)}
          />
        )}
      </div>
    </div>
  )
}
