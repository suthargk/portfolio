import PortFolio from "./components/portfolio";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <PortFolio />
    </>
  );
}

export default App;
