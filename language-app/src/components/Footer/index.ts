import BaseComponent from '@/components/BaseComponent';
import styles from '@/components/Footer/footer.module.scss';

export default function Footer(): HTMLElement {
  return BaseComponent({
    tag: 'footer',
    className: styles.footer,
    children: [
      BaseComponent({
        tag: 'span',
        className: styles.footerText,
        text: 'my vibe coding language app 2026',
      }),
    ],
  });
}
