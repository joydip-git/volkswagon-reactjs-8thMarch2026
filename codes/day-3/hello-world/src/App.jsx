import { createElement } from "react";
// export function App() {
function App() {
  const reactHeaderElement = createElement(
    'h2',
    {
      id: 'mainHeader',
      style: {
        backgroundColor: 'burlywood',
        textAlign: 'center',
        borderRadius: '5px',
        borderWidth: '1px',
        borderColor: 'burlywood',
        borderStyle: 'solid'
      }
    },
    'Welcome to React JS'
  )
  return reactHeaderElement
}

// export function foo() { }


export default App