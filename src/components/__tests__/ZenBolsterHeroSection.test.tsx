import { render, screen } from '@testing-library/react';
import { ZenBolsterHeroSection } from '../ZenBolsterHeroSection';
import { describe, it, expect } from 'vitest';

describe('ZenBolsterHeroSection', () => {
  it('renders without crashing and displays the main heading', () => {
    render(<ZenBolsterHeroSection />);
    expect(screen.getByRole('heading', { level: 1, name: /Experience Deep, Restorative Sleep with Zen Bolster/i })).toBeInTheDocument();
  });
});
