import sleep from '../utils/sleep';

import orderList from './mock/order-list';

const mapOrder = order => {
  const { id, name, type } = order;

  return {
    id,
    name,
    type
  };
};


export const fetchOrders = async () => {
  await sleep(500);

  return orderList.results.map(mapOrder);
};