import LocationData from "../data/location_data.json";

export default function BookForm({
  includeLocation,
}: {
  includeLocation: boolean;
}) {
  const locations = [...LocationData]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((location) => location.name);
  return (
    <form className="BookForm" action="" method="post">
      <div className="mb-3">
        <label htmlFor="" className="form-label text-black">
          Name
        </label>
        <input
          type="text"
          className="form-control custom-focus"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder=""
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label text-black">
          Email
        </label>
        <input
          type="email"
          className="form-control custom-focus"
          name=""
          id=""
          aria-describedby="emailHelpId"
          placeholder="abc@mail.com"
        />
      </div>
      <div className="mb-3 d-flex gap-3 align-items-center justify-content-center">
        <label htmlFor="" className="form-label text-black p-0 m-0 text-end">
          Number of guests
          {/* <i className="bi bi-person-fill ms-1" /> */}
        </label>
        <div className="guest-input w-25">
          <input
            className="form-control custom-focus"
            type="number"
            step="any"
            min="1"
            max="8"
            defaultValue="2"
          />
          <i className="bi bi-caret-up-fill up-arrow" />
          <i className="bi bi-caret-down-fill down-arrow" />
        </div>
      </div>
      {includeLocation && (
        <div className="mb-3 d-flex gap-3 align-items-center justify-content-center">
          <label htmlFor="" className="form-label text-black p-0 m-0 text-end">
            Location
          </label>
          <select
            className="form-select form-select-lg form-control custom-focus"
            name=""
            id=""
          >
            <option selected>Select one</option>
            {locations.map((location) => (
              <option value="">{location}</option>
            ))}
          </select>
        </div>
      )}
    </form>
  );
}
