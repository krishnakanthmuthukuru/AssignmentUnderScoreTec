import * as React from "react";
import isEmpty from "lodash/isEmpty";

export const authContext = React.createContext();

export const useAuth = () => {
  const [authed, setAuthed] = React.useState(false);

  return {
    authed,
    login(values) {
      return new Promise((resolve, reject) => {
        const db = JSON.parse(window.localStorage.getItem(values.email));
        if (!isEmpty(db)) {
          if (db.password === values.password) {
            setAuthed(true);
            resolve();
          }
        }
        setAuthed(false);
        reject();
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        res();
      });
    },
  };
};

const AuthProvider = (props) => {
  const auth = useAuth(authContext);

  return (
    <authContext.Provider value={auth}>{props?.children}</authContext.Provider>
  );
};

export default AuthProvider;
