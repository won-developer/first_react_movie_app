import React, { useEffect } from "react";

const Detail = props => {
  const { location, history } = props;
  useEffect(() => {
    if (!location.state) {
      history.push("/");
    }
  }, []);
  if (location.state) {
    return <div>{location.state.title}</div>;
  } else {
    return 0;
  }
};

export default Detail;
