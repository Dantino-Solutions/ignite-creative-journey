import { render, screen } from '@testing-library/react';
import { ZenBolsterSolutionSection } from '../ZenBolsterSolutionSection';
import { describe, it, expect } from 'vitest';

describe('ZenBolsterSolutionSection', () => {
  it('renders without crashing and displays the main heading', () => {
    render(<ZenBolsterSolutionSection />);
    expect(screen.getByRole('heading', { level: 2, name: /Zen Bolster: Your Personalized Path to Better Sleep/i })).toBeInTheDocument();
  });
});
