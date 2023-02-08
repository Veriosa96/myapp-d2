import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";

import Footer from "./components/MyFooter";
import fantasy from "./arc/fantasy.json";
import BookList from "./components/BookList";


function App() {
  return (
    <>
      <NavBar
        Main="My app"
        secondaryText1=" Home"
        secondaryText2="About"
        secondaryText3="Browser"
      />
      <Welcome
        MainTitle="Benvenuti in Jumbobooks.com!"
        BodyJumbotronCard="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sint obcaecati suscipit qui similique ea deserunt temporibus, dolor placeat molestiae expedita totam dicta magnam quibusdam blanditiis in nisi libero accusantium?"
      />
      <div class="row">
      <BookList book={fantasy}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
