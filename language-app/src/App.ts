import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BaseComponent from '@/components/BaseComponent';

export default function App(): HTMLElement {
  return BaseComponent({
    className: 'container',
    children: [
      Header(),
      BaseComponent({
        attributes: {
          id: 'outlet',
        },
      }),
      Footer(),
    ],
  });
}
