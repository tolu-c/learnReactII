import { useContext, useRef } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const changePasswordRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = changePasswordRef.current.value;
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBu3N4PjvYH3vMzPmI4dgn-jA2y2Gtbcd8";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        password: enteredNewPassword,
        idToken: authCtx.token,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // assumes no error
      console.log(res.json());
    });

    // clears form after submission
    changePasswordRef.current.value = ''
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          ref={changePasswordRef}
          minLength="8"
          id="new-password"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
