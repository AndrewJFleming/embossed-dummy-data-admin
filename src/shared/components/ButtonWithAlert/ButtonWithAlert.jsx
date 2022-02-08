import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Alert, Button } from "react-bootstrap";

const ButtonWithAlert = ({ data, path }) => {
  const [pressed, setPressed] = useState(false);
  const [message, setMessage] = useState(
    "Please fill out required the form fields."
  );
  const [variant, setVariant] = useState("danger");
  const history = useHistory();

  const handleUpdate = (data) => {
    //Exclude checkbox props from form validation as they're allowed to be falsy.
    const { isAdmin, inStock, isSlide, isFeatured, isActive, ...newData } =
      data;

    //Use this func on NewUser component form submission to validate email
    function validateEmail(emailAddress) {
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (emailAddress.match(regexEmail)) {
        return true;
      } else {
        return false;
      }
    }

    //Verify that all required fields have been filled.
    const isTruthy = Object.values(newData).every((value) => {
      if (value) {
        return true;
      }
      return false;
    });

    if (isTruthy) {
      if (!newData.email) {
        //Pass all formData not containing an email prop value.
        setMessage(`Success: Redirecting to "...${path}".`);
        setVariant("success");
        setPressed(true);
        setTimeout(function () {
          history.push(`${path}`);
        }, 3000);
      } else if (validateEmail(newData.email)) {
        //If formData contains email prop value, perform email validation.
        setMessage(`Success: Redirecting to "...${path}".`);
        setVariant("success");
        setPressed(true);
        setTimeout(function () {
          history.push(`${path}`);
        }, 3000);
        //
      } else {
        //Email declared invalid.
        setMessage("Improper email input detected.");
        setPressed(true);
        setTimeout(function () {
          setPressed(false);
        }, 3000);
      }
    } else {
      //Notify of incomplete form.
      setPressed(true);
      setTimeout(function () {
        setPressed(false);
      }, 3000);
    }
  };

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          handleUpdate(data);
        }}
      >
        Create
      </Button>
      {pressed && (
        <Alert className="mt-3" variant={variant}>
          {message}
        </Alert>
      )}
    </React.Fragment>
  );
};

export default ButtonWithAlert;
