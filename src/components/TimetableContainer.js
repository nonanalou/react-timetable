import React from 'react'

export default function TimetableContainer() {
  return (
    <div
      className="max-w-4xl rounded overflow-hidden relative shadow-lg bg-white m-8"
      //  muss noch styling fade in/out machen
      // style="display: none"
    >
      <div className="overflow-x-auto m-4 p-2">
        <ScheduleTable />
        <NoScheduleAlert />
      </div>
      <TableNavigation week="7-2020" />
    </div>
  )
}

function TableNavigation({ week }) {
  return (
    <div className="container justify-center inline-flex mb-6">
      <Button text="Prev" rounded="left" />
      <div className="m-2" id="datePreview">
        {week}
      </div>
      <Button text="Prev" rounded="right" />
    </div>
  )
}

function Button({ text, rounded }) {
  var cssRounded
  switch (rounded) {
    case 'left':
      cssRounded = 'rounded-l'
      break
    case 'right':
      cssRounded = 'rounded-r'
      break

    default:
      cssRounded = ''
      break
  }
  return (
    <button
      id="prevBtn"
      className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ${cssRounded}`}
    >
      {text}
    </button>
  )
}

function ScheduleTable(params) {
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
      <tbody id="tableBody"></tbody>
    </table>
  )
}

function NoScheduleAlert(params) {
  return (
    <div
      id="noSchedule"
      className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md m-6"
    >
      <div className="container justify-center inline-flex">
        <div className="">
          <svg
            className="fill-current h-6 w-6 text-teal-500 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p className="font-bold">There is no schedule this week.</p>
        </div>
      </div>
    </div>
  )
}
