import React, { useEffect, useState } from "react";
import localStorage from "local-storage";

const Greeting = () => {
  const [id, sid] = useState(localStorage.get("id"));
  useEffect(() => {
    sid("sid");
  }, [id]);
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Greeting;
