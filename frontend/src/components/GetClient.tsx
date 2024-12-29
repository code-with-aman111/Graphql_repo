import { useGetclient } from "../hooks/useGetclient";

const Getclient = (): JSX.Element => {
  const { data, error, loading } = useGetclient();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  console.log("Rendering component");
  return (
    <div>
      {data?.clients?.length > 0 &&
        data?.clients?.map((d) => (
          <div key={d?.id}>
            <h1>{d?.id}</h1>
            <h1>{d?.email}</h1>
            <h1>{d?.phone}</h1>
          </div>
        ))}
    </div>
  );
};

export default Getclient;
