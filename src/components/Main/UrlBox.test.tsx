import { render, screen } from '@testing-library/react'
import UrlBox from './UrlBox'
import '@testing-library/jest-dom'

// Object.defineProperty(navigator, 'clipboard', {
//   value: {
//     writeText: jest.fn().mockImplementation(async () => { await Promise.resolve() })
//   }
// })

describe('<UrlBox />', () => {
  // let button: HTMLButtonElement

  beforeEach(() => {
    // render(<UrlBox oldLink="oldLink" newLink="newLink" />)
    // button = screen.getByRole('button', { name: 'copyUrl' })
  })

  test('Should render correctly', () => {
    render(<UrlBox oldLink="oldLink" newLink="newLink" />)

    const button = screen.getByRole('button', { name: 'copyUrl' })

    expect(button).toBeInTheDocument()
  })

  // describe('copy button', () => {
  //   test('should change button class', () => {
  //     fireEvent.click(button)
  //     console.log(button.classList.contains('url-copy'))
  //     expect(button.classList.contains('copied')).toBe(true)
  //   })
  // })
})
