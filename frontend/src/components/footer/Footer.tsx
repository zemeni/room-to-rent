type footerProps = {
  children?: React.ReactNode;
};
export default function Footer({ children }: footerProps) {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100vw",
        height: "50px",
        background: "white",
        color: "black",
      }}
    >
      {children}
    </footer>
  );
}
