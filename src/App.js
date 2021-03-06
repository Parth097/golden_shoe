import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/navbarComponent/NavbarComp";
import Footer from "./components/footerComponent/Footer";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <NavbarComp />
      <Footer />
    </div>
  );
}

export default App;
