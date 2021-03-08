export default ({ isDev }, inject) => {
  const host = isDev ? 'http://localhost:3000' : 'https://www.samanthaming.com';

  inject('site', {
    host,
  });
};
