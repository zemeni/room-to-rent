import { useNavigate } from "react-router-dom";
type headerProps = {
  children?: React.ReactNode;
};
export default function Footer({ children }: headerProps) {
  const navigate = useNavigate();
  const handleSignin = () => {
    navigate("/signin");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <header
      style={{
        width: "100vw",
        top: 0,
        position: "fixed",
        height: "50px",
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        color: "black",
      }}
    >
      <div>{children}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "5px",
          paddingRight: "5px",
        }}
      >
        <button onClick={handleSignin}>Singin</button>
        <button onClick={handleSignup}>Singup</button>
      </div>
    </header>
  );
}
