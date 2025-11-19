import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/page";
import NotFoundPage from "./pages/notfound/page";
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
