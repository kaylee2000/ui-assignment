import { render, screen as testingLibraryScreen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Button from '../ui/Button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(
      testingLibraryScreen.getByRole('button', { name: 'Click me' })
    ).toBeInTheDocument();
  });

  it('applies primary variant styles by default', () => {
    render(<Button>Primary</Button>);
    const button = testingLibraryScreen.getByRole('button');
    expect(button).toHaveClass('bg-primary-600');
  });

  it('applies secondary variant styles when specified', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = testingLibraryScreen.getByRole('button');
    expect(button).toHaveClass('bg-gray-600');
  });

  it('disables button when loading', () => {
    render(<Button loading>Loading</Button>);
    const button = testingLibraryScreen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('shows loading spinner when loading', () => {
    render(<Button loading>Loading</Button>);
    expect(testingLibraryScreen.getByRole('button')).toContainHTML('svg');
  });
});
