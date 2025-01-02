import SearchBar from "../../components/searchBar/searchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Your Dream Home, Our Mission. Tuinuane Tufaulu Pamoja
          </h1>
          <p>
            At Rholand Real Estate, we make finding your dream home seamless and
            rewarding. Whether buying, selling, or renting, we guide you with
            expertise and trust. From cozy apartments to luxury estates and
            Land, we connect you with properties that fit your lifestyle—because
            your dream home is our mission.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
                <h1>10+</h1>
                <h2>Years of Experience</h2>
            </div>
            <div className="box">
                <h1>100+</h1>
                <h2>Awards Recieved</h2>
            </div>
            <div className="box">
                <h1>1000+</h1>
                <h2>Properties Sold</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
