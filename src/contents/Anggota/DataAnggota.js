import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faList } from "@fortawesome/free-solid-svg-icons";

class DataAnggota extends React.Component {
	render() {
		return (
			<div className="DataAnggota">
				<div className="HeadDataAnggota">
					<div className="ResultData BroderGray"></div>
					<div className="DisplayDataBy">
						<div className="ByGrid">
							<FontAwesomeIcon icon={}
						</div>
						<div className="ByList"></div>
					</div>
				</div>
				<div className="BodyDataAnggota"></div>
			</div>
		);
	}
}

export default DataAnggota;
