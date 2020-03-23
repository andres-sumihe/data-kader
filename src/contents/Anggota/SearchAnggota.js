import React from "react";
import "./style.css";
import "../../grid.css";
import "./../../skin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

class FullSearch extends React.Component {
  render() {
    return (
      <form className="FullSearch container-fluid">
        <div className="SingleInputWrapper row">
          <div class="InputSearch column-7">
            <input type="text" placeholder="Contoh: Riettsruff" />
          </div>
          <div class="FilterBy column-4">
            <select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
              <option value="option5">Option 5</option>
            </select>
          </div>
          <div class="ActionButton column-1">
            <span className="AddButton">+</span>
          </div>
        </div>
        <div className="buttonWrapper row no-gutters">
          <div className="SingleButtonWrapper column-6">
            <button type="button" className="SearchButton">
              <FontAwesomeIcon icon={faSearch} />
              <span>Cari</span>
            </button>
          </div>
          <div className="SingleButtonWrapper column-6">
            <button type="button" className="ClearButton">
              <FontAwesomeIcon icon={faTimes} />
              <span>Bersihkan</span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

class FastSearch extends React.Component {
  render() {
    return (
      <form className="FastSearch">
        <div className="InputWrapper ">
          <input
            type="text"
            name="search"
            id="input-item-search"
            placeholder="Contoh: Budi Fuzzy"
            className="bd-c4"
          />
        </div>
        <div className="buttonWrapper row no-gutters">
          <div className="SingleButtonWrapper column-6">
            <button type="button" className="bg-c1-o tx-c1">
              <FontAwesomeIcon icon={faSearch} />
              <span>Cari</span>
            </button>
          </div>
          <div className="SingleButtonWrapper column-6">
            <button type="button" className="bg-c2-o tx-c1">
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
