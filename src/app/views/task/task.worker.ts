import { Item } from './item';

addEventListener('message', ({ data: length }) => {
  if (!length) length = 0;
  console.log('--------------------');
  console.log('Started, length: ', length);
  const date = +new Date();
  const items = Array.from({ length }).map(() => new Item());
  console.log('Finished, items: ', items);
  console.log('Working time, ms: ', +new Date() - date);
  postMessage(items);
});
