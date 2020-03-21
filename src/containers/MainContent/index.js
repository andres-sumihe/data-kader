import React from "react";
import "./style.css";
import "./../../skin.css";
import HeadContent from "./HeadContent";
import BodyContent from "./BodyContent";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenuButtonClicked = this.handleMenuButtonClicked.bind(this);
  }

  handleMenuButtonClicked(isSidebarActive) {
    this.props.onSidebarStatusChange(isSidebarActive);
  }

  render() {
    const isSidebarActive = this.props.isSidebarActive;
    return (
      <div className={"MainContent bg-c5" + (!isSidebarActive ? " Full" : "")}>
        <HeadContent
          isSidebarActive={isSidebarActive}
          onMenuButtonClicked={this.handleMenuButtonClicked}
        />
        <BodyContent />
      </div>
    );
  }
}

export default MainContent;
