import React, { useState } from "react";

interface ExpenseProps {
  title: string;
  amount: number;
  provider: any;
  categoryType: any;
  user: any;
  timeStamp: string;
};

interface PotProps {
  id: number;
  title: string;
  targetAmount: number;
  currentAmount: number;
  user: any;
};

interface UserProps {
  id: number;
  name: string;
  budget: number;
  expenses: ExpenseProps[];
  pots: PotProps[];
};

interface UserFormEditProps {
  user: UserProps;
  budget: number;
  onEdit: (user: any) => void;
};

const UserFormEdit = ({ user, onEdit }: UserFormEditProps) => {

  const [stateUser, setStateUser] = useState<UserProps>(
    {
        id: user.id,
        name: user.name,
        budget: user.budget,
        expenses: user.expenses,
        pots: user.pots
    }
  );

  const handleChange = function (event: any) {
    const { name, value } = event.target;
    setStateUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = function (event: any) {
    event.preventDefault();
    onEdit(stateUser);
  };

  return (
      <div className="user-edit-form-container">
        <form onSubmit={handleSubmit} className="user-edit-form">
          <p className="user-p">Edit User Name:</p>
          <input
            type="text"
            placeholder="User Name"
            name="name"
            onChange={handleChange}
            value={stateUser.name}
          />
          <p className="user-p">Edit Budget:</p>
          <input
            type="number"
            placeholder="budget"
            name="budget"
            onChange={handleChange}
            value={stateUser.budget}
          />
          <button type="submit">Save</button>
        </form>
      </div>

  );

};

export default UserFormEdit;