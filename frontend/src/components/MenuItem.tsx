interface Props {
  name: string;
  description: string;
  price: number;
  calories: number;
  category: string;
  dietary?: string;
  img?: string;
}

function cleanPriceDisplay(num: number) {
  const numstring = String(num);
  if (!numstring.includes(".")) {
    return numstring + ".00";
  } else if (numstring[numstring.length - 2] == ".") {
    return numstring + "0";
  } else {
    return numstring;
  }
}

function DietaryBadge({ label }: { label: string }) {
  const cleanedLabel = label.replace(" ", "");
  const badgeClasses: Record<string, string> = {
    vegetarian: "text-bg-success",
    vegan: "text-bg-success",
    "gluten-free": "text-bg-yellow",
    "dairy-free": "text-bg-blue",
  };
  const badgeClass = badgeClasses[cleanedLabel] ?? "text-bg-light";
  return (
    <span className={`badge ${badgeClass} rounded-1 m-1`}>{cleanedLabel}</span>
  );
}

export default function MenuItem({
  data,
  query,
}: {
  data: Props;
  query: string;
}) {
  const imagePath = data.category.replace(" ", "_").toLowerCase();
  return (
    <div className="col menu-item">
      <div className="card border-2 row shadow-sm h-100 d-flex flex-row mx-1 overflow-hidden">
        <div
          className="col-1"
          style={{
            backgroundImage: `url('src/assets/menu-images/${imagePath}.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100px",
            minWidth: "100px",
          }}
        ></div>
        <div className="col-3 card-body">
          <h4 className="mb-1 font-coustard">{data.name}</h4>
          <p className="text-body-secondary mb-1">
            {query != ""
              ? `${data.category} | £${cleanPriceDisplay(data.price)}`
              : `£${cleanPriceDisplay(data.price)}`}
          </p>
          <p className="mb-1">{data.description}</p>
          <div className="badges-container d-flex flex-wrap">
            {data.dietary?.split(",").map((item, index) => (
              <DietaryBadge label={item} key={"DietaryBadge-" + index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
