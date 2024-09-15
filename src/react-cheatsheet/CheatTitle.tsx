export function CheatTitle({ title }: { title: string }) {
  return (
    <div
      style={{
        fontSize: "10px",
        fontWeight: "bold",
        backgroundColor: "black",
        color: "white",
        padding: "2px",
      }}
    >
      {title}
    </div>
  );
}
