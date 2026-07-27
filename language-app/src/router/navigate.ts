import render from '@/router/render';

export default function navigate(path: string): void {
  window.history.pushState({}, '', path);

  render();
}
