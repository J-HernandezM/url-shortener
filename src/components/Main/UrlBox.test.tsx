import { fireEvent, render, screen } from '@testing-library/react'
import UrlBox from './UrlBox'
import '@testing-library/jest-dom'

const mockWriteText = jest.fn().mockImplementation(async () => { await Promise.resolve() })
const originalClipboard = navigator.clipboard

// @ts-expect-error clipboard readonly
navigator.clipboard = { writeText: mockWriteText }

describe('<UrlBox />', () => {
  let button: HTMLButtonElement

  beforeEach(() => {
    render(<UrlBox oldLink="oldLink" newLink="newLink" />)
    button = screen.getByRole('button', { name: 'copyUrl' })
  })

  test('Should render correctly', () => {
    expect(button).toBeInTheDocument()
  })

  describe('copyThis function', () => {
    afterEach(() => {
      // @ts-expect-error clipboard readonly
      navigator.clipboard = originalClipboard
    })

    test('copyThis function should execute navigator.clipboard', async () => {
      fireEvent.click(button)

      expect(mockWriteText).toHaveBeenCalledTimes(1)
    })

    // test('copyThis function should return early if button is not HTMLButtonElement', () => {
    //   fireEvent.click((button as unknown) as HTMLDivElement)

    //   expect(mockWriteText).toHaveBeenCalled()
    // })

    // test('copyThis function should return early if previous element is not HTMLAnchorElement', () => {
    //   const fakeButton = document.createElement('div')

    //   fireEvent.click(fakeButton)

    //   expect(mockWriteText).not.toHaveBeenCalled()
    // })
  })
})
