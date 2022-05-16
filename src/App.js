import { ResetStyle, GlobalStyles } from "./components/styles/Global";
import Layout from "./components/layout/Layout";
// import Front from "./pages/Front";
// import SearchPage from "./pages/SearchPage";
// import DetailPage from "./pages/DetailPage";
// import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading/Loading";
import { useSelector } from 'react-redux';
import 'animate.css';
import React, { Suspense } from 'react';

const Front = React.lazy(() => import('./pages/Front'));
const SearchPage = React.lazy(() => import("./pages/SearchPage"));
const DetailPage = React.lazy(() => import("./pages/DetailPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  const status = useSelector((state) => state.loading.status);

  return (
    <>
      <ResetStyle />
      <GlobalStyles />
      {status === 'pending'?<Loading />: ''}
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Front />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
