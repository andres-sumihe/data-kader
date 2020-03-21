import React from "react";
import "./style.css";
import "../../grid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

class FastSearch extends React.Component {
  render() {
    return (
      <form className="FastSearch">
        <div className="InputWrapper">
          <input type="text" name="search" id="input-item-search" placeholder="ex: Hoodie Zipper" />
        </div>
        <div className="buttonWrapper row no-gutters">
          <div className="SingleButtonWrapper column-6">
            <button type="button" class="SearchButton">
              <FontAwesomeIcon icon={faSearch} />
              <span>Cari</span>
            </button>
          </div>
          <div className="SingleButtonWrapper column-6">
            <button type="button" class="ClearButton">
              <FontAwesomeIcon icon={faTimes} />
              <span>Bersihkan</span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

class SearchAnggota extends React.Component {
  render() {
    return (
      <div className="Search row no-gutters">
        <div className="TypeOfSearch column-l-3 column-4">
          <div
            className="SingleOfTypeSearch Active"
            data-title="Pencarian-Cepat"
          >
            <span>Pencarian Cepat</span>
          </div>
          <div className="SingleOfTypeSearch" data-title="Pencarian-Lengkap">
            <span>Pencarian Lengkap</span>
          </div>
        </div>
        <div className="ContentsOfSearch column-l-9 column-8">
          <FastSearch />
        </div>
      </div>
    );
  }
}

export default SearchAnggota;