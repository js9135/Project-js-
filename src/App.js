import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Bridge from "./components/pages/bridge/Bridge";
import Dashboard from "./components/dashboard/Dashboard";
import Stake from './components/pages/stake/Stake'
import NFT from "./components/pages/nft/NFT";
import Vesting from "./components/pages/vesting/Vesting";
import Perpetual from "./components/pages/perpetual/Perpetual";
import LeadBoard from "./components/pages/leadboard/LeadBoard";
import Marketplace from "./components/pages/marketplace/Marketplace";
import Otc from "./components/pages/otc/Otc";




function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/bridge" element={<Bridge />} />
        <Route exact path="/stake" element={<Stake />} />
        <Route exact path="/nft" element={<NFT />} />
        <Route exact path="/vesting" element={<Vesting />} />
        <Route exact path="/perpetual" element={<Perpetual />} />
        <Route exact path="/leadboard" element={<LeadBoard />} />
        <Route exact path="/marketplace" element={<Marketplace />} />
        <Route exact path="/otc/eth" element={<Otc />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
