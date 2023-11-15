import { newE2EPage } from '@stencil/core/testing';

describe('lib-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lib-button></lib-button>');

    const element = await page.find('lib-button');
    expect(element).toHaveClass('hydrated');
  });
});
