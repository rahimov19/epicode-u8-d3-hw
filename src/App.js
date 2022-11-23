import "bootstrap/dist/css/bootstrap.min.css";
import AlertComp from "./components/Alert.jsx";
import "./App.css";

import BookList from "./components/BookList.jsx";

function App() {
  return (
    <div>
      <AlertComp />
      <BookList />
    </div>
  );
}

export default App;
