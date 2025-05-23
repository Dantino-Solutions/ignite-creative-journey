import { render, screen } from '@testing-library/react';
import { ZenBolsterCTASection } from '../ZenBolsterCTASection';
import { describe, it, expect } from 'vitest';

describe('ZenBolsterCTASection', () => {
  it('renders without crashing and displays the main heading', () => {
    render(<ZenBolsterCTASection />);
    expect(screen.getByRole('heading', { level: 2, name: /Ready to Transform Your Sleep/i })).toBeInTheDocument();
  });
});
