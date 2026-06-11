import Header from "./Header"

function App() {

  let paraMessage = 'This is our topic'
  //const headerElement = Header()
  //console.log(headerElement);

  const jsxHeaderElement = (
    <div>
      {/*headerElement*/}
      <Header />
      <br />
      <p>
        {paraMessage}
      </p>
    </div>
  )

  return jsxHeaderElement
}
export default App