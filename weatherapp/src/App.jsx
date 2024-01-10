import "./App.css";
import Container from "./components/Container";
import Left from "./components/Left";
import Right from "./components/Right";
import Search from "./components/Search";
import { useState } from "react";
function App() {
  const [query, setQuery] = useState("tangier");

  const handleSearch = (city) => {
    setQuery(city);
  };
  return (
    <div className="App">
      <Search onSearch={handleSearch} query={query} />
      <Container query={query}>
        <Left></Left>
        <Right></Right>
      </Container>
    </div>
  );
}

export default App;
