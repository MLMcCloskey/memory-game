import React, { Component } from 'react';
import Container from './Container';
import NavBar from './NavBar';
import Header from './Header';
import Counter from './Counter';
import Tile from './Tile';
import Footer from './Footer';
import Images from './Images';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
}

class Memory extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    chosen: false,
    score: 0
  };

  handleChosen(tile) {
    // console.log(this)
    if (tile.chosen === false) {
      this.setState({ score: this.state.score + 1 });
      tile.chosen = true;
      // console.log();
      if (this.state.score < 12) {
      shuffleArray(Images);
      } else { alert("You win!!"); }
    } else {
      alert("You LOSE Dumb-dumb! \n Try Again!");
      // Images.chosen = false;
      this.setState({ score: 0 });
      window.location.reload();
    }
  }


  render() {
    return (
      <div id="page">

        <NavBar score={this.state.score}>
          <Counter score="{this.state.score}" />
        </NavBar>

        <Container>

          <Header />

          <div id="tiles">
            {this.props.tiles.map(tile => {
              return <Tile
                key={tile.id}
                alt={tile.alt}
                src={tile.src}
                chosen={tile.chosen}
                onClick={() => this.handleChosen(tile)} />
            })}
          </div>

        </Container>
        <Footer />
      </div>
    )
  }
}

export default Memory;