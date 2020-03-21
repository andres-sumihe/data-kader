import React from "react";
import "./style.css";
import "./../../skin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faList, faUsers } from "@fortawesome/free-solid-svg-icons";

class DataAnggota extends React.Component {
	render() {
		return (
			<div className="DataAnggota">
				<div className="HeadDataAnggota">
					<div className="ResultData">
						<span>Menampilkan <span className="bold tx-c7">9</span> Data</span>
					</div>
					<div className="DisplayDataBy">
						<div className="ByGrid Active">
							<FontAwesomeIcon icon={faTh} />
						</div>
						<div className="ByList">
							<FontAwesomeIcon icon={faList} />
						</div>	
					</div>
				</div>
				<div className="BodyDataAnggota row bg-c5">
					<div className="column-l-3 SingleDataAnggota">
						<div className="BoxSingleDataAnggota bg-c1">
							<div className="Foto" style={{ backgroundImage: `url(${require("../../photos/photo1.jpg")})` }}>
							</div>
							<div className="Nama tx-c4">Kimono Budi Fuzzy</div>
							<div className="NoKTA bg-c5">9922090922309201</div>
							<div className="Jabatan tx-c6">Presiden</div>
							<div className="Wilayah tx-c7">Kota Salatiga</div>
						</div>
					</div>
					<div className="column-l-3 SingleDataAnggota">
						<div className="BoxSingleDataAnggota bg-c1">
							<div className="Foto" style={{ backgroundImage: `url(${require("../../photos/photo1.jpg")})` }}>
							</div>
							<div className="Nama tx-c4">Kimono Budi Fuzzy</div>
							<div className="NoKTA bg-c5">9922090922309201</div>
							<div className="Jabatan tx-c6">Presiden</div>
							<div className="Wilayah tx-c7">Kota Salatiga</div>
						</div>
					</div>
					<div className="column-l-3 SingleDataAnggota">
						<div className="BoxSingleDataAnggota bg-c1">
							<div className="Foto" style={{ backgroundImage: `url(${require("../../photos/photo1.jpg")})` }}>
							</div>
							<div className="Nama tx-c4">Kimono Budi Fuzzy</div>
							<div className="NoKTA bg-c5">9922090922309201</div>
							<div className="Jabatan tx-c6">Presiden</div>
							<div className="Wilayah tx-c7">Kota Salatiga</div>
						</div>
					</div>
					<div className="column-l-3 SingleDataAnggota">
						<div className="BoxSingleDataAnggota bg-c1">
							<div className="Foto" style={{ backgroundImage: `url(${require("../../photos/photo1.jpg")})` }}>
							</div>
							<div className="Nama tx-c4">Kimono Budi Fuzzy</div>
							<div className="NoKTA bg-c5">9922090922309201</div>
							<div className="Jabatan tx-c6">Presiden</div>
							<div className="Wilayah tx-c7">Kota Salatiga</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DataAnggota;