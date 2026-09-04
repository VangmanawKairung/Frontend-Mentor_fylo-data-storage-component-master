import "./App.css";
import Header from "./components/Header";
import Stat from "./components/Stat";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="main-content">
        <Header />
        <Stat />
      </main>
      <Footer />
    </>
  );
}

export default App;
