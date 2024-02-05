import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Navbar from "./navbar/Navbar";
type publicLayoutProps = {
  children?: React.ReactNode;
};
export default function PublicLayout({ children }: publicLayoutProps) {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      {children}
      <Footer>This is footer</Footer>
    </>
  );
}
