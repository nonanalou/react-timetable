import React from 'react'

export default function TableNavigation({
  addClickHandler,
  prevClickHandler,
  date,
}) {
  return (
    <div className="container justify-center inline-flex mb-6">
      <NavButton text="Prev" rounded="left" onClick={prevClickHandler} />
      <div className="m-2" id="datePreview">
        {date}
      </div>
      <NavButton text="Next" rounded="right" onClick={addClickHandler} />
    </div>
  )
}

function NavButton({ text, rounded, onClick }) {
  let cssRounded
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
      className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ${cssRounded}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
