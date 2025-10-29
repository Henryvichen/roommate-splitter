import { useState } from "react";
import CreateGroupForm from "./components/CreateGroupForm";
import AddRoommates from "./components/AddRoommates";


function App() {
const [groupName, setGroupName] = useState("");
const [roommates, setRoommates] = useState<string[]>([]);


return (
<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6">
<h1 className="text-3xl font-bold mb-6">Roommate Splitter</h1>
<CreateGroupForm onCreate={setGroupName} />
{groupName && (
<>
<h2 className="text-xl font-semibold text-gray-800 mt-4">
Group: {groupName}
</h2>
<AddRoommates roommates={roommates} setRoommates={setRoommates} />
</>
)}
</div>
);
}


export default App;
