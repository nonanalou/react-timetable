import React from 'react'

export default function ScheduleTable({ timetableContent }) {
  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th className="w-1/7 px-4 py-2">Datum</th>
          <th className="w-1/7 px-4 py-2">Wochentag</th>
          <th className="w-1/7 px-4 py-2">Von</th>
          <th className="w-1/7 px-4 py-2">Bis</th>
          <th className="w-1/7 px-4 py-2">Lehrer</th>
          <th className="w-1/7 px-4 py-2">Fach</th>
          <th className="w-1/7 px-4 py-2">Raum</th>
        </tr>
      </thead>
      <tbody>
        {timetableContent.map(entry => {
          return (
            <tr key={entry.id}>
              <Cell content={entry.date} />
              <Cell content={entry.day} />
              <Cell content={entry.from} />
              <Cell content={entry.to} />
              <Cell content={entry.teacher} />
              <Cell content={entry.course} />
              <Cell content={entry.room} />
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function Cell({ content }) {
  return <td className="border px-4 py-2">{content}</td>
}
