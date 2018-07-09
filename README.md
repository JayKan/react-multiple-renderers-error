# ReactDOM.render() + React.createContext() Multiple Renderers Error

> Warning: Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.

The above warning occurs __only__ when you have `ReactDOM.render()` and `TestRenderer` (react-test-renderer) coexists within your test file. For instance: 

```javascript 
// This is my actual App.test.js file 
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

// When you `npm t` or `yarn test`, you will get a warning from above
// However, if you comment out ReactDOM.render(<App />, div) line, warning disappears 

```


