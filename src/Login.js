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
    this.state = {
      redirectToReferrer: false
    };
    this.passwordRef = React.createRef();
    this.handleSubmitMasuk = this.handleSubmitMasuk.bind(this);
    this.handleChangeTampilkanKataSandi = this.handleChangeTampilkanKataSandi.bind(this);
  }

  handleSubmitMasuk(event) {
    this.setState({
      redirectToReferrer: true
    });
    event.preventDefault();
  }

  handleChangeTampilkanKataSandi(event) {
    this.passwordRef.current.type = event.target.checked ? "text" : "password";
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
                        <input type="password" id="LoginKataSandi" className="PasswordValue" ref={this.passwordRef} />
                        <div className="ShowPasswordWrapper">
                          <input type="checkbox" id="LoginTampilkanKataSandi" onChange={this.handleChangeTampilkanKataSandi} />
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
