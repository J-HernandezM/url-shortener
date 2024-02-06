import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Header from '.'
import { act } from 'react-dom/test-utils'

describe('<Header />', () => {
  test('Click on Icon should open mobile menu', async () => {
    render(<Header/>)
    const icon = screen.getByRole('icon')

    await act(async () => {
      fireEvent.click(icon)
    })

    await waitFor(() => {
      const mobileMenu = screen.getByRole('mob-menu')
      expect(mobileMenu.classList.contains('header-mobile-true')).toBe(true)
    })
  })
})
