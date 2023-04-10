import Carousel from "./Carousel/Carousel";
import "./styles.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Carousel />} />
    </Route>
  ),
  { basename: "carousel-templates" }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
