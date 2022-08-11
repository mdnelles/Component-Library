# React Typescript Cuboid Builder

This project allows a user to create Cuboids of any size simply by entering a set of parameters.  
The program does the leg work with regard to calculating translationZ depth and config on the fly.

-   [GIT HOME](https://github.com/mdnelles/anim-3d-objs-launcher)
-   [NPM HOME](https://www.npmjs.com/package/anim-3d-obj) npm i anim-3d-obj

## Examples

-   [6 sided Cuboid - animate X360 Y360](https://codesandbox.io/s/anim-3d-obj-all-sides-simple-bf67yg)
-   [3 sided Object - animate y-axis](https://codesandbox.io/s/anim-3d-obj-3-sides-wobble-y-axis-wglkms)
-   [Double box spin](https://codesandbox.io/s/react-anim-3d-double-box-spin-vbdhg2)
-   [2 sided object with animation wobble](https://codesandbox.io/s/anim-3d-obj-wobblex-mmidkg)
-   [Parallel divs animated x and y axis in tandem](https://codesandbox.io/s/anim-3d-obj-2-sides-simple-4057y7)
-   [Spinning Slab](https://codesandbox.io/s/react-anim-3d-pulse-kc8g0f)

## Config

Animations are optional. Either or both of `anim1Specs` or `anim2Specs` can be applied to the object.

```typescript
const anim1Specs: object = {
    border: '', // while testing reveal the animation wrapper
    degreesHi: -45, // degrees if spin
    degreesLow: 45, // degrees if spin
    delay: 0, // start delay in seconds
    direction: 'normal', //normal alternating reverse
    duration: 8, // seconds
    fillMode: 'forwards', // node forwards backwards both
    iterationCount: 'infinite', // number or infinte
    name: 'Y360', // ** ANIMATIONS
    timing: 'ease-in-out' // linear ease ease-in-out
};
```

`** ANIMATIONS`

-   X360: rotate 360 degrees on the x-axis
-   Y360: rotate 360 degrees on the y-axis
-   fadeInkf: fade object in from 0 to 1 Opacity
-   wobY: wobble on y-axis (degreesHi <-> degreesLow)
-   wobX: wobble on x-axis (degreesHi <-> degreesLow)
-   fwdx018: spin object on x-axis from 0 degrees to 180 degrees
-   fwdx1836: spin object on x-axis from 180 degrees to 360 degrees
-   fwdx09: spin object on x-axis from 0 degrees to 90 degrees
-   fwdx918: spin object on x-axis from 90 degrees to 180 degrees
-   fwdx1827: spin object on x-axis from 180 degrees to 270 degrees
-   fwdx2736: spin object on x-axis from 270 degrees to 360 degrees
-   fwdy018: spin object on y-axis from 0 degrees to 180 degrees
-   fwdy1836: spin object on y-axis from 180 degrees to 360 degrees
-   fwdy09: spin object on y-axis from 0 degrees to 90 degrees
-   fwdy918: spin object on y-axis from 90 degrees to 180 degrees
-   fwdy1827: spin object on y-axis from 180 degrees to 270 degrees
-   fwdy2736: spin object on y-axis from 270 degrees to 360 degrees
-   floatX: float object so is not stationary
-   floatShadow: float object + add shadow
-   pulseSM: pulse object Small
-   pulseMD: pulse object Medium
-   pulseLG: pulse object Large
-   noAnim: no animation place holder

<>

GLOBAL CONFIG

```typescript
// EXAMPLE GLOBAL FACE CONFIG
// This will be applied to all Faces that do not have their own custom config
const global: object = {
    // // face individual styles (over rides global)
    css: `
         border: 1px solid #fff;
         background: rgb(2,0,36);
         background: linear-gradient(180deg, rgba(255,255,255,.1) 0%, rgba(141,191,249,.7) 100%);
         color:white;
         text-align:center;
         line-height:10;
         backface-visibility: visible;
         font-family: Arial, Helvetica, sans-serif;
         border-radius:5px;
         `,
    body: ' '
};
```

<>

CUSTOM CONFIG FOR INDIVIDUAL FACES

```typescript
const custom: object = {
      // // face individual styles (over rides global)
      front: {
         css: ``,
         body: <Login />,
      },
      left: {
         css: `
         border: 1px solid #fff;
         background: rgb(2,0,36);
         color:white;
         text-align: center;
         line-height:8;`
         body: " ",
      },
      right: {
         css: ``,
         body: " ",
      },
      back: {
         css: ``,
         body: <Logout />,
      },
      bottom: {
         css: `
         background-color:rgba(141,191,249,1);
         -webkit-box-shadow: 0px 0px 23px 18px #858585;
         box-shadow: 0px 0px 23px 18px #858585;
         `,
      },
```

## Render

and

```typescript
<Cuboid
    width={250}
    height={300}
    depth={250}
    perspective={800}
    perspectiveOrigin="50% 50%"
    zIndex={10}
    anim1Specs={anim1Specs}
    anim2Specs={anim2Specs}
    custom={custom}
    faces={faceprops}
    global={global}
/>
```

will produce the following

![Logo](https://raw.githubusercontent.com/mdnelles/objs-local/main/img.png?token=GHSAT0AAAAAABQVNJ4VATWQM4SI3LXSTDZWYVDOL7Q)

## Authors

-   [@mdnelles](https://github.com/mdnelles)

## License

[MIT](https://choosealicense.com/licenses/mit/)
