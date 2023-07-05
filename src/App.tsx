import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function App(): JSX.Element {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.data;
      return data;
    },
    // The query will not execute until the userId exists (Dependent Queries)
    // enabled: !!userId,
  });

  if (postQuery.isLoading) return <h1>Loading....</h1>;
  if (postQuery.isError) return <h1>Error loading data!!!</h1>;

  return (
    <div style={{ border: "1px red solid" }}>
      <h1>Home</h1>
      {postQuery.data.map((item: any) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default App;
