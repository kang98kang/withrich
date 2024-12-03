import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card2 from "./components/Card2";
import FormInput from "./components/FormInput";
import Footer from "./components/Footer";
import "./styles";

const App = () => {
  return (
    <div className="wrap">
      <Header />
      <Navbar />
      <div id="section1" style={{ height: "100vh", background: "#f8f8f8" }}>
        <h1>이미지 들어갈 예정</h1>
      </div>
      <div
        id="section2"
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#f9f3f3",
          paddingTop: "96px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card2 />
      </div>
      <div id="section3" style={{ height: "100vh", background: "#d8d8d8" }}>
        <h1>사은품 혜택</h1>
      </div>
      <FormInput />
      <Footer />
    </div>
  );
};

export default App;
