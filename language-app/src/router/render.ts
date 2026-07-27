import Router from '@/router/Router';

export default function render(): void {
  const outlet = document.getElementById('outlet');

  if (!outlet) {
    return;
  }

  outlet.replaceChildren(Router());
}
