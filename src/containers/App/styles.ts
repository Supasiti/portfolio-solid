import { css, CSSObject } from '@emotion/css';
import { styles } from '@/assets/styles';

export const rootClass = css({
  position: 'relative',
  height: '100vh',
  width: '100vw',
  backgroundImage: `linear-gradient(${styles.color.secondary.darker}, ${styles.color.tertiary.darker})`,
  overflow: 'hidden',
});
