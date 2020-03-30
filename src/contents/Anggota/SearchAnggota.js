import React from "react";
import "./style.css";
import "../../grid.css";
import "./../../skin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

class FullSearch extends React.Component {
  constructor(props) {
    super(props);
    this.initOptionsFilterBy = [
      { value: "Nama", label: "Nama" },
      { value: "No KTA", label: "No KTA" },
      { value: "Jabatan", label: "Jabatan" },
      { value: "Wilayah/Kabupaten", label: "Wilayah/Kabupaten" }
    ];
    this.state = {
      alertMessage: "",
      searchValue: "",
      selectedFilterBy: null,
      fullSearch: [],
      contentsListOfSearch: [],
      optionsFilterBy: [...this.initOptionsFilterBy]
    };
    this.alertRef = React.createRef();
    this.listOfSearchRef = React.createRef();
    this.handleClickAddButton = this.handleClickAddButton.bind(this);
    this.handleSelectFilterBy = this.handleSelectFilterBy.bind(this);
    this.handleInputSearchValue = this.handleInputSearchValue.bind(this);
    this.toggleAlertMessage = this.toggleAlertMessage.bind(this);
    this.handleClickRemoveSingleList = this.handleClickRemoveSingleList.bind(
      this
    );
  }

  toggleAlertMessage(type) {
    this.alertRef.current.classList.add("Active", "Danger");
    setTimeout(() => {
      this.setState(
        {
          alertMessage: ""
        },
        () => this.alertRef.current.classList.remove("Active", type)
      );
    }, 4000);
  }

  handleClickRemoveSingleList(event) {
    const optionsFilterBy = this.state.optionsFilterBy;
    const newOptionsFilterBy = this.initOptionsFilterBy.filter(
      element =>
        element.value == event.target.dataset.valueFilterBy ||
        optionsFilterBy.includes(element)
    );
    const contentsListOfSearch = this.state.contentsListOfSearch.filter(
      element =>
        element.props.children[1].props.children !==
        event.target.dataset.valueFilterBy
    );
    const fullSearch = this.state.fullSearch.filter(
      element => element.selectedFilterBy !== event.target.dataset.valueFilterBy
    );
    this.setState({
      optionsFilterBy: newOptionsFilterBy,
      contentsListOfSearch,
      fullSearch
    });
  }

  handleClickAddButton() {
    const searchValue = this.state.searchValue;
    const selectedFilterBy = this.state.selectedFilterBy;
    const contentsListOfSearch = this.state.contentsListOfSearch;
    const fullSearch = this.state.fullSearch;
    let optionsFilterBy = this.state.optionsFilterBy;
    if (!searchValue || !selectedFilterBy) {
      this.setState({ alertMessage: "Maaf, Inputan tidak boleh kosong" }, () =>
        this.toggleAlertMessage("Danger")
      );
    } else if (optionsFilterBy.length == 0) {
      this.setState(
        { alertMessage: "Maaf, Anda telah memilih semua filter" },
        () => this.toggleAlertMessage("Danger")
      );
    } else {
      optionsFilterBy = optionsFilterBy.filter(
        element => element.value !== selectedFilterBy.value
      );
      const singleOfSearch = (
        <div className="SingleOfSearch" key={fullSearch.length}>
          <div className="InputSearchValue">{searchValue}</div>
          <div className="FilterByValue">{selectedFilterBy.value}</div>
          <span
            className="RemoveList"
            data-search-value={searchValue}
            data-label-filter-by={selectedFilterBy.label}
            data-value-filter-by={selectedFilterBy.value}
            onClick={this.handleClickRemoveSingleList}
          >
            &times;
          </span>
        </div>
      );

      if (!this.listOfSearchRef.current.classList.contains("Active")) {
        this.listOfSearchRef.current.classList.add("Active");
      }

      contentsListOfSearch.push(singleOfSearch);
      fullSearch.push({
        searchValue,
        selectedFilterBy: selectedFilterBy.value
      });
      this.setState({
        searchValue: "",
        selectedFilterBy: null,
        contentsListOfSearch,
        optionsFilterBy
      });
    }
  }

  handleSelectFilterBy(selectedFilterBy) {
    this.setState({ selectedFilterBy });
  }

  handleInputSearchValue(searchValue) {
    this.setState({ searchValue });
  }

  render() {
    const searchValue = this.state.searchValue;
    const selectedFilterBy = this.state.selectedFilterBy;
    const alertMessage = this.state.alertMessage;
    const contentsListOfSearch = this.state.contentsListOfSearch;
    const optionsFilterBy = this.state.optionsFilterBy;
    return (
      <form className="FullSearch container-fluid">
        <div className="Alert" ref={this.alertRef}>
          {alertMessage}
        </div>
        <div className="InputWrapper row">
          <div className="InputSearch">
            <input
              type="text"
              placeholder="Contoh: Tsukomoto"
              value={searchValue}
              onChange={event =>
                this.handleInputSearchValue(event.target.value)
              }
            />
          </div>
          <div className="FilterBy">
            <Select
              value={selectedFilterBy}
              onChange={this.handleSelectFilterBy}
              placeholder="Cari Berdasarkan..."
              label="Single select"
              isSearchable={true}
              isClearable={true}
              styles={{
                control: (base, state) => ({
                  ...base,
                  padding: "5px 7px",
                  borderRadius: 5,
                  boxShadow: state.isFocused ? 0 : 0,
                  borderColor: state.isFocused ? "#ddd" : base.borderColor,
                  "&:hover": {
                    borderColor: state.isFocused ? "#ddd" : base.borderColor
                  }
                })
              }}
              theme={theme => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "rgba(0, 0, 0, 0.05)",
                  primary50: "#2bcf8a",
                  primary: "#2bcf8a"
                }
              })}
              options={optionsFilterBy}
              noOptionsMessage={() => "Tidak Ada Opsi"}
            />
          </div>
          <div className="ActionButton">
            <span className="AddButton" onClick={this.handleClickAddButton}>
              +
            </span>
          </div>
        </div>
        <div className="ListOfSearch" ref={this.listOfSearchRef}>
          {contentsListOfSearch}
        </div>
        <div className="buttonWrapper row no-gutters">
          <div className="SingleButtonWrapper column-6">
            <button type="submit" className="SearchButton bg-c1-o tx-c1">
              <FontAwesomeIcon icon={faSearch} />
              <span>Cari</span>
            </button>
          </div>
          <div className="SingleButtonWrapper column-6">
            <button type="reset" className="ClearButton bg-c2-o tx-c1">
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
        <div className="InputWrapper">
          <input
            type="text"
            name="search"
            id="input-item-search"
            placeholder="Contoh: Tsukomoto"
          />
        </div>
        <div className="buttonWrapper row no-gutters">
          <div className="SingleButtonWrapper column-6">
            <button type="submit" className="SearchButton bg-c1-o tx-c1">
              <FontAwesomeIcon icon={faSearch} />
              <span>Cari</span>
            </button>
          </div>
          <div className="SingleButtonWrapper column-6">
            <button type="reset" className="ClearButton bg-c2-o tx-c1">
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
  constructor(props) {
    super(props);
    this.state = {
      typeSearch: "PencarianCepat"
    };
    this.handleClickTypeSearch = this.handleClickTypeSearch.bind(this);
    this.pencarianCepatRef = React.createRef();
    this.pencarianLengkapRef = React.createRef();
  }

  handleClickTypeSearch(event, targetTypeSearch) {
    const prevTypeSearch = this.state.typeSearch;
    if (prevTypeSearch !== targetTypeSearch) {
      switch (targetTypeSearch) {
        case "PencarianLengkap":
          this.pencarianCepatRef.current.classList.remove("Active");
          this.pencarianLengkapRef.current.classList.add("Active");
          break;
        case "PencarianCepat":
        default:
          this.pencarianLengkapRef.current.classList.remove("Active");
          this.pencarianCepatRef.current.classList.add("Active");
      }
      this.setState({ typeSearch: targetTypeSearch });
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="Search row no-gutters">
        <div className="TypeOfSearch">
          <div className="SingleOfTypeSearch">
            <span
              className="Active"
              ref={this.pencarianCepatRef}
              onClick={event =>
                this.handleClickTypeSearch(event, "PencarianCepat")
              }
            >
              Pencarian Cepat
            </span>
          </div>
          <div className="SingleOfTypeSearch">
            <span
              ref={this.pencarianLengkapRef}
              onClick={event =>
                this.handleClickTypeSearch(event, "PencarianLengkap")
              }
            >
              Pencarian Lengkap
            </span>
          </div>
        </div>
        <div className="ContentsOfSearch">
          {this.state.typeSearch === "PencarianCepat" ? (
            <FastSearch />
          ) : (
            <FullSearch />
          )}
        </div>
      </div>
    );
  }
}

export default SearchAnggota;
