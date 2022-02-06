import React, { useState } from "react";

import { Alert, Button } from "react-bootstrap";

const ButtonWithAlert = ({ buttonName }) => {
  const [pressed, setPressed] = useState(false);

  const handleUpdate = async () => {
    setPressed(true);
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };

  return (
    <React.Fragment>
      <Button onClick={handleUpdate}>{buttonName}</Button>
      {pressed && (
        <Alert className="mt-3" variant="warning">
          Button <em style={{ fontWeight: "600" }}>refreshes page</em> on demo
          version of admin dashboard.
        </Alert>
      )}
    </React.Fragment>
  );
};

export default ButtonWithAlert;
