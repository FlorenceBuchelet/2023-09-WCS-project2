import "./Homepage.scss";
import { Link } from "react-router-dom";
import PresentationBox from "../../components/PresentationBox/PresentationBox";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

function Homepage() {
  return (
    <main className="homepage">
      <PresentationBox />
      <div className="homepage--button--container">
        <h1 className="homepage--title fancy"> Lille Street Art</h1>

        <DropdownMenu />
        <footer>
          <Link to="/submit" className="homepage__footer fancy">
            Submit
          </Link>
          <Link to="/aboutus" className="homepage__footer fancy">
            About us
          </Link>
        </footer>
      </div>
    </main>
  );
}

export default Homepage;
