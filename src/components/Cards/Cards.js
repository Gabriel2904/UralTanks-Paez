import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import logo from "./../../logo.svg";
import "./Cards.css";

export default function ActionAreaCard(name, description, img) {
  return (
    <Card className="container" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={logo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
