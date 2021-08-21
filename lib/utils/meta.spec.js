import { routeMeta } from './meta';

jest.mock('../data/meta');

describe('routeMeta', () => {
  const FAKE_PATH = '/some-fake-path';
  const INDEX_PATH = '/index';
  const PAGE_PATH = '/blog';
  const SLUG_PATH = '/blog/some-blob-title';
  const SLUG_TITLE = 'some title';
  const SLUG_DESCRIPTION = 'some description';
  const SLUG_TW_DESCRIPTION = 'some tw description';
  const DOMAIN = 'https://www.samanthaming.com';
  const IMAGE_PATH = `${DOMAIN}/_ipx/img`;
  const SITE_IMAGE = `${IMAGE_PATH}/app/samantha-ming-logo.svg`;

  const callRouteMeta = (route, article) => routeMeta(route, article);

  describe('home and default page', () => {
    describe.each`
      page              | route
      ${'default page'} | ${{ name: 'fake', path: FAKE_PATH }}
      ${'home page'}    | ${{ name: 'index', path: INDEX_PATH }}
    `('$page', ({ route }) => {
      it('returns correct head object', () => {
        expect(callRouteMeta(route)).toMatchObject({
          title: 'SamanthaMing.com',
          meta: expect.any(Array),
        });
      });

      it('does not append domain to title', () => {
        const { title } = callRouteMeta(route);

        expect(title).toEqual('SamanthaMing.com');
      });

      it('returns site image', () => {
        const content = SITE_IMAGE;
        expect(callRouteMeta(route).meta).toEqual(
          expect.arrayContaining([
            expect.objectContaining(
              { hid: 'og:image', content },
              { hid: 'twitter:image', content },
            ),
          ]),
        );
      });
    });
  });

  describe('default page', () => {
    const route = { name: 'fake', path: FAKE_PATH };

    it('returns correct url meta', () => {
      expect(callRouteMeta(route).meta).toEqual(
        expect.arrayContaining([
          expect.objectContaining(
            {
              property: 'og:url',
              content: DOMAIN + FAKE_PATH,
            },
            {
              property: 'twitter:url',
              content: DOMAIN + FAKE_PATH,
            },
          ),
        ]),
      );
    });
  });

  describe('home page', () => {
    const route = { name: 'index', path: INDEX_PATH };

    it('returns correct url meta', () => {
      expect(callRouteMeta(route).meta).toEqual(
        expect.arrayContaining([
          expect.objectContaining(
            {
              property: 'og:url',
              content: DOMAIN + INDEX_PATH,
            },
            {
              property: 'twitter:url',
              content: DOMAIN + INDEX_PATH,
            },
          ),
        ]),
      );
    });
  });

  describe('parent page', () => {
    const route = {
      name: 'blog',
      path: PAGE_PATH,
    };

    it('appends domain to title', () => {
      const { title } = callRouteMeta(route);

      expect(title).toEqual('Blog | SamanthaMing.com');
    });

    it('adds hid property', () => {
      expect(callRouteMeta(route).meta).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            hid: 'og:title',
          }),
        ]),
      );
    });
  });

  describe('slug page', () => {
    const blogRouteMetaParams = [
      { name: 'blog-slug', path: SLUG_PATH },
      {
        title: SLUG_TITLE,
        description: SLUG_DESCRIPTION,
        twDescription: SLUG_TW_DESCRIPTION,
      },
    ];

    const tidbitRouteMetaParams = [
      { name: 'tidbit-slug', path: SLUG_PATH },
      {
        title: SLUG_TITLE,
        description: SLUG_DESCRIPTION,
        twDescription: SLUG_TW_DESCRIPTION,
      },
    ];

    it('does not append domain to title', () => {
      const { title } = callRouteMeta(...blogRouteMetaParams);

      expect(title).toEqual(SLUG_TITLE);
    });

    it('returns correct url meta', () => {
      expect(callRouteMeta(...blogRouteMetaParams).meta).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            content: DOMAIN + SLUG_PATH,
          }),
        ]),
      );
    });

    it('returns article twitter description', () => {
      expect(callRouteMeta(...blogRouteMetaParams).meta).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            content: SLUG_TW_DESCRIPTION,
            hid: 'twitter:description',
            name: 'twitter:description',
          }),
        ]),
      );
    });

    it('does not return site image', () => {
      const content = SITE_IMAGE;

      expect(callRouteMeta(...blogRouteMetaParams).meta).not.toEqual(
        expect.arrayContaining([
          expect.objectContaining(
            { hid: 'og:image', content },
            { hid: 'twitter:image', content },
          ),
        ]),
      );
    });

    it('return slug image for blog page', () => {
      const imageSize = 500;
      const content = `${IMAGE_PATH}${SLUG_PATH}.jpg?s=${imageSize}`;

      expect(callRouteMeta(...blogRouteMetaParams).meta).toEqual(
        expect.arrayContaining([
          expect.objectContaining(
            { hid: 'og:image', content },
            { hid: 'twitter:image', content },
          ),
        ]),
      );
    });

    it('return slug image for tidbit page', () => {
      const imageSize = 400;
      const content = `${IMAGE_PATH}${SLUG_PATH}.jpg?s=${imageSize}`;

      expect(callRouteMeta(...tidbitRouteMetaParams).meta).toEqual(
        expect.arrayContaining([
          expect.objectContaining(
            { hid: 'og:image', content },
            { hid: 'twitter:image', content },
          ),
        ]),
      );
    });
  });
});
