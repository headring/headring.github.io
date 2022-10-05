import React from "react";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../../services/auth";
import {
  Title,
  LoginWrap,
  Panel,
  PanelItem,
  PanelWrap,
  InputText,
  InputLabel,
  Button,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  };

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(this.state);
  };

  render() {
    if (isLoggedIn()) {
      navigate(`/`);
    }

    return (
      <LoginWrap
        method="post"
        onSubmit={(event) => {
          this.handleSubmit(event);
          navigate(`/`);
        }}
      >
        <Panel>
          <Title>OREUM</Title>
          <PanelItem>
            <PanelWrap>
              <InputLabel htmlFor="usename">
                <FontAwesomeIcon icon={faUser} />
              </InputLabel>
              <InputText
                id="usename"
                type="text"
                name="username"
                onChange={this.handleUpdate}
              />
            </PanelWrap>
          </PanelItem>
          <PanelItem>
            <PanelWrap>
              <InputLabel htmlFor="password">
                <FontAwesomeIcon icon={faLock} />
              </InputLabel>
              <InputText
                id="password"
                type="password"
                name="password"
                onChange={this.handleUpdate}
              />
            </PanelWrap>
          </PanelItem>
          <Button type="submit">로그인</Button>
        </Panel>
      </LoginWrap>
    );
  }
}

export default Login;
