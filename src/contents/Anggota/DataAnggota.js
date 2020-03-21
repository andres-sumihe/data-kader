import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faList } from "@fortawesome/free-solid-svg-icons";

class DataAnggota extends React.Component {
	render() {
		return (
			<div className="DataAnggota">
				<div className="HeadDataAnggota">
					<div className="ResultData">
						<span>Menampilkan <span className="bold">9</span> Data</span>
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
				<div className="BodyDataAnggota row">
					<div className="column-l-3 SingleDataAnggota">
						<div className="BoxSingleDataAnggota">
							<div className="Foto" style={{ backgroundImage: `url(${require("../../photos/photo1.jpg")})` }}>
							</div>
							<div className="Nama">Kimono Budi Fuzzy</div>
							<div className="NoKTA">9922090922309201</div>
							<div className="Jabatan">Presiden</div>
							<div className="Wilayah">Kota Salatiga</div>
						</div>
					</div>
					<div className="column-l-3 SingleDataAnggota">
						<div className="BoxSingleDataAnggota">
							<div className="Foto" style={{ backgroundImage: `url(${require("../../photos/photo2.jpg")})` }}>
							</div>
							<div className="Nama">Kimono Budi Fuzzy</div>
							<div className="NoKTA">9922090922309201</div>
							<div className="Jabatan">Presiden</div>
							<div className="Wilayah">Kota Salatiga</div>
						</div>
					</div>
					<div className="column-l-3 SingleDataAnggota">
						<div className="BoxSingleDataAnggota">
							<div className="Foto" style={{ backgroundImage: `url(${require("../../photos/photo3.jpg")})` }}>
							</div>
							<div className="Nama">Kimono Budi Fuzzy</div>
							<div className="NoKTA">9922090922309201</div>
							<div className="Jabatan">Presiden</div>
							<div className="Wilayah">Kota Salatiga</div>
						</div>
					</div>
					<div className="column-l-3 SingleDataAnggota">
						<div className="BoxSingleDataAnggota">
							<div className="Foto" style={{ backgroundImage: `url(${require("../../photos/photo1.jpg")})` }}>
							</div>
							<div className="Nama">Kimono Budi Fuzzy</div>
							<div className="NoKTA">9922090922309201</div>
							<div className="Jabatan">Presiden</div>
							<div className="Wilayah">Kota Salatiga</div>
						</div>
					</div>
					<div className="column-l-3 SingleDataAnggota">
						<div className="BoxSingleDataAnggota">
							<div className="BoxOverlay">
								<div className="Foto" style={{ backgroundImage: `url(${require("../../photos/photo2.jpg")})` }}>
								</div>
								<div className="Nama">Kimono Budi Fuzzy</div>
								<div className="NoKTA">9922090922309201</div>
								<div className="Jabatan">Presiden</div>
								<div className="Wilayah">Kota Salatiga</div>
								</div>
						</div>
					</div>
					<div className="column-l-3 SingleDataAnggota">
						<div className="BoxSingleDataAnggota">
							<div className="BoxOverlay">
								<div className="Foto" style={{ backgroundImage: `url(${require("../../photos/photo3.jpg")})` }}>
								</div>
								<div className="Nama">Kimono Budi Fuzzy</div>
								<div className="NoKTA">9922090922309201</div>
								<div className="Jabatan">Presiden</div>
								<div className="Wilayah">Kota Salatiga</div>
							</div>
						</div>
					</div>
					<div className="column-l-3 SingleDataAnggota">
						<div className="BoxSingleDataAnggota">
							<div className="BoxOverlay">
								<div className="Foto" style={{ backgroundImage: `url(${require("../../photos/photo1.jpg")})` }}>
								</div>
								<div className="Nama">Kimono Budi Fuzzy</div>
								<div className="NoKTA">9922090922309201</div>
								<div className="Jabatan">Presiden</div>
								<div className="Wilayah">Kota Salatiga</div>
								</div>
						</div>
					</div>
					<div className="column-l-3 SingleDataAnggota">
						<div className="BoxSingleDataAnggota">
							<div className="BoxOverlay">
								<div className="Foto" style={{ backgroundImage: `url(${require("../../photos/photo3.jpg")})` }}>
								</div>
								<div className="Nama">Kimono Budi Fuzzy</div>
								<div className="NoKTA">9922090922309201</div>
								<div className="Jabatan">Presiden</div>
								<div className="Wilayah">Kota Salatiga</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DataAnggota;