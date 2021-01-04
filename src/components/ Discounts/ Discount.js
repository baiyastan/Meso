import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  div: {
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: '20px',
  },
});

export default function Discount() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const numbers = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13];

  return (
    <div className={classes.div}>
    {numbers.map((todo)=>(
      
    <Card item xs={12} sm={6} md={4} className={classes.root}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="h2">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        adjective
      </Typography>
      <Typography variant="body2" component="p">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
    ))}
    </div>
  );
}