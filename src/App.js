import { useState } from "react";
import { Input } from "./Input";
import { RemoveForm } from "./RemoveForm";

function App() {
  const [colors, setColors] = useState(["red", "green", "blue"]);

  const removeColorAtIndex = (indexToRemove) => {
    const removed = colors.filter((_, index) => index !== indexToRemove);
    setColors(removed);
  };

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const renderedColors = colors.map((color) => {
    return <li key={crypto.randomUUID()}>{color}</li>;
  });

  return (
    <div>
      <Input onSubmit={addColor} />
      <ul>{renderedColors}</ul>
      <hr />
      <RemoveForm onSubmit={removeColorAtIndex} max={colors.length} />
    </div>
  );
}

export default App;
