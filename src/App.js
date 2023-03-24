import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ArtNav from "./components/ArtNav";
import ArtHero from "./components/ArtHero";
import Preautomation from "./components/Preautomation";
import PostAutomation from "./components/PostAutomation";
import Efficiency from "./components/Efficiency";
import InvoiceDuration from "./components/InvoiceDuration";

function App() {
  return (
    <>
      <ArtNav />
      <ArtHero />
      <Preautomation />
      <PostAutomation />
      <Efficiency />
      <InvoiceDuration />
    </>
  );
}

export default App;
