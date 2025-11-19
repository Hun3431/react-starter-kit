import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import NotFoundPage from "./pages/notfound";
import MobileLayout from "./layout/mobileWeb/layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MobileLayout />}>
          <Route index element={<MainPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
