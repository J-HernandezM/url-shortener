import { render, screen } from '@testing-library/react'
import Footer from '.'
import '@testing-library/jest-dom'

describe('<Footer />', () => {
  test('should render correctly', () => {
    render(<Footer />)
    const h2 = screen.getByText('Boost your links today')
    expect(h2).toBeInTheDocument()
  })
})
