import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lib-button',
  styleUrl: './style/lib-button.scss',
  shadow: true,
})
export class LibButton {
  render() {
    return (
      <Host>
        <button type="button" class="btnSecondary">
          <slot></slot>
        </button>
      </Host>
    );
  }
}
