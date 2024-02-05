type mainType = {
  children?: React.ReactNode;
};
export default function Main({ children }: mainType) {
  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 100px)",
        background: "white",
        color: "black",
        overflow: "scroll",
      }}
    >
      {children}
    </div>
  );
}
