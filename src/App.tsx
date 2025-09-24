import AddRoommates from "./components/AddRoommates.tsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold mb-6">Roommate Splitter</h1>
      <AddRoommates />
    </div>
  );
}

export default App;
