import { ResetStyle, GlobalStyles } from "./components/styles/Global";
import Layout from "./components/layout/Layout";
import Front from "./pages/Front";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
