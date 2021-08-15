import { routeMeta } from './meta';

jest.mock('../data/meta');

describe('routeMeta', () => {
  const INDEX_PATH = '/index';
  const PAGE_PATH = '/blog';
  const SLUG_PATH = '/blog/some-blob-title';
  const SLUG_TITLE = 'some title';
  const SLUG_DESCRIPTION = 'some description';
  const SLUG_TW_DESCRIPTION = 'some tw description';
  const DOMAIN = 'https://www.samanthaming.com';

  describe('index page', () => {
    const callRouteMeta = () => routeMeta({ name: 'index', path: INDEX_PATH });

    it('returns correct head object', () => {
      expect(callRouteMeta()).toMatchObject({
        title: 'SamanthaMing.com',
        meta: expect.any(Array),
      });
    });

    it('does not append domain to title', () => {
      const { title } = callRouteMeta();

      expect(title).toEqual('SamanthaMing.com');
    });

    it('returns correct url meta', () => {
      expect(callRouteMeta().meta).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            content: DOMAIN + INDEX_PATH,
          }),
        ]),
      );
    });
  });

  describe('non index page', () => {
    const callRouteMeta = () =>
      routeMeta({
        name: 'blog',
        path: PAGE_PATH,
      });

    it('appends domain to title', () => {
      const { title } = callRouteMeta();

      expect(title).toEqual('Blog | SamanthaMing.com');
    });

    it('adds hid property', () => {
      expect(callRouteMeta().meta).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            hid: 'og:title',
          }),
        ]),
      );
    });
  });

  describe('slug page', () => {
    const callRouteMeta = () =>
      routeMeta(
        { name: 'blog-slug', path: SLUG_PATH },
        {
          title: SLUG_TITLE,
          description: SLUG_DESCRIPTION,
          twDescription: SLUG_TW_DESCRIPTION,
        },
      );

    it('does not append domain to title', () => {
      const { title } = callRouteMeta();

      expect(title).toEqual(SLUG_TITLE);
    });

    it('returns correct url meta', () => {
      expect(callRouteMeta().meta).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            content: DOMAIN + SLUG_PATH,
          }),
        ]),
      );
    });

    it('returns article twitter description', () => {
      expect(callRouteMeta().meta).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            content: SLUG_TW_DESCRIPTION,
            hid: 'twitter:description',
            name: 'twitter:description',
          }),
        ]),
      );
    });
  });
});
