import { css } from '@emotion/css';
import { ParentComponent } from 'solid-js';
import { PropAliases } from 'solid-js/web';

const rootClass = css({
  position: 'relative',
  zIndex: 10,
});

export const Content: ParentComponent<{}> = (props) => {
  return <div class={rootClass}>{props.children}</div>;
};
