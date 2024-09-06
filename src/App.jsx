import Header from "./Components/Header";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import SelectMenu from "./Components/SelectMenu";
import CountriesList from "./Components/CountriesList";
import CountryCard from "./Components/CountryCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <SelectMenu />
        </div>
          <CountriesList/>
      </main>
    </>
  );
}

export default App;
