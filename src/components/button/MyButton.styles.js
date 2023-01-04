import { makeStyles } from "@material-ui/styles"

import { green } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '20%',
    left: "55%",
    margintTop: -25,
    marginLeft: -23,
  },
}))

export default useStyles