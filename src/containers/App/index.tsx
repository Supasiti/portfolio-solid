import type { Component } from 'solid-js';
import { Button } from '@/elements/Button';
import { rootClass } from './styles';
import Wave from '@/elements/Wave';
import { Content } from '@/elements/Content';

const App: Component = () => {
  return (
    <div class={rootClass}>
      <Wave />
      <Content>
        <Button color="secondary"> hello world</Button>
      </Content>
    </div>
  );
};

export default App;
