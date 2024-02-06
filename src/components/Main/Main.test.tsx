import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import Main from './index'
import '@testing-library/jest-dom'

// Mock some component methods
global.fetch = jest.fn().mockImplementation(async () => ({
  json: async () => ({ result_url: 'https://cleanuri.com/pEqXje' }),
  ok: true
}))

global.crypto.randomUUID = jest.fn().mockImplementation(() => 1234)

describe('<Main />', () => {
  beforeEach(() => {
    render(<Main />)
  })

  test('Should render correctly', () => {
    const button = screen.getByRole('button', { name: 'form-btn' })
    expect(button).toBeInTheDocument()
  })

  test('Form submitting should append a new node', async () => {
    const form = screen.getByRole('form')
    const input: HTMLInputElement = screen.getByRole('input')
    input.value = 'http://example.com'

    // Should be inside Act because of the prop update
    await act(async () => {
      fireEvent.submit(form)
    })

    // Should be inside waitFor bc we need to wait the node to be added
    await waitFor(() => {
      const urlBox = screen.getByRole('url-box')
      expect(urlBox).toBeInTheDocument()
    })
  })
})
