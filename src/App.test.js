import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div); // comment out this line to get rid of errors
    ReactDOM.unmountComponentAtNode(div); // no need to comment out this one
  });

  describe('#react-test-renderer working with React.render() :(', () => {
    const makeComponent = props => TestRenderer.create(<App {...props} />);

    it('started to fail', () => {
      const component = makeComponent({ level: 1, maxLevel: 20 });
      const instance = component.getInstance();
      expect(instance.state.level).toBe(1);
      expect(instance.state.maxLevel).toBe(20);
    });
  });
});
