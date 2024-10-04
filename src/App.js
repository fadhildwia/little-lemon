import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/UnderConstruction";
import Bookings from "./pages/Bookings";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route 
            path={'/about'} 
            element={<UnderConstruction />} 
          />
          <Route 
            path={'/menu'} 
            element={<UnderConstruction />} 
          />
          <Route path={'/bookings'} element={<Bookings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
