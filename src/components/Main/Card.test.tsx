import { render, screen } from '@testing-library/react'
import Card from './Card'

const mockProps = {
  title: 'mocked title',
  description: 'mocked description',
  image: '/image.jpg'
}

describe('<Card />', () => {
  test('Should render correctly', () => {
    render(<Card {...mockProps}/>)

    const title = screen.getByTestId('paragraph-title')

    expect(title.textContent).toBe(mockProps.title)
  })
})
