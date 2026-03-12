import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)

    const heading = screen.getByRole('heading', {
      name: /Vite \+ Shadcn Starter/i,
    })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Vite + Shadcn Starter')
  })
})
