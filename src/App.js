import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {DepartmentsPages} from "./pages/DepartmentsPages";


function App() {
  return (
      <Layout>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
              <Route path='/' element={<DepartmentsPages/>}/>
          </Routes>
        </BrowserRouter>
      </Layout>
  )
}

export default App;
