import AddFriendForm from "./components/AddFriendForm";
import FriendList from "./components/FriendList";
import SplitBillForm from "./components/SplitBillForm";
import initialFriends from "./friends";
import { useState } from "react";

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriendForm() {
    setShowAddFriendForm(!showAddFriendForm);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriendForm(false);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setShowAddFriendForm(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          return {
            ...friend,
            balance: friend.balance + value,
          };
        }
        return friend;
      })
    );
    setSelectedFriend(null);
  }

  return (
    <div className="md:container md:mx-auto my-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Bill Splitter</h1>
      <p className="text-base font-semibold text-center mb-4">
        Split your bill with friends easily
      </p>
      <div className="md:flex justify-center items-start gap-4">
        <div className="w-full md:w-1/2">
          <FriendList
            friends={friends}
            onSelectedFriend={handleSelectedFriend}
            selectedFriend={selectedFriend}
          />
          {showAddFriendForm && <AddFriendForm onAddFriend={handleAddFriend} />}
          <div className="flex justify-end items-center">
            <button
              onClick={handleShowAddFriendForm}
              className="mb-4 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md shadow-md"
            >
              {showAddFriendForm ? "Close" : "Add Friend"}
            </button>
          </div>
        </div>
        {selectedFriend && (
          <SplitBillForm
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
}
