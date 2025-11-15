import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'gtx-geo-location',
  styleUrl: 'gtx-geo-location.css',
  shadow: true,
})
export class GtxGeoLocation {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
