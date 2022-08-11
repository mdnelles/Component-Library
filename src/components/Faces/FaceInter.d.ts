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
    anim1Specs?: object | undefined;
    anim2Specs?: object | undefined;
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
