import { Route, Routes, Navigate } from "react-router";
import AuthSystem from "./pages/AuthSystem";
import Blog from "./pages/Blog";
import { useValueContext } from "./component/Context";

const App = () => {
  const { token } = useValueContext();

  return (
    <div className="">
      <Routes>
        {/* Public Auth Route */}
        <Route path="/auth" element={<AuthSystem />} />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={token ? <Blog token={token} /> : <Navigate to="/auth" />}
        />

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to={token ? "/dashboard" : "/auth"} />} />
      </Routes>
    </div>
  );
};

export default App;