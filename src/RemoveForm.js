import React from "react";

function RemoveForm({ onSubmit, max }) {
  const [number, setNumber] = React.useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(number);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Index of Item</label>
        <input
          type="number"
          min={0}
          max={max > 0 ? max - 1 : 0}
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </div>
      <button>Remove</button>
    </form>
  );
}

export { RemoveForm };
