import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockRoundedIcon from "@mui/icons-material/LockRounded";

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await api.post("register/", {
        username,
        email,
        password,
      });

      alert("Account Created Successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Signup Failed");
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
          width: 430,
          p: 2,
          borderRadius: 5,

          background: "rgba(18,20,30,.75)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,.08)",
          boxShadow: "0 20px 60px rgba(0,0,0,.45)",

          color: "white",
        }}
      >
        <CardContent>
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
              Create Account
            </Typography>

            <Typography sx={{ color: "gray", mt: 1, mb: 3 }}>
              Signup to continue
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
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={inputStyles}
          />

          <TextField
            fullWidth
            label="Password"
            margin="normal"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={inputStyles}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
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

          <Button
            fullWidth
            variant="contained"
            onClick={handleSignup}
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
            Create Account
          </Button>

          <Typography sx={{ mt: 3, textAlign: "center", color: "gray" }}>
            Already have an account?{" "}
            <span
              style={{
                color: "#A855F7",
                cursor: "pointer",
                fontWeight: 700,
              }}
              onClick={() => navigate("/")}
            >
              Login
            </span>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}