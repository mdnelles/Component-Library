# React Typescript Cuboid Builder

This project allows a user to create Cuboids of any size simply by entering a set of parameters.  
The program does the leg work with regard to calculating translationZ depth and config on the fly.

## Deployment

Install sequence

```
npm install anim-3d-objs
```

## Examples

All sided simple https://codesandbox.io/s/anim-3d-obj-all-sides-simple-sdy1q0

Two sided simple https://codesandbox.io/s/anim-3d-obj-2-sides-simple-9wognm

90 degree wobble on X axis https://codesandbox.io/s/anim-3d-obj-wobblex-08mxqe

speed wobble(y) 3 sides https://codesandbox.io/s/anim-3d-obj-3-sides-wobble-y-axis-dceqdp

## usage

```
         <Cuboid
            width={300}
            height={200}
            depth={100}
            perspectiveOrigin='50% 50%'
            zIndex={10}
            animSpecs={animSpecs}
            custom={custom}
            faces={faceprops}
            global={global}
         >
            {}
         </Cuboid>
```

example spec for global config and 6 sided cuboid

```
   const faceprops = {
      front: true,
      back: true,
      left: true,
      right: true,
      top: true,
      bottom: true,
   };

   const global: object = {
      // // face individual styles (over rides global)
      css: `
         border: 1px solid #00f;
         background-color: red;
         color:white;
         opacity: 0.9;
         backface-visibility: visible;
         font-family: Arial, Helvetica, sans-serif;
         `,
      body: "Hi I am global",
   };
   const animSpecs: object = {
      anim1: "Y360",
      anim2: "X360",
      anim1duration: 5,
      anim2duration: 23,
      anim1count: "infinite",
      anim1low: "-120",
      anim2hi: "120",
      anim2low: "-81",
      anim2count: "infinite",
      anim1direction: "normal",
      anim2direction: "normal",
   };

   const custom: object = {
      // // face individual styles (over rides global)
      bottom: {
         css: `
         border: 1px solid #00f;
         background-color: red;
         opacity: 0.9;
         color:white;
         fontFace:sans;
         line-
         backface-visibility: visible;
         font-family: Arial, Helvetica, sans-serif;
         fontFamily: Cochin;

         `,
         body: "BOTTOMs UP!",
      },
      front: {
         css: `
         border: 1px solid #00f;
         background-color: blue;
         opacity: 0.9;
         backface-visibility: visible;
         color:white;
         font-family: Arial, Helvetica, sans-serif;
         line-height:10;
         text-align:center;
         `,
         body: "FRONT FACING!",
      },
      left: {
         css: `
         border: 1px solid #00f;
         background-color: green;
         opacity: 0.9;
         backface-visibility: visible;
         color:white;
         font-family: Arial, Helvetica, sans-serif;
         line-height:10;
         text-align:center;
         `,
         body: "LEFTY",
      },
      top: {
         css: `
         border: 1px solid #00f;
         background-color: purple;
         opacity: 0.9;
         backface-visibility: visible;
         color:white;
         font-family: Arial, Helvetica, sans-serif;
         line-height:6;
         text-align:center;
         `,
         body: "TOP DAWG",
      },
      right: {
         css: `
         border: 1px solid #00f;
         background-color: orange;
         opacity: 0.9;
         backface-visibility: visible;
         color:blue;
         font-family: Arial, Helvetica, sans-serif;
         line-height:10;
         text-align:center;
         `,
         body: "RIGHT SIDE",
      },
      back: {},
   };
```

## Authors

-   [@mdnelles](https://github.com/mdnelles)

## Keywords

3d animate react css styles cuboid cube box spin
