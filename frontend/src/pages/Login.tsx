import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockRoundedIcon from "@mui/icons-material/LockRounded";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post("login/", {
        username,
        password,
      });

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      navigate("/dashboard");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Invalid Username or Password");
    }
  };

  const inputStyles = {
    mb: 1,
    "& .MuiOutlinedInput-root": {
      color: "white",
      borderRadius: 2,
      background: "#161823",

      "& fieldset": {
        borderColor: "#2d3142",
      },

      "&:hover fieldset": {
        borderColor: "#7C3AED",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#A855F7",
      },
    },

    "& .MuiInputLabel-root": {
      color: "#999",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#A855F7",
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#0a0a0f",
        position: "relative",
        overflow: "hidden",

        backgroundImage: `
          linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",
          bgcolor: "#7c3aed",
          filter: "blur(180px)",
          opacity: 0.18,
          left: -120,
          top: "25%",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          bgcolor: "#2563eb",
          filter: "blur(150px)",
          opacity: 0.15,
          right: -80,
          bottom: -80,
        }}
      />

      <Card
        sx={{
          width: 420,
          borderRadius: 5,
          p: 2,

          background: "rgba(18,20,30,.75)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,.08)",
          boxShadow: "0 20px 60px rgba(0,0,0,.45)",

          color: "white",
        }}
      >
        <CardContent>
            <Box
  component="form"
  onSubmit={(e) => {
    e.preventDefault();
    handleLogin();
  }}
>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                width: 60,
                height: 60,
                mx: "auto",
                mb: 2,
                borderRadius: 3,

                background: "linear-gradient(135deg,#A855F7,#6D28D9)",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                boxShadow: "0 10px 30px rgba(124,58,237,.45)",
              }}
            >
              <LockRoundedIcon sx={{ color: "white", fontSize: 30 }} />
            </Box>

            <Typography
              variant="h4"
              sx={{ fontWeight: 700, fontSize: 28 }}
            >
              Welcome Back
            </Typography>

            <Typography sx={{ color: "gray", mt: 1, mb: 3 }}>
              Login to your account
            </Typography>
          </Box>

          <TextField
            fullWidth
            label="Username"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={inputStyles}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={inputStyles}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <VisibilityOff sx={{ color: "gray" }} />
                      ) : (
                        <Visibility sx={{ color: "gray" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <FormControlLabel
            control={<Checkbox sx={{ color: "#666" }} />}
            label={
              <Typography sx={{ fontSize: 13, color: "gray" }}>
                Remember Me
              </Typography>
            }
            sx={{ mt: 1 }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            
            sx={{
              mt: 3,
              py: 1.6,
              borderRadius: 2,

              fontWeight: 700,

              background: "linear-gradient(90deg,#7C3AED,#A855F7)",

              boxShadow: "0 10px 30px rgba(124,58,237,.4)",

              transition: ".3s",

              "&:hover": {
                transform: "translateY(-2px)",
                background: "linear-gradient(90deg,#6D28D9,#9333EA)",
              },
            }}
          >
            Login
          </Button>

          <Typography sx={{ textAlign: "center", color: "gray", mt: 3 }}>
  Don't have an account?{" "}
  <span
    onClick={() => navigate("/signup")}
    style={{
      color: "#A855F7",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    Sign Up
  </span>
</Typography>
</Box>
        </CardContent>
      </Card>
    </Box>
  );
}