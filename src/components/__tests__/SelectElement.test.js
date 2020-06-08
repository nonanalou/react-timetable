import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import SelectElement from '../SelectElement'

const options = [
  { id: 1, label: 'test1' },
  { id: 2, label: 'test2' },
  { id: 3, label: 'test3' },
]

test('renders the select element and its options', () => {
  const labelText = 'test'
  const { getByLabelText, debug, getByText } = render(
    <SelectElement title={labelText} options={options} />
  )

  const selectOptions = getByLabelText(labelText)
  //the default option included
  expect(selectOptions).toHaveLength(4)

  expect(selectOptions[0]).toHaveAttribute('disabled')
  expect(getByText('test1')).toHaveAttribute('value')

  user.selectOptions(selectOptions, 'test3')
  debug(selectOptions)

  //why the fuuu is that working???
  expect(getByText('test1').selected).toBe(true)
  expect(getByText('test2').selected).toBe(false)
  expect(getByText('test3').selected).toBe(false)

  expect(selectOptions[0]).toHaveValue('')
  expect(getByText('test1')).toHaveValue('1')
  expect(getByText('test2')).toHaveValue('2')
  expect(getByText('test3')).toHaveValue('3')

  expect(selectOptions[0]).toHaveTextContent('Please select your')
  expect(selectOptions[1]).toHaveTextContent(/^test1$/)
  expect(selectOptions[2]).toHaveTextContent(/^test2$/)
  expect(selectOptions[3]).toHaveTextContent(/^test3$/)
})

test('selectOptions', () => {
  render(
    <select data-testid="select-multiple">
      <option data-testid="val1" value="1">
        A
      </option>
      <option data-testid="val2" value="2">
        B
      </option>
      <option data-testid="val3" value="3">
        C
      </option>
    </select>
  )

  user.selectOptions(screen.getByTestId('select-multiple'), ['2'])

  expect(screen.getByTestId('val1').selected).toBe(false)
  expect(screen.getByTestId('val2').selected).toBe(true)
  expect(screen.getByTestId('val3').selected).toBe(false)
})
