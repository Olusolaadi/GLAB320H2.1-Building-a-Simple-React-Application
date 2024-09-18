import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import './App.css';


function App()  {

  return (
    <main>
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="violet" text="More Practice. More Proficiency." />
      <Content color="purple" text="I think I've got this!" />
      <Footer />
    </main>
  );
}

export default App;
