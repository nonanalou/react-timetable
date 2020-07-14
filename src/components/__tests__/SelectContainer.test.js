import React from 'react'
import { render, waitForElement, getAllByTestId } from '@testing-library/react'
import SelectContainer from '../SelectContainer'
import { TimetableData } from '../TimetableContext'
import { startServer } from '../server'

import sharedScenario from '../scenarios/sharedSeeds'

let server

beforeEach(() => {
  server = startServer({ environment: 'test' })
  sharedScenario(server)
})

afterEach(() => {
  server.shutdown()
})

test('render the select container and manage the view', async () => {
  const { queryByLabelText, getByLabelText, debug, getByTestId } = render(
    <TimetableData>
      <SelectContainer />
    </TimetableData>
  )
  const header = getByTestId('header1')
  const jobSelect = getByLabelText(/job/i)
  const courseSelect = queryByLabelText(/course/i)

  console.log(server.db.jobs)
  // const options = await waitForElement(() => getByLabelText(/job/i))
  const options = await waitForElement(() => getAllByTestId('selectOption'))
  debug(options)

  expect(header).toHaveTextContent(/stundenplan gibm/i)
  expect(jobSelect).toHaveTextContent(/please select your job/i)
  expect(courseSelect).toBeNull()
  expect(options).toHaveLenght(3)

  //userEvent.selectOptions(jobSelect, )
})
