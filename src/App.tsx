import React, { Component } from 'react';

import productData from './ProductData';
import WatchImage from './WatchImage';

import classes from './App.module.css';

class App extends Component {
  state = {
    currentImagePos: 0,
    currentFeaturePos: 0,
  }

  productData = productData;

  variantClick(pos: number) {
    this.setState({ currentImagePos: pos });
  }

  featureClick(pos: number) {
    this.setState({ currentFeaturePos: pos })
  }

  render() {
    const variantsHTML = this.productData.colorOptions.map((colorOption, pos) => {
      return (
        <div
          className={ `${classes.variant} ${this.state.currentImagePos === pos ? classes.active : ''}` }
          onClick={ this.variantClick.bind(this, pos) }
          key={ colorOption.id }
        >
          <img src={ colorOption.imageUrl } alt=""/>
        </div>
      );
    });

    const featuresHTML = this.productData.featureList.map((feature, pos) => {
      return (
        <button
          className={ `${classes.feature_btn} ${classes.btn} ${this.state.currentFeaturePos === pos ? classes.active : ''}` }
          key={ feature }
          onClick={this.featureClick.bind(this, pos)}
        >
          { feature }
        </button>
      )
    })

    return (
      <div className={ classes.App }>
        <div className={ classes.wrapper }>
          <div className={ classes.left_block }>
            <WatchImage
              imageUrl = { this.productData.colorOptions[this.state.currentImagePos].imageUrl }
              feature = { this.productData.featureList[this.state.currentFeaturePos] }
            />
          </div>

          <div className={ classes.right_block }>
            <h1 className={ classes.title }>{ this.productData.title }</h1>
            <p className={ classes.description }>{ this.productData.description }</p>

            <h2 className={ classes.select_color }>Select color</h2>
            <div className={ classes.variants }>
              { variantsHTML }
            </div>

            <h2 className={ classes.select_feature }>Select feature</h2>
            <div className={ classes.features}>
              { featuresHTML }
            </div>

            <button className={ `${classes.buy_btn} ${classes.btn}` }>Buy now</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
