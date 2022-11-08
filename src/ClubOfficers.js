import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import theme from "./theme";

const useStyles = makeStyles({
  pictures: {
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  container: {
    maxWidth: "700px",
    display: "inline-block",
  },
  title: {
    paddingTop: "20px",
    paddingBottom: "20px",
    fontSize: theme.typography.title.fontSize,
  },
  officer: {
    display: "inline",
  },
});

export default function ClubOfficers() {
  const classes = useStyles();
  return (
    <div className={classes.pictures}>
      <div className={classes.container}>
        <Typography className={classes.title} variant="h1">
          Club Officers
        </Typography>
        <Typography>Club President - Jane Collins</Typography>
        <img className={classes.image} src="/jane_president.jpg" alt="jane" />
        <br />
        <Typography>Club Chair - Lawrence Bland</Typography>
        <img
          className={classes.image}
          src="/LawrenceBlandSmall.jpg"
          alt="lawrenceb"
        />
        <br />
        <Typography>Club Secretary - Joss Waite</Typography>
        <img className={classes.image} src="/JossWaiteSmall.jpg" alt="jossw" />
        <br />
        <Typography>Club Treasurer - Iain Mcgibbon</Typography>
        <img className={classes.image} src="/iain_treasurer.jpg" alt="iainm" />
        <br />
        <Typography>External Events Coordinator - Richard</Typography>
        <img
          className={classes.image}
          src="/richard_events.jpg"
          alt="richard"
        />
        <br />
        <Typography>IT (website) Coordinator - Iain Walmsley</Typography>
        <img
          className={classes.image}
          src="/IainWalmsleySmall.jpg"
          alt="iainw"
        />
        <br />
        <Typography>IT (website) Coordinator - Dom Ginger</Typography>
        <img className={classes.image} src="/dom_web.jpg" alt="dom" />
        <br />
        <Typography>Club Media Officer - Dan Holden</Typography>
        <img className={classes.image} src="/DanHoldenSmall.jpg" alt="danh" />
        <br />
        <Typography>A Team Captain - Danny Mcmenamin</Typography>
        <img className={classes.image} src="/danny_a_team.jpg" alt="danny" />
        <br />
        <Typography>B Team "Dragons" Captain - Jonathan Verden</Typography>
        <img className={classes.image} src="/jon_b_team.jpg" alt="jon" />
        <br />
        <Typography>C Team "Marauders" Captain - Mike Williams</Typography>
        <img className={classes.image} src="/mike_c_team.jpg" alt="mike" />
      </div>
    </div>
  );
}
