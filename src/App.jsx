import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import IndexRoutes from "./routes/Index";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IndexRoutes />
    </QueryClientProvider>
  );
}

export default App;
