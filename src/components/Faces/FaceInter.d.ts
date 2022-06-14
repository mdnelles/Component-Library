export interface FaceProps {
    bfv?: string | boolean;
    bgc?: string | boolean;
    border?: string | boolean;
    children?: any;
    faceType?: any;
    globalStyles?: any;
    fontFamily?: string | any;
    depth?: number | any;
    height?: number | string;
    id?: string | number | boolean;
    indivStyles?: object | any;
    left?: number;
    margin?: number | string;
    opac?: number | string | boolean | undefined;
    padding?: number | string;
    position?: number;
    top?: number;
    tranz: any;
    width?: number | string;
}

export interface CuboidProps {
    animSpecs?:
        | {
              anim1?: string | undefined;
              anim1duration?: string | undefined;
              anim1low?: number | undefined; // rotation degrees
              anim1hi?: number | undefined; // rotation degrees
              anim1count?: number | string | undefined;
              anim2?: string | undefined;
              anim2duration?: string | undefined;
              anim2hi?: number | undefined; // rotation degrees
              anim2low?: number | undefined; // rotation degrees
              anim2count?: number | string | undefined;
              anim1direction?: string | undefined;
              anim2direction?: string | undefined;
          }
        | undefined;
    children: any;
    depth?: number;
    globalStyles?: { border?: string; bgc?: string; opac?: number | string } | any;
    faces?:
        | {
              front: boolean;
              back: boolean;
              left: boolean;
              right: boolean;
              top: boolean;
              bottom: boolean;
          }
        | undefined;

    height?: number | string;
    indivStyles?: object | string | undefined;
    perspectiveOrigin?: string | undefined;
    tranz?: number | undefined;
    width?: number;
    zIndex?: number | undefined;
}

export interface VarsProps {
    bfv?: string | any;
    bgc?: string | any;
    border?: string | any;
    opac?: string | any;
    fontFamily?: string | any;
}
