import "bootstrap/dist/css/bootstrap.min.css";
import AlertComp from "./components/Alert.jsx";
import "./App.css";
import BadgeComp from "./components/BadgeComp.jsx";
import BookList from "./components/BookList.jsx";

function App() {
  return (
    <div>
      <AlertComp />
      <BadgeComp color="bg-danger" />
      <BookList />
    </div>
  );
}

export default App;
