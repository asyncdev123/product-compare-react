import * as types from '../constants/types'

const INITIAL_STATE = {
  products: [],
  sortOrder: 'NONE'
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        sortOrder: 'NONE',
        products: action.payload.map(product =>
          ({...product, compare: false})
        )
      };
    case types.COMPARE_PRODUCT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.product.id ?
            ({...product, compare: !product.compare}) :
            product
        )
      };
    case types.TOGGLE_PRICE_SORT: {
      const newOrder = state.sortOrder === 'ASC' ? 'DESC' : 'ASC';
      const sorted = [...state.products].sort((a, b) => {
        const pa = parseFloat(a.price.replace('$', ''));
        const pb = parseFloat(b.price.replace('$', ''));
        return newOrder === 'ASC' ? pa - pb : pb - pa;
      });
      return { ...state, sortOrder: newOrder, products: sorted };
    }
    default:
      return state
  }
}
