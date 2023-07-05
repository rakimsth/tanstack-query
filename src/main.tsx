import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AddPost from "./AddPost.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* Basic Tanstack query with refetch Option */}
      <App />
      {/* The useMutation hook is a powerful tool in the React Query library. 
      It performs asynchronous operation mutations, such as creating or updating data on a server. 
      Using the useMutation hook, we can easily update your application state and user interface based on the response of the mutation. */}
      <AddPost />
    </QueryClientProvider>
  </React.StrictMode>
);
