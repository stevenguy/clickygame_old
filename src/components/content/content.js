import React from "react";
import "./content.css";
import Card from '@material-ui/core/Card';
import CardArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardImage from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const Content = props => (
  <Grid item xs={6} md={4}>
    <Card 
    onClick={() => props.handleSelect(props.id)}
    className="card" >
    <CardArea>
      <CardContent>
      <CardImage
        className="img"
        image={props.image}
      />
      </CardContent>
    </CardArea>
  </Card>
  </Grid> 
)

export default Content;
