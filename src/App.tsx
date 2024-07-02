import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* <Route index element={<Home />} />
        <Route   element={<About />} />
        <Route   element={<Rooms />} />
        <Route   element={<Prices />} />
        <Route   element={<Contacts />} />
        <Route index element={<NoMatch />} />  */}
      </Route>
    </Routes>
  );
}
