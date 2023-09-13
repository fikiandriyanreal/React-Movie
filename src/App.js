import NavigationBar from "./components/NavigationBar";
import "./App.css";
import "./style/landingPage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* trending section */}
      <div className="trending">
        <Trending />
      </div>
      {/* end of trending */}

      {/* superhero section */}
      <div className="superhero">
        <Superhero />
      </div>
      {/* end of superhero */}
    </div>
  );
}

export default App;
