import { render, screen } from '@testing-library/react';
import useScreenSize from '@hooks';

function TestComponent() {
  const { deviceType } = useScreenSize();
  return <div data-testid='device'>{deviceType}</div>;
}

test('detects device type', () => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 500,
  });
  window.dispatchEvent(new Event('resize'));

  render(<TestComponent />);
  expect(screen.getByTestId('device').textContent).toBe('phone');
});
