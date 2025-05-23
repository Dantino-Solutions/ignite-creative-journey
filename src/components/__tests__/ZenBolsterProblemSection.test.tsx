import { render, screen } from '@testing-library/react';
import { ZenBolsterProblemSection } from '../ZenBolsterProblemSection';
import { describe, it, expect } from 'vitest';

describe('ZenBolsterProblemSection', () => {
  it('renders without crashing and displays the main heading', () => {
    render(<ZenBolsterProblemSection />);
    expect(screen.getByRole('heading', { level: 2, name: /Tired of Restless Nights/i })).toBeInTheDocument();
  });
});
