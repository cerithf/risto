import "../styles/component_styles/search_bar.scss";
import { useState } from "react";

export default function SearchBar({
  list,
  activeTab,
  activeTabFunc,
  query,
  queryFunc,
}: {
  list: string[];
  activeTab: null | number;
  activeTabFunc: Function;
  query: string;
  queryFunc: Function;
}) {
  function handleChange(e: any): void {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const query = formData.get("query")?.toString();
    queryFunc(query);
  }

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="search-bar">
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 300ms ease",
        }}
      >
        <div
          className={
            "search-bar mx-4 bg-blue rounded-3 flex-column overflow-hidden" +
            (isOpen ? " p-4" : " p-0")
          }
        >
          <form
            className="search-field d-flex gap-2"
            method="get"
            onChange={handleChange}
          >
            {isOpen && (
              <>
                <input
                  type="text"
                  className="form-control rounded-2 font-coustard focus-ring focus-ring-teal border-none"
                  name="query"
                  id="query"
                  aria-describedby="helpId"
                  placeholder="Search"
                />
                <button
                  type="reset"
                  className={"btn p-0 m-0" + (query == "" ? " d-none" : "")}
                  onClick={() => queryFunc("")}
                >
                  <i className="bi bi-x-circle-fill text-cream" />
                </button>
              </>
            )}
            <button
              className="minimise-search-bar btn bg-blue text-cream font-coustard p-0"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
            >
              <i className="bi bi-caret-up-fill mx-2 minimise-caret" />
            </button>
          </form>
          {isOpen && (
            <ul className="search-bar d-flex flex-wrap justify-content-center p-0 mb-0 mt-3 gap-2 font-coustard">
              {list.map((item, index) => (
                <li
                  key={index}
                  className={
                    "text-center p-1 rounded-1 px-0 list-unstyled category-item" +
                    " " +
                    (activeTab == index ? "bg-red text-white" : "bg-yellow")
                  }
                  onClick={() =>
                    activeTab != index
                      ? activeTabFunc(index)
                      : activeTabFunc(null)
                  }
                >
                  {item.replaceAll(" ", " ") /* to use non-breaking spaces */}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-end mx-5">
        {!isOpen && (
          <button
            className="minimise-search-bar btn border-blue bg-cream text-blue font-coustard p-1 flex-grow-1 flex-sm-grow-0"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
          >
            {"  "}Search
            <i className="bi bi-caret-down-fill mx-2 minimise-caret" />
          </button>
        )}
      </div>
    </div>
  );
}
