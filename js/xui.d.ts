declare let loadingScreen: () => void;
declare let hideSkeleton: () => void;
declare let modal: () => void;
declare let isHidden: (el: any) => boolean;
declare let accordion: () => void;
declare let alerts: () => void;
declare let navbarMenu: () => void;
declare let lazyLoadings: () => void;
declare let anime: (customDefinition: any) => void;
declare let animeStart: (customDefinition: any) => void;
declare let animeEnd: (customDefinition: any) => void;
declare let xuiTypeWriter: (obj: any) => void;
declare let scrollOnAnimation: () => void;
declare let xui: {
    run: () => void;
    control: {
        navbar: () => void;
        loader: () => void;
    };
    animate: {
        default: (custom: any) => void;
        start: (custom: any) => void;
        end: (custom: any) => void;
    };
    effect: {
        typewriter: (obj: any) => void;
    };
    reveal: {
        images: () => void;
        skeletons: () => void;
    };
    modal: {
        show: (name: string) => void;
        hide: (name: string) => void;
    };
};