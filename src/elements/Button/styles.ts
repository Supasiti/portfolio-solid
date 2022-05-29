import { css, CSSObject } from '@emotion/css';
import { styles } from '@/assets/styles';
import { IButtonProps } from './index';

const rootStyle: CSSObject = {
  padding: '0.75rem 1.5rem',
  borderRadius: '100rem',
  border: 'none',
  boxShadow: styles.shadow[2],
  fontSize: '1rem',
  cursor: 'pointer',
};

const primaryStyle: CSSObject = {
  color: styles.color.grey[900],
  backgroundColor: styles.color.primary.main,
  ':hover': {
    backgroundColor: styles.color.primary.light,
    boxShadow: styles.shadow[4],
  },
};

const secondaryStyle: CSSObject = {
  color: styles.color.tertiary.lighter,
  backgroundColor: styles.color.secondary.dark,
  border: styles.color.border.tertiary,
  ':hover': {
    backgroundColor: styles.color.secondary.main,
    boxShadow: styles.shadow[4],
  },
};

const tertiaryStyle: CSSObject = {
  color: styles.color.tertiary.lighter,
  backgroundColor: styles.color.secondary.dark,
  boxShadow: 'none',
  ':hover': {
    backgroundColor: styles.color.secondary.main,
    boxShadow: 'none',
  },
};

const extendStyle: CSSObject = {
  minWidth: '8rem',
};

const circleStyle: CSSObject = {
  padding: '0.25rem',
  width: '2.5rem',
  height: '2.5rem',
};

export const rootClass = (props: IButtonProps) =>
  css({
    ...rootStyle,
    ...(props.color === 'primary' && primaryStyle),
    ...(props.color === 'secondary' && secondaryStyle),
    ...(props.color === 'tertiary' && tertiaryStyle),
    ...(props.variant === 'extend' && extendStyle),
    ...(props.variant === 'circle' && circleStyle),
  });

export const contentClass = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
