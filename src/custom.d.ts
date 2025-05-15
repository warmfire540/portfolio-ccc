declare module '*.svg' {
    import * as React from 'react';
  
    // This line declares the 'ReactComponent' export which is used by `@svgr/webpack`
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  
    // This line declares the default export, which is often the data URL of the SVG
    const src: string;
    export default src;
  }