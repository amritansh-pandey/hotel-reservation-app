import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Featured from "../../components/Featured/Featured";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import PropertyList from "../../components/PropertyList/PropertyList";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle"> Home guests love</h1>
          <FeaturedProperties />
          <MailList />
          <Footer />
      </div>
    </div>
  )
}

export default Home;