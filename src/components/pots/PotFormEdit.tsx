import React, { useState } from "react";
interface PotProps {
  id: number;
  title: string;
  amount: number;
  user: object | null;
}

interface PotFormEditProps {
  pot: PotProps;
  amount: number;
  user: any;
  onEdit: (pot: any) => void;
}

const PotFormEdit = ({pot, onEdit }: PotFormEditProps) => {

  const [statePot, setStatePot] = useState<PotProps>(
    {
        id: pot.id,
        title: pot.title,
        amount: pot.amount,
        user: pot.user
    }
  );

  const handleChange = function (event: any) {
    const { name, value } = event.target;
    setStatePot(prevPot => ({
      ...prevPot,
      [name]: value,
    }));
  };

  const handleSubmit = function (event: any) {
    event.preventDefault();
    onEdit(statePot);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pot Title"
          name="title"
          onChange={handleChange}
          value={statePot.title}
        />
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          onChange={handleChange}
          value={statePot.amount}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );

}

export default PotFormEdit;