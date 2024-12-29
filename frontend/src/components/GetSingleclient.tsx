import { useState } from "react";
import { useSingleclient } from "../hooks/useSingleclient";

const GetSingleclient = (): JSX.Element => {
  const [id, setId] = useState<string>("");
  const [searchId, setSearchId] = useState<string>("");
  const { data, error, loading } = useSingleclient(searchId);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchId(id);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <label>
          GIVE ID:
          <input
            type="text"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <button type="submit">search</button>
      </form>
    </>
  );
};

export default GetSingleclient;
