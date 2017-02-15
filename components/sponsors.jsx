import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: '../pictures/FB-Banner-Final.jpg',
    title: 'Sponsor 1',
    //author: 'jill111',
  },
  {
    img: '../pictures/FB-Banner-Final.jpg',
    title: 'Sponsor 2',
  }
]

const Sponsors = () => (
	<div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList} >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.title}
          title={tile.title}
          //subtitle={<span>by <b>{tile.author}</b></span>}
          //actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
)

export default Sponsors;