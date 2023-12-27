import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface TodoInputProps {
  onSubmit: () => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit();
    setValue("");
  };

  return (
    <div>
      <TextField label="Todo" value={value} onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add Todo
      </Button>
    </div>
  );
};

export default TodoInput;
