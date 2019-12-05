/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface RadialCrispr {
    'diagonal': number;
    'dic_sgrna': string;
    'max_occ': number;
    'sgrna': string;
    'sgrna_json': {};
    'step_radial': string;
  }
}

declare global {


  interface HTMLRadialCrisprElement extends Components.RadialCrispr, HTMLStencilElement {}
  var HTMLRadialCrisprElement: {
    prototype: HTMLRadialCrisprElement;
    new (): HTMLRadialCrisprElement;
  };
  interface HTMLElementTagNameMap {
    'radial-crispr': HTMLRadialCrisprElement;
  }
}

declare namespace LocalJSX {
  interface RadialCrispr {
    'diagonal'?: number;
    'dic_sgrna'?: string;
    'max_occ'?: number;
    'sgrna'?: string;
    'sgrna_json'?: {};
    'step_radial'?: string;
  }

  interface IntrinsicElements {
    'radial-crispr': RadialCrispr;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'radial-crispr': LocalJSX.RadialCrispr & JSXBase.HTMLAttributes<HTMLRadialCrisprElement>;
    }
  }
}


