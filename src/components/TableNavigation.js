import React from 'react'

export default function TableNavigation({ week }) {
  return (
    <div className="container justify-center inline-flex mb-6">
      <NavButton text="Prev" rounded="left" />
      <div className="m-2" id="datePreview">
        {week}
      </div>
      <NavButton text="Prev" rounded="right" />
    </div>
  )
}

function NavButton({ text, rounded }) {
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
      id="prevBtn"
      className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ${cssRounded}`}
    >
      {text}
    </button>
  )
}
