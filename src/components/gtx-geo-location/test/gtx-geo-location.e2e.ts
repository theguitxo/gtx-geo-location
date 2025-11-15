import { newE2EPage } from '@stencil/core/testing';

describe('gtx-geo-location', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gtx-geo-location></gtx-geo-location>');

    const element = await page.find('gtx-geo-location');
    expect(element).toHaveClass('hydrated');
  });
});
