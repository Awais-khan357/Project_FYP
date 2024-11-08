import Header from "./Header/Header";
import Carousels from "./Carousels";
import CheckSearch from "./CheckSearch";
import Cards from "./Cards";
import CheckSec from "./CheckSec";
import CheckCard from "./CheckCard";
import CheckCounter from "./CheckCounter";
import Footer from "./Footer";
export default function Homepage() {
  return (
    <div>
      <Header />
      <Carousels />
      <CheckSearch />
      <Cards />
      <CheckCard />
      <CheckSec />
      <CheckCounter />
      <Footer />
    </div>
  );
}
