import { createSelector } from "reselect";

const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const usersSelector = (state) => state.users;

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (products, order) => {
    return Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }));
  }
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

export const amountSelector = (state, ownProps) =>
  state.order[ownProps.id] || 0;

export const restaurantsSelector = (state) => state.restaurants;

export const averageRatingSelector = (state, ownProps) => {
  const restaurantReviews = ownProps?.restaurant?.reviews;

  const total = restaurantReviews.reduce(
    (acc, id) => acc + state.reviews[id].rating,
    0
  );
  return Math.round(total / restaurantReviews.length);
};

export const reviewSelector = (state, ownProps) => state.reviews[ownProps.id];

export const userSelector = createSelector(
  usersSelector,
  reviewSelector,
  (users, review) => {
    return users[review.userId];
  }
);
