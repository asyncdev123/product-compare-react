import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Compare, ProductList, SortToggle} from '../../components'
import * as productActions from '../../actions/product'
import {connect} from 'react-redux'

class Home extends Component {
  componentWillMount() {
    this.props.actions.getProducts()
  }

  render() {
    const {products, actions, sortOrder} = this.props;
    const compareProducts = products.filter(product => product.compare);

    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Compare Products</h2>
          </div>
        </div>
        <SortToggle sortOrder={sortOrder} toggleSort={actions.togglePriceSort} />
        <ProductList products={products} compare={actions.compare}/>
        {compareProducts.length >= 2 &&
          <Compare products={compareProducts}/>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    products: state.product.products,
    sortOrder: state.product.sortOrder
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(Home)
