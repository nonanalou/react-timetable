import React from 'react'
import { render } from '@testing-library/react'
import SelectContainer from '../SelectContainer'
import { TimetableData } from '../TimetableContext'
import { makeServer } from '../server'

let server

beforeEach(() => {
  server = makeServer()
})

afterEach(() => {
  server.shutdown()
})

test('render the select container and manage the view', async () => {
  const { queryByLabelText, debug, getByLabelText, getByTestId } = render(
    <TimetableData>
      <SelectContainer />
    </TimetableData>
  )
  const header = getByTestId('header1')
  const jobSelect = getByLabelText(/job/i)
  const courseSelect = queryByLabelText(/course/i)

  debug(jobSelect)

  expect(header).toHaveTextContent(/stundenplan gibm/i)
  expect(jobSelect).toHaveTextContent(/please select your job/i)
  expect(courseSelect).toBeNull()

  //userEvent.selectOptions(jobSelect, )
})
