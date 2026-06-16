import axios, { AxiosResponse } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export function Fetch() {
  const fetchData = async () => {
    try {
      const response: AxiosResponse<Todo[]> = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <button onClick={fetchData}>
      Fetch Data
    </button>
  );
}