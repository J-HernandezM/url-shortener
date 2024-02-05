import { render, screen } from '@testing-library/react'
import Main from './index'
import '@testing-library/jest-dom'

describe('<Main />', () => {
  test('Should render correctly', () => {
    render(<Main />)

    const button = screen.getByRole('button', { name: 'form-btn' })

    expect(button).toBeInTheDocument()
  })
})
