import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BaseComponent from '@/components/BaseComponent';
import styles from '@/App.module.scss';

export default function App(): HTMLElement {
  return BaseComponent({
    className: styles.container,
    children: [
      Header(),
      BaseComponent({
        tag: 'main',
        className: styles.main,
        attributes: {
          id: 'outlet',
        },
      }),
      Footer(),
    ],
  });
}
