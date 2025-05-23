import { render, screen } from '@testing-library/react';
import { ZenBolsterBenefitsSection } from '../ZenBolsterBenefitsSection';
import { describe, it, expect } from 'vitest';

describe('ZenBolsterBenefitsSection', () => {
  it('renders without crashing and displays the main heading', () => {
    render(<ZenBolsterBenefitsSection />);
    expect(screen.getByRole('heading', { level: 2, name: /Wake Up to a Better You: The Zen Bolster Advantage/i })).toBeInTheDocument();
  });
});
