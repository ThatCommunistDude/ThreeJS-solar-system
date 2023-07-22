import { WebGLRenderer } from "https://unpkg.com/three@0.141.0/build/three.module.js" ;

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true}) ;

  // turn on the physically correct lighting model
  renderer.useLegacyLights = true;

  return renderer ;
}

export { createRenderer } ;