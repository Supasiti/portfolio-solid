import { JSX, ParentComponent, ParentProps } from 'solid-js';
import { contentClass, rootClass } from './styles';

type ButtonColor = 'primary' | 'secondary' | 'tertiary';
type ButtonVariant = 'fit' | 'extend' | 'circle';

export interface IButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  variant?: ButtonVariant;
}

export const Button: ParentComponent<IButtonProps> = (
  props: ParentProps<IButtonProps>,
) => {
  const { color, variant, children, ...attributes } = props;

  return (
    <button class={rootClass(props)} {...attributes}>
      <div class={contentClass}>{props.children}</div>
    </button>
  );
};
