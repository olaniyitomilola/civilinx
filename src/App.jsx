import Layout from "./layout/Layout";
import AppRoutes from "./routes/AppRoutes";
import './index.css'; // Assuming you have a global CSS file
import { ThemeProvider } from "@material-tailwind/react";
function App() {
  return (
    <ThemeProvider>
            <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
