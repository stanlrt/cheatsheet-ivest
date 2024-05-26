import { CheatSheet } from "./CheatSheet.tsx";

const App = () => {
  const cheatBoxes = [
    {
      content: (
        <div>
          Content 1 <div style={{ height: "600px" }}>Content 1b</div>
        </div>
      ),
    },
    { content: <div>Content 2</div> },
    { content: <div>Content 3</div> },
    { content: <div>Content 4</div> },
    { content: <div>Content 5</div> },
    { content: <div>Content 6</div> },
    {
      content: (
        <div>
          Content 7 <div style={{ height: "600px" }}>Content 7b</div>
        </div>
      ),
    },
    { content: <div>Content 8</div> },
    { content: <div>Content 9</div> },
    {
      content: (
        <div>
          Content 10 <div style={{ height: "600px" }}>Content 1</div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <CheatSheet boxes={cheatBoxes} />
    </div>
  );
};

export default App;
