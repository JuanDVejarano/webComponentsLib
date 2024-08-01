import { newSpecPage } from '@stencil/core/testing';
import { LibButton } from '../lib-button';

describe('lib-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LibButton],
      html: `<lib-button></lib-button>`,
    });
    expect(page.root).toEqualHtml(`
      <lib-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lib-button>
    `);
  });
});
