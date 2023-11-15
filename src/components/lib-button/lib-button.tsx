import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'lib-button',
  styleUrl: './style/lib-button.scss',
  scoped: true,
  //shadow: true,
})
export class LibButton {
  @Prop() btnType: string; // primary, secondary, neutral
  @Prop() btnSize: string; // small, medium, large
  @Prop() btnCategory: string; // filled, ghost, borderless
  @Prop() disabled: boolean; // true, false
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
    let varClass: string = '';
    switch (this.btnType) {
      case 'primary':
        varClass = 'btnPrimary';
        break;
      case 'secondary':
        varClass = 'btnSecondary';
        break;
      case 'neutral':
        varClass = 'btnNeutral';
        break;
      default:
        varClass = 'btnPrimary';
        break;
    }
    switch (this.btnCategory) {
      case 'filled':
        varClass += ' --filled';
        break;
      case 'ghost':
        varClass += '--ghost';
        break;
      case 'borderless':
        varClass += '--borderless';
        break;
      case 'round':
        varClass += '--round';
        break;
      default:
        varClass += '--filled';
        break;
    }
    switch (this.btnSize) {
      case 'small':
        varClass += 'Small';
        break;
      case 'medium':
        varClass += 'Medium';
        break;
      case 'large':
        varClass += 'Large';
        break;
      default:
        varClass += 'Medium';
        break;
    }

    this.btnClass = varClass;
  }
}
