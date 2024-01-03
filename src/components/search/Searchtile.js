import "./Searchtitle.css";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import TuneIcon from "@mui/icons-material/Tune";
function Searchtile() {
  return (
    <div className="searchtitle">
      <h3>Carriers</h3>
      <div className="search__titlee">
        <div className="search_input">
          <SearchIcon className="search_icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="button__icon">
          <p>
            <TuneIcon className="tune-icon" />
          </p>
          <button className=" search_btn">
            <span>
              <AddIcon className="addicon" />
              carrier Registration
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searchtile;
