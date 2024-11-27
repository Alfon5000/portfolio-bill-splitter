import numeral from "numeral";

export default function FriendListItem({
  friend,
  onSelectedFriend,
  selectedFriend,
}) {
  function handleClick(friend) {
    onSelectedFriend(friend);
  }

  return (
    <li className="py-2 px-4 border-b flex justify-between items-center gap-4 hover:bg-blue-200">
      <div className="flex items-center gap-4">
        <img
          src={friend.image}
          alt={friend.name}
          className="border rounded-full size-16 md:size-20"
        />
        <div>
          <h3 className="text-lg font-semibold">{friend.name}</h3>
          {friend.balance > 0 && (
            <p className="text-green-500">
              {friend.name} owes you Rp{" "}
              {numeral(friend.balance).format("Rp 0,0")}
            </p>
          )}
          {friend.balance < 0 && (
            <p className="text-red-500">
              You owe {friend.name} Rp{" "}
              {numeral(friend.balance * -1).format("Rp 0,0")}
            </p>
          )}
          {friend.balance === 0 && (
            <p className="text-gray-500">You two have no debts</p>
          )}
        </div>
      </div>
      <button
        onClick={() => handleClick(friend)}
        className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md shadow-md"
      >
        {selectedFriend?.id === friend.id ? "Close" : "Select"}
      </button>
    </li>
  );
}
