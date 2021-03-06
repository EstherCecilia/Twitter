import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ title, descriptopn, date }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{ marginTop: "50px", marginBottom: "50px", width: "600px" }}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>

        <Typography variant="body2" component="p">
          {descriptopn}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
}
