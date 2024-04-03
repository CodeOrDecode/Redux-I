import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginchange, modechange } from "../Redux/Todo/action";
import { useDispatch, useSelector } from "react-redux";
import style from "../Css/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mode = useSelector((state) => {
    return state.modethe;
  });

  console.log(mode);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleLogin() {
    try {
      let obj = { email: email, password: password };
      let { data } = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: obj,
      });

      if (data.token == "QpwL5tke4Pnpja7X4") {
        dispatch(loginchange(true));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  function handleMode() {
    dispatch(modechange(!mode));
  }


  return (
    <div className={mode ?style.div1: style.modediv1}>
      <div>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmail}
          className={mode ? style.inputstyle  : style.inputstylemode}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="passsword"
          value={password}
          onChange={handlePassword}
          className={mode ? style.inputstyle  : style.inputstylemode}
        />
      </div>

      <div>
        <button className={mode ? style.buttonis : style.buttonismode} onClick={handleLogin}>
          Submit
        </button>

        <button className={mode ? style.buttonis : style.buttonismode} style={{marginLeft:"14px"}} onClick={handleMode}>
          {mode ?"Dark" : "Light"}
        </button>
      </div>
    </div>
  );
};

export default Login;
