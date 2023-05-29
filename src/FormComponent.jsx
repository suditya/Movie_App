import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const FormComponent = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormComponent;
