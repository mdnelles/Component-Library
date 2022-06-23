
# React Typescript Cuboid Builder

This project allows a user to create Cuboids of any size simply by entering a set of parameters.  
The program does the leg work with regard to calculating translationZ depth and config on the fly.



## Deployment

Install sequence

```
git clone https://github.com/mdnelles/anim-3d-objs.git
npm i
npm run start
```

## Examples
All sided simple https://codesandbox.io/s/anim-3d-obj-all-sides-simple-sdy1q0

Two sided simple https://codesandbox.io/s/anim-3d-obj-2-sides-simple-9wognm

90 degree wobble on X axis https://codesandbox.io/s/anim-3d-obj-wobblex-08mxqe

speed wobble(y) 3 sides https://codesandbox.io/s/anim-3d-obj-3-sides-wobble-y-axis-dceqdp

## Authors

- [@mdnelles](https://github.com/mdnelles)


## Demo

The following code

```
const indivStyles: object = {
      // // face individual styles (over rides global)
      bottom: {
         bfv: "visible",
         fontFamily: "Helvetica",
      },
      front: {
         border: "1px solid #f00",
         bgc: "#f00",
         bfv: "visible",
         fontFamily: "Arial, Sans",
      },
      left: {
         bgc: "yellow",
      },
      top: {
         bgc: "pink",
      },
      right: {
         bgc: "purple",
      },
      back: {
         border: "1px solid #f00",
         bgc: "#0f0",
         bfv: "visible",
         fontFamily: "Arial, Sans",
      },
   };
```

and 
```
         <Cuboid
            width={260}
            depth={260}
            height={92}
            perspectiveOrigin='50% 50%'
            zIndex={10}
            animSpecs={animSpecs}
            indivStyles={indivStyles}
            faces={faceprops}
            globalStyles={globalStyles}
         >
            {}
         </Cuboid>
```

will produce the following

![Logo](https://raw.githubusercontent.com/mdnelles/objs-local/main/img.png?token=GHSAT0AAAAAABQVNJ4VATWQM4SI3LXSTDZWYVDOL7Q)

##Face Format
for things like `background-image: url("myImg.png");` they can be done in `moreStyles` argument.
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
