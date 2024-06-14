import styles from "./page.module.css";
import Homepage from "./Components/Homepage.js";

export default function Home() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element="/login" />
        </Routes>
      </Router> */}
      <Homepage />
    </>
  );
}
