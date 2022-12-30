import { makeStyles } from '@material-ui/core/styles'

import { 
  Card, 
  CardHeader, 
  CardActions, 
  Avatar, 
  IconButton 
} from '@material-ui/core/'

import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}))

const CustomerCard = ({
  name,
  lastname,
  email,
  avatar,
}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={avatar}>
            R
          </Avatar>
        }
        title={`${name} ${lastname}`}
        subheader={email}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default CustomerCard  