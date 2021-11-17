import map from 'lodash/map';
import orderBy from 'lodash/orderBy';

export const _map = (array: any, callback: any) => map(array, callback);

export const _orderBy = (collection: any, iteratees = [], orders = []) =>
  orderBy(collection, iteratees, orders);
