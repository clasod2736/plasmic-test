import { PLASMIC } from './plasmic-init';
import Test from './components/Test';

PLASMIC.registerComponent(Test, {
  name: 'Test',
  props: {
    value: {
      type: 'string',
      defaultValue: 'Hello World',
    },
  },
});

