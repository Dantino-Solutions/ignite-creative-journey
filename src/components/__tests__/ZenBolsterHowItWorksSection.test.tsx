import { render, screen } from '@testing-library/react';
import { ZenBolsterHowItWorksSection } from '../ZenBolsterHowItWorksSection';
import { describe, it, expect } from 'vitest';

describe('ZenBolsterHowItWorksSection', () => {
  it('renders without crashing and displays the main heading', () => {
    render(<ZenBolsterHowItWorksSection />);
    expect(screen.getByRole('heading', { level: 2, name: /Simple Steps to Rejuvenating Sleep/i })).toBeInTheDocument();
  });
});
