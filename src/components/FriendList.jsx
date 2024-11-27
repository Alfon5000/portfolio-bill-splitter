import FriendListItem from "./FriendListItem";

export default function FriendList({
  friends,
  onSelectedFriend,
  selectedFriend,
}) {
  return (
    <div className="w-full mb-4 border rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-center p-4 border-b rounded-t-md bg-blue-800 text-white">
        Friend List
      </h2>
      <ul className="overflow-y-auto">
        {friends.map((friend, index) => (
          <FriendListItem
            key={index}
            friend={friend}
            onSelectedFriend={onSelectedFriend}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
}
