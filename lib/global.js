// import getCookie

export const authenticate = () => {
    return new Promise((res, err) => {
      if (getCookie("auth")) {
        return res();
      } else {
        Route.push("/login");
        return err();
      }
    });
  };