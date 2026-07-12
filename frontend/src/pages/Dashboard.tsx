import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" sx={{ mb: 3 }}>
        Welcome to Dashboard 🎉
      </Typography>

      <Button variant="contained" color="error" onClick={logout}>
        Logout
      </Button>
    </Box>
  );
}