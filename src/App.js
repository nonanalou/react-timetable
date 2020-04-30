import React from 'react'

import SelectContainer from './components/SelectContainer'
import TimetableContainer from './components/TimetableContainer'

import { TimetableData } from './components/TimetableContext'

function App() {
  return (
    <div className="App">
      <TimetableData>
        <SelectContainer />
        <TimetableContainer />
      </TimetableData>
    </div>
  )
}

export default App
