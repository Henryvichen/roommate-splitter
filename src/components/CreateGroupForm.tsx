import { useState } from "react";

function CreateGroupForm({ onCreate }: { onCreate: (name: string) => void }) {
  const [groupName, setGroupName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (groupName.trim()) {
      onCreate(groupName);
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded shadow">
      {submitted ? (
        <h2 className="text-xl font-semibold text-green-600">
          ✅ Group “{groupName}” created!
        </h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-medium mb-2">
            Group Name:
          </label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-4"
            placeholder="Enter your group name"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Create Group
          </button>
        </form>
      )}
    </div>
  );
}

export default CreateGroupForm;
