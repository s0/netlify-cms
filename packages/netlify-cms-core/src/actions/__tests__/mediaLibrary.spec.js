import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fromJS } from 'immutable';
import { insertMedia } from '../mediaLibrary';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('mediaLibrary', () => {
  describe('insertMedia', () => {

    it('test public URL is returned directly', () => {
      const store = mockStore({});

      return store.dispatch(insertMedia({url: '//localhost/foo.png'})).then(() => {
        expect(store.getActions()).toEqual('//localhost/foo.png');
      })
    });

  });
});
