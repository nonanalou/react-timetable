import React from 'react'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import SelectElement from '../SelectElement'

const options = [
  { id: 1, label: 'test1' },
  { id: 2, label: 'test2' },
  { id: 3, label: 'test3' },
]

test('renders the select element and its options correctly', () => {
  const labelText = 'test'
  const { getByLabelText, getByText } = render(
    <SelectElement title={labelText} options={options} />
  )

  const selectOptions = getByLabelText(labelText)

  expect(selectOptions).toMatchSnapshot()

  //NOT SURE IF THE REST BELONGS TO THAT TEST
  //the default option included
  expect(selectOptions).toHaveLength(4)

  expect(selectOptions[0]).toHaveAttribute('disabled')
  expect(getByText('test1')).toHaveAttribute('value')

  expect(selectOptions[0]).toHaveValue('')
  expect(getByText('test1')).toHaveValue('1')
  expect(getByText('test2')).toHaveValue('2')
  expect(getByText('test3')).toHaveValue('3')
})

test('allows interaction with the selectElement', () => {
  const labelText = 'test'
  const { getByLabelText, getByText } = render(
    <SelectElement title={labelText} options={options} />
  )

  const selectOptions = getByLabelText(labelText)

  user.selectOptions(selectOptions, '3')

  expect(getByText('test1').selected).toBe(false)
  expect(getByText('test2').selected).toBe(false)
  expect(getByText('test3').selected).toBe(true)
})

// is not required
test.skip('checks if the selectoptions are sorted', () => {
  const labelText = 'test'
  const { getByLabelText } = render(
    <SelectElement title={labelText} options={options} />
  )

  const selectOptions = getByLabelText(labelText)

  expect(selectOptions[0]).toHaveTextContent('Please select your')
  expect(selectOptions[1]).toHaveTextContent(/^test1$/)
  expect(selectOptions[2]).toHaveTextContent(/^test2$/)
  expect(selectOptions[3]).toHaveTextContent(/^test3$/)
})
