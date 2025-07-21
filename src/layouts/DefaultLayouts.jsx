import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaulLayout() {
  return (
    <>
      <Header />

      <main style={{ marginTop: "10rem" }}>
        <Outlet />
      </main>

      <footer>

      </footer>
    </>
  )
}