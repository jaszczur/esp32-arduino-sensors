import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
      minWidth: "150px",
      flexGrow: 1,
      overflow: "auto",
      flexDirection: "column",
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
    fixedHeight: {
      height: 240,
    },
  })
);

export default useStyles;
