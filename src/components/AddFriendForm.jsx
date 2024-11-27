import { useState } from "react";

export default function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/1000");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("");
  }

  return (
    <form
      className="w-full mb-4 bg-blue-100 p-4 rounded-md shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold text-center mb-4">Add Friend</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full border border-blue-500 py-2 px-4 rounded-md shadow-inner"
          placeholder="Enter name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block mb-2">
          Image
        </label>
        <input
          type="text"
          id="image"
          className="w-full border border-blue-500 py-2 px-4 rounded-md shadow-inner"
          placeholder="Enter image URL..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
          disabled
        />
      </div>
      <div className="mb-4 flex justify-end items-center">
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md shadow-md"
        >
          Add
        </button>
      </div>
    </form>
  );
}
