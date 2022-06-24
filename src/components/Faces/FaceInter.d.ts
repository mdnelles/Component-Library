export interface FaceProps {
    children?: any;
    depth?: number | any;
    faceType?: any;
    custom?: any;
    global?: any;
    height?: number | string;
    id?: string | number | boolean;
    styles?: object | any;
    tranz: any;
    width?: number | string;
}

export interface ObjProps {
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
    global?: { border?: string; bgc?: string; opac?: number | string } | any;
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
    custom?: object | string | undefined;
    perspective?: string | number | undefined;
    perspectiveOrigin?: string | undefined;
    tranz?: number | undefined;
    txt?: string | any;
    width?: number;
    zIndex?: number | undefined;
}
