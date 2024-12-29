import { useState } from "react";
import { useSingleclient } from "../hooks/useSingleclient";

const GetSingleclient = (): JSX.Element => {
  const [id, setId] = useState<string>("");
  const [searchId, setSearchId] = useState<string>("");
  const { data, loading, error } = useSingleclient(searchId);
  console.log(data);
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
      <div>
        <h1>{data?.client?.email}</h1>
        <h1>{data?.client?.id}</h1>
        <h1>{data?.client?.name}</h1>
        <h1>{data?.client?.phone}</h1>
      </div>
    </>
  );
};

export default GetSingleclient;
