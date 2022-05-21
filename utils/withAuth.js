// HOC/withAuth.jsx
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();

    const check = () => {
      const accessToken = localStorage.getItem("accessToken");

      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    };
    // checks whether we are on client / browser or server.
    useEffect(() => {
      check();
    }, []);

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
