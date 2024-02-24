import AuthProvider from "./context/AuthProvider";
import { Router } from "./routes";

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
