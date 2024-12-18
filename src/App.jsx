import "./App.css";

function App() {
  return (
    <div className="bg-slate-600">
      <h1 className="text-center text-2xl font-bold text-slate-200">
        Worlds best to-do app
      </h1>
      <div className="flex justify-center items-center py-10 gap-8">
        <input
          type="text"
          placeholder="Enter Todo"
          className="px-8 py-4 rounded-md"
        />
        <button
          className="border border-white px-8 py-4 rounded-md font-bold text-slate-200
        hover:bg-slate-500"
        >
          Add To do
        </button>
      </div>
      <div className="flex justify-between px-40 min-h-[70vh]">
        <div className="flex flex-col">
          <div className="flex gap-8 text-slate-50 items-center">
            <p>Learn React js and redux </p>
            <button
              className="border border-green-400 px-4 py-2 rounded-md font-bold text-green-400
        hover:bg-slate-500"
            >
              Done
            </button>
            <button
              className="border border-red-400 px-4 py-2 rounded-md font-bold text-red-400
        hover:bg-slate-500"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="w-[1px] bg-slate-400"></div>
        <div className="flex flex-col">
          <div className="flex gap-8 text-slate-50 items-center">
            <p>Learn HTML, CSS and Js</p>
            <button
              className="border border-green-400 px-4 py-2 rounded-md font-bold text-green-400
        hover:bg-slate-500"
            >
              Incomplete
            </button>
            <button
              className="border border-red-400 px-4 py-2 rounded-md font-bold text-red-400
        hover:bg-slate-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
