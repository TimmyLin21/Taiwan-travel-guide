import { ResetStyle, GlobalStyles } from "./components/styles/Global";
import Layout from "./components/layout/Layout";
import Front from "./pages/Front";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Loading from "./components/loading/Loading";
import { useSelector } from 'react-redux';
import 'animate.css';

function App() {
  const status = useSelector((state) => state.loading.status);

  return (
    <>
      <ResetStyle />
      <GlobalStyles />
      {status === 'pending'?<Loading />: ''}
      <Layout>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
