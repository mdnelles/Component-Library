# React Typescript Cuboid Builder

This project allows a user to create Cuboids of any size simply by entering a set of parameters.  
The program does the leg work with regard to calculating translationZ depth and config on the fly.

## Deployment

`npm i anim-3d-obj` https://www.npmjs.com/package/anim-3d-obj

## Examples

All sided simple https://codesandbox.io/s/anim-3d-obj-all-sides-simple-sdy1q0 Two sided simple https://codesandbox.io/s/anim-3d-obj-2-sides-simple-9wognm 90 degree wobble on X axis
https://codesandbox.io/s/anim-3d-obj-wobblex-08mxqe speed wobble(y) 3 sides https://codesandbox.io/s/anim-3d-obj-3-sides-wobble-y-axis-dceqdp

## Authors

-   [@mdnelles](https://github.com/mdnelles)

## Demo

The following code

```
const global: object = {
      // // face individual styles (over rides global)
      css: `
         border: 1px solid #00f;
         background-color: black;
         color:white;
         opacity: 0.7;
         backface-visibility: visible;
         font-family: Arial, Helvetica, sans-serif;
         `,
      body: "Hi I am global",
   };
   ...
   front: {
         css: `
         border: 1px solid #00f;
         background-color: red;
         opacity: 0.7;
         color:white;
         fontFace:sans;
         backface-visibility: visible;
         font-family: Arial, Helvetica, sans-serif;
         fontFamily: Cochin;

         `,
         body: "BOTTOM",
      },
```

and

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

will produce the following

![Logo](https://raw.githubusercontent.com/mdnelles/objs-local/main/img.png?token=GHSAT0AAAAAABQVNJ4VATWQM4SI3LXSTDZWYVDOL7Q)

##Face Format for things like `background-image: url("myImg.png");` they can be done in `moreStyles` argument.

```
   const Specs: any = styled.div`
      opacity: ${!!opac ? opac : globalStyles.opac};
      position: ${position};
      left: ${left};
      margin: ${margin};
      padding: ${padding};
      width: ${width}px;
      font-family: ${fontFamily};
      height: ${height}px;
      background-color: ${!!bgc ? bgc : globalStyles.bgc};
      border: ${!!border ? border : globalStyles.border};
      backface-visibility: ${!!bfv ? bfv : globalStyles.bfv};
      ${transform}
      top: ${top};
      ${moreStyles}
   `;
```

## keywords

React CSS style animation cube cuboid 3D webGL
