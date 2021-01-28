import React, { useContext, useState, useEffect } from 'react'
import { TimetableContext } from './TimetableContext'
import { getTimetable } from '../utils/API'
import NoScheduleAlert from './NoScheduleAlert'
import ScheduleTable from './ScheduleTable'
import TableNavigation from './TableNavigation'
import {
  subtractWeek,
  addWeek,
  getWeekAndYearString,
} from '../utils/weekCalculator'

export default function TimetableContainer() {
  const [timetable, setTimetable] = useState([])
  const { courseId } = useContext(TimetableContext)
  const [date, setDate] = useState(new Date())
  const week = getWeekAndYearString(date)

  //gets the timetable value after the course got chosen
  useEffect(() => {
    getTimetable(courseId, week).then(optionsRaw => {
      //maps over the timetable and set the values to "reusable"-keys
      const options = optionsRaw.map(entry => {
        const dayNames = [
          'Sonntag',
          'Montag',
          'Dienstag',
          'Mittwoch',
          'Donnerstag',
          'Freitag',
          'Samstag',
        ]
        return {
          id: entry.tafel_id,
          day: dayNames[entry.tafel_wochentag],
          date: entry.tafel_datum,
          from: entry.tafel_von,
          to: entry.tafel_bis,
          teacher: entry.tafel_lehrer,
          course: entry.tafel_fach,
          longCourse: entry.tafel_longfach,
          room: entry.tafel_raum,
        }
      })
      setTimetable(options)
    })
  }, [courseId, week])

  const addClickHandler = () => setDate(() => addWeek(date))
  const prevClickHandler = () => setDate(() => subtractWeek(date))

  return (
    <>
      {courseId && (
        <div className="max-w-4xl rounded overflow-hidden relative shadow-lg bg-white mt-8">
          <div className="overflow-x-auto m-4 p-2">
            {timetable.length ? (
              <ScheduleTable timetableContent={timetable} />
            ) : (
              <NoScheduleAlert />
            )}
          </div>
          <TableNavigation
            addClickHandler={addClickHandler}
            prevClickHandler={prevClickHandler}
            date={week}
          />
        </div>
      )}
    </>
  )
}
