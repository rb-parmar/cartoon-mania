import Catalog from "./components/Catalog";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import New from "./components/New";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route exact path="/" element={<Catalog />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/new" element={<New />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
