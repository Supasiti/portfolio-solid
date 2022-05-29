import type { Component } from 'solid-js';
import { Button } from '@/elements/Button';
import { rootClass } from './styles';
import Wave from '@/elements/Wave';

const App: Component = () => {
  return (
    <div class={rootClass}>
      <Wave/>
      <Button color='secondary'> hello world</Button>
    </div>
  );
};

export default App;
