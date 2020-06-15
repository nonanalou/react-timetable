import React, { useContext } from 'react'

import SelectContainer from './components/SelectContainer'
import TimetableContainer from './components/TimetableContainer'
import { TimetableContext } from './components/TimetableContext'

function App() {
  const context = useContext(TimetableContext)
  return (
    <div className="h-screen bg-pink-400 p-8">
      <SelectContainer />
      {context.courseId && <TimetableContainer />}
    </div>
  )
}

export default App
