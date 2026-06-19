import AppRoutes from "../../routes/AppRoutes"
import Navbar from "../common/navbar/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      <div className="container container-fluid">
        <AppRoutes />
      </div>
    </div>
  )
}

export default App