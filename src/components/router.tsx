import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>main</>} />
        <Route path="*" element={<>NotFound</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
