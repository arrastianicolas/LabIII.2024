import EstilosCervezas from "./components/EstilosCervezas/EstilosCervezas";
import ListIpaRed from "./components/IpayRed/ListIpaRed";
import ListBeer from "./components/ListBeersAll/ListBeers";
import BeersAvailable from "./components/ListBeersAvailable/BeersAvailable";
import { beers } from "./components/beers/Beers";
const ScreenBeers = () => {
  return (
    <>
      <ListBeer beers={beers}></ListBeer>
      <BeersAvailable beers={beers}></BeersAvailable>
      <ListIpaRed redAndIPA={beers}></ListIpaRed>
      <EstilosCervezas beers={beers}></EstilosCervezas>
    </>
  );
};

export default ScreenBeers;
