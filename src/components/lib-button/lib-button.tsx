import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lib-button',
  styleUrl: 'lib-button.css',
  shadow: true,
})
export class LibButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
