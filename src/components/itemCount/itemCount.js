import React, { useState } from "react";
import Button from "@mui/material/Button";

const ItemCount = () => {
  const initial = 1;
  const stock = 10;

  const [items, setItems] = useState(initial);

  const onAdd = () => {
    if (items < stock) {
      setItems(items + 1);
    }
  };

  const onLess = () => {
    if (items > initial) {
      setItems(items - 1);
    }
  };

  const [name, setName] = useState("T34-85");

  return (
    <div className="item">
      <p>Contador: {items}</p>
      <Button onClick={onLess} variant="outlined">
        -
      </Button>
      <Button onClick={onAdd} variant="contained">
        +
      </Button>
      <h3>{name} Ejercicio Componentes II</h3>
    </div>
  );
};

export default ItemCount;
