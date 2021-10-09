import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    background: "#84a59d",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    height: "100vh",
  },
  title: {
    fontWeight: "bold",
    color: "#f7ede2",
    fontSize:"1.5em"
  },
  clockEmoji: {
    fontSize:"2em",
    textAlign:"center",
    marginTop: 0
  },
  switch:{
    display:"flex",
    flexDirection:'row',
    justifyContent:'center',
    color:"white",
    fontSize:"1.2em"
  }
});
