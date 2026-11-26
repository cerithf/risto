import MenuItem from "../components/MenuItem";
import { Container } from "react-bootstrap";
import Title from "../components/Title";
import { useEffect, useState, type ReactElement } from "react";
import Papa from "papaparse";
import SearchBar from "../components/SearchBar";
import "../styles/page_styles/menu.scss";
import { COLOURS } from "../utils/constants";

export default function Menu() {
  const [data, setData] = useState<any[]>([]);
  const categories = [...new Set(data.map((entry) => entry.category))];
  const [activeTab, setActiveTab] = useState(null);
  const [query, setQuery] = useState("");

  // translates the CSV data into JSON format
  useEffect(() => {
    Papa.parse("src/data/menu_data.csv", {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (results) => setData(results.data),
    });
  }, []);

  // searches query string within
  function searchItems(items: string[], query: string) {
    let count = 0;
    items.forEach((item) => {
      if (item.toLowerCase().includes(query.toLowerCase())) {
        count++;
      }
    });
    return count > 0 ? true : false;
  }

  function ResultsDisplay({
    data,
    key,
    children,
    query,
  }: {
    children: ReactElement;
    data: any[];
    key?: string;
    query: string;
  }) {
    return (
      <div key={key} className="menu-results-display my-2 p-2">
        {children}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {data.map((item, index) => (
            <MenuItem query={query} data={item} key={index} />
          ))}
        </div>
      </div>
    );
  }

  function MenuResultsLogic() {
    if (query == "" && activeTab == null) {
      // NO SEARCH + NO FILTER
      return (
        <>
          {categories.map((category, index) => {
            let filteredData = data.filter((item) => item.category == category);
            return (
              <ResultsDisplay
                query={""}
                data={filteredData}
                key={"category-" + index}
              >
                <h2 className="menu-category-title">{category}</h2>
              </ResultsDisplay>
            );
          })}
        </>
      );
    } else if (query != "" && activeTab == null) {
      // SEARCH + NO FILTER
      const filteredData = data.filter((item) => {
        let termsToSearch = [item.name, item.description, item.category];
        item.dietary && termsToSearch.push(item.dietary);
        return searchItems(termsToSearch, query);
      });
      return (
        <ResultsDisplay query={query} data={filteredData}>
          <h2 className="menu-category-title text-center text-red my-2">
            Search Results for <q>{query}</q>
          </h2>
        </ResultsDisplay>
      );
    } else if (query != "" && activeTab != null) {
      // SEARCH + FILTER
      const filteredData = data
        .filter((item) => item.category == categories[activeTab])
        .filter((item) => {
          let termsToSearch = [item.name, item.description, item.category];
          item.dietary && termsToSearch.push(item.dietary);
          return searchItems(termsToSearch, query);
        });
      return (
        <ResultsDisplay data={filteredData}>
          <h2 className="menu-category-title text-center text-red my-2">
            {categories[activeTab]} containing <q>{query}</q>
          </h2>
        </ResultsDisplay>
      );
    } else if (query == "" && activeTab != null) {
      // NO SEARCH + FILTER
      let filteredData = data.filter(
        (item) => item.category == categories[activeTab],
      );
      return (
        <ResultsDisplay data={filteredData}>
          <h2 className="menu-category-title">{categories[activeTab]}</h2>
        </ResultsDisplay>
      );
    }
  }

  return (
    <div className="MenuPage">
      <div
        className="page-header m-0 py-8"
        style={{
          backgroundImage: "url('src/assets/hand_drawn_food_smaller.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "rgba(247, 235, 228, 0.65)",
          backgroundBlendMode: "lighten",
          boxShadow: "0px -24px 24px inset " + COLOURS.$cream,
        }}
      >
        <Title>Our Menu</Title>
        <SearchBar
          list={categories}
          activeTab={activeTab}
          activeTabFunc={setActiveTab}
          query={query}
          queryFunc={setQuery}
        />
      </div>
      <Container>
        <MenuResultsLogic />
      </Container>
      <div className="attribution opacity-75 text-center fst-italic mt-4 mb-2">
        Background image courtesy of{" "}
        <a
          className="text-blue"
          href="https://www.vecteezy.com/free-vector/gourmet"
        >
          Gourmet Vectors by Vecteezy
        </a>
        .
      </div>
    </div>
  );
}
