import React, { createContext, useContext, useEffect, useState } from "react";

const GlobaleContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobaleContext); // Return the context value
};

const Context = ({ children }) => {
  const [user, setUser] = useState({ username: "Samon" });
  const [account, setAccount] = useState([]);
  const [logged, setLogged] = useState(true);
  const [moviedata, setMoviedata] = useState([]);

  useEffect(() => {
    fetch("https://movieforkhapi.vercel.app")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAccount(data.account);
        setMoviedata(data.moviedata);
      })
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, [moviedata]); // Empty dependency array to run effect only on mount

  function signOut() {
    setLogged(false);
  }

  function setnewuser(username) {
    setUser(username);
    setLogged(true);
  }

  const signIn = (username, password) => {
    const userAccount = account.find(
      (acc) => acc.username === username && acc.password === password
    );
    if (userAccount) {
      setLogged(true);
      setUser(userAccount); // Set the full user object
    } else {
      console.log("Invalid username or password");
    }
  };

  return (
    <GlobaleContext.Provider
      value={{ user, logged, account, moviedata, signIn, signOut, setnewuser }}
    >
      {children}
    </GlobaleContext.Provider>
  );
};

export default Context;
