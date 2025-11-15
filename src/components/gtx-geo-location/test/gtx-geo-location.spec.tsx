import { newSpecPage } from '@stencil/core/testing';
import { GtxGeoLocation } from '../gtx-geo-location';

describe('gtx-geo-location', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GtxGeoLocation],
      html: `<gtx-geo-location></gtx-geo-location>`,
    });
    expect(page.root).toEqualHtml(`
      <gtx-geo-location>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gtx-geo-location>
    `);
  });
});
