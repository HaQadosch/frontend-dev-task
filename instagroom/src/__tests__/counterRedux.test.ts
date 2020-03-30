
import { rootReducer } from '../store/rootReducer'

test('reducers', () => {
  let state;
  state = rootReducer({ counter: { count: 0 }, unsplash: { items: [] } }, { type: 'counter/increment' });
  expect(state).toEqual({ counter: { count: 1 }, unsplash: { items: [] }  });

  state = rootReducer({ counter: { count: 1 }, unsplash: { items: [] }  }, { type: 'counter/decrement' });
  expect(state).toEqual({ counter: { count: 0 }, unsplash: { items: [] }  });
});
