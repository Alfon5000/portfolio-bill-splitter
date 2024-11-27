import { useState } from "react";

export default function SplitBillForm({ selectedFriend, onSplitBill }) {
  const [total, setTotal] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = total ? total - myBill : "";
  const [coveredBy, setCoveredBy] = useState("you");

  function handleSplitBill(e) {
    e.preventDefault();

    if (!total || !myBill) return;

    onSplitBill(coveredBy === "you" ? friendBill : -myBill);
  }

  return (
    <form
      className="w-full md:w-1/2 bg-blue-100 p-4 rounded-md shadow-md"
      onSubmit={handleSplitBill}
    >
      <h2 className="text-xl font-semibold text-center mb-4">
        Split Bill with {selectedFriend.name}
      </h2>
      <div className="mb-4">
        <label htmlFor="total_bill" className="block mb-2">
          Total Bill
        </label>
        <input
          type="number"
          id="total_bill"
          className="w-full border border-blue-500 py-2 px-4 rounded-md shadow-inner"
          placeholder="Enter total bill..."
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="your_bill" className="block mb-2">
          Your Bill
        </label>
        <input
          type="number"
          id="your_bill"
          className="w-full border border-blue-500 py-2 px-4 rounded-md shadow-inner"
          placeholder="Enter your bill..."
          value={myBill}
          onChange={(e) => setMyBill(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="friend_bill" className="block mb-2">
          Friend Bill
        </label>
        <input
          type="number"
          id="friend_bill"
          className="w-full border border-blue-500 py-2 px-4 rounded-md shadow-inner"
          placeholder="Enter friend bill..."
          value={friendBill}
          disabled
        />
      </div>
      <div className="mb-4">
        <label htmlFor="covered_by" className="block mb-2">
          Bill Covered by
        </label>
        <select
          id="covered_by"
          className="w-full border border-blue-500 py-2 px-4 rounded-md shadow-inner"
          value={coveredBy}
          onChange={(e) => setCoveredBy(e.target.value)}
        >
          <option value="you">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>
      <div className="flex justify-end items-center">
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
