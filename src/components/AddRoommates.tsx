import { useState } from "react";

function AddRoommates({
  roommates,
  setRoommates,
}: Readonly<{
  roommates: string[];
  setRoommates: React.Dispatch<React.SetStateAction<string[]>>;
}>) {
  const [name, setName] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && !roommates.includes(name.trim())) {
      setRoommates([...roommates, name.trim()]);
      setName("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded shadow">
      <form onSubmit={handleAdd}>
        <label className="block text-gray-700 font-medium mb-2">
          Add a Roommate:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-4"
          placeholder="Enter roommate name"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add Roommate
        </button>
      </form>

      {roommates.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Roommates:</h3>
          <ul className="list-disc pl-6 text-gray-800">
            {roommates.map((r, index) => (
              <li key={index}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AddRoommates;
