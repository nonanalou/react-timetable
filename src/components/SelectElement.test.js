import React from 'react'
import { render } from '@testing-library/react'
import { SelectElement } from './SelectContainer'

const options = [
  { id: 1, label: 'test1' },
  { id: 2, label: 'test2' },
  { id: 3, label: 'test3' },
]

test('renders the select element and its options', () => {
  const { getAllByTestId } = render(
    <SelectElement title="test" options={options} />
  )
  // expect(getByText('test1')).toBeInTheDocument()
  const selectOptions = getAllByTestId('selectOption')
  expect(selectOptions.length).toBe(3)
  expect(selectOptions[0].value).toBe('1')
  expect(selectOptions[0].text).toBe('test1')

  // const linkElement = getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})
