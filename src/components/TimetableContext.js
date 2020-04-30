import React, { useState } from 'react'
import { useLocalStorage } from '../utils/hooks'

export const TimetableContext = React.createContext()

export function TimetableData({ children }) {
  const [jobId, setJobId] = useLocalStorage('job_id')
  const [courseId, setCourseId] = useLocalStorage('course_id')
  const value = { jobId, setJobId, courseId, setCourseId }
  return (
    <TimetableContext.Provider value={value}>
      {children}
    </TimetableContext.Provider>
  )
}
