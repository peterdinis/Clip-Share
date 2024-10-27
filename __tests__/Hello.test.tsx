import Hello from '../app/_components/shared/Hello';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';


describe('Hello Component', () => {
  it('renders the correct greeting', () => {
    render(<Hello name="Next.js" />);
    expect(screen.getByText('Hello, Next.js!')).toBeInTheDocument();
  });

  it('renders the failed greeting', () => {
    render(<Hello name="Next.js" />);
    expect(screen.queryByText('Hello, Remix.js!')).not.toBeInTheDocument();
  });
});