import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'lib-button',
  styleUrl: './style/lib-button.scss',
  scoped: true,
  //shadow: true,
})
export class LibButton {
  @Prop() btnType: string;
  @Prop() btnSize: string;
  @Prop() disabled: boolean;
  btnClass: string;

  render() {
    this.selectionClass();
    return (
      <Host>
        <button type="button" class={this.btnClass} disabled={this.disabled}>
          <slot></slot>
        </button>
      </Host>
    );
  }

  selectionClass() {
    switch (this.btnType) {
      case 'primary':
        switch (this.btnSize) {
          case 'small':
            this.btnClass = 'btnPrimary--small';
            break;
          case 'medium':
            this.btnClass = 'btnPrimary--medium';
            break;
          default:
            this.btnClass = 'btnPrimary';
            break;
        }
        break;
      case 'secondary':
        switch (this.btnSize) {
          case 'small':
            this.btnClass = 'btnSecondary--small';
            break;
          case 'medium':
            this.btnClass = 'btnSecondary--medium';
            break;
          default:
            this.btnClass = 'btnSecondary';
            break;
        }
        break;
      case 'neutral':
        switch (this.btnSize) {
          case 'small':
            this.btnClass = 'btnNeutral--small';
            break;
          case 'medium':
            this.btnClass = 'btnNeutral--medium';
            break;
          default:
            this.btnClass = 'btnNeutral';
            break;
        }
        break;
      default:
        this.btnClass = 'btnPrimary';
        break;
    }
  }
}
