import React from "react";
import { Redirect } from "react-router-dom";
import "./grid.css";
import "./skin.css";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitMasuk = this.handleSubmitMasuk.bind(this);
    this.state = {
      redirectToReferrer: false
    };
  }

  handleSubmitMasuk(event) {
    this.setState({
      redirectToReferrer: true
    });
    event.preventDefault();
  }

  render() {
    if (this.state.redirectToReferrer === true) {
      return <Redirect to={"/anggota"} />
    }

    return (
      <div className="LoginWrapper">
        <div className="BoxLogin">
          <div className="Brand">
            <h3>Data Kader</h3>
          </div>
          <div className="InnerBoxLogin">
            <div className="Head">
              <h5>
                <FontAwesomeIcon icon={faSignInAlt} />
                <span>Akses Masuk</span>
              </h5>
            </div>
            <div className="Body">
              <form className="LoginForm" onSubmit={this.handleSubmitMasuk}>
                <table className="InputWrapper">
                  <tbody>
                    <tr className="SingleInput">
                      <td className="Label">
                        <label htmlFor="LoginNamaPengguna">Nama Pengguna</label>
                      </td>
                      <td className="Value">
                        <input type="text" id="LoginNamaPengguna" />
                      </td>
                    </tr>
                    <tr className="SingleInput">
                      <td className="Label">
                        <label htmlFor="LoginKataSandi">Kata Sandi</label>
                      </td>
                      <td className="Value">
                        <input type="password" id="LoginKataSandi" className="PasswordValue" />
                        <div className="ShowPasswordWrapper">
                          <input type="checkbox" id="LoginTampilkanKataSandi" />
                          <label htmlFor="LoginTampikanKataSandi">Tampilkan Kata Sandi</label>
                        </div>
                      </td>
                    </tr>
                    <tr className="SingleInput">
                      <td></td>
                      <td className="SubmitArea">
                        <button type="submit" className="LoginButton">
                          <FontAwesomeIcon icon={faSignInAlt} />
                          <span>Masuk</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
