declare function loadingScreen(): void;
declare function hideSkeleton(): void;
declare function modal(): void;
declare function isHidden(el: any): boolean;
declare function accordion(): void;
declare function alerts(): void;
declare function navbarMenu(): void;
declare function lazyLoadings(): void;
declare function anime(customDefinition: any): void;
declare function animeStart(customDefinition: any): void;
declare function animeEnd(customDefinition: any): void;
declare function xuiTypeWriter(obj: any): void;
declare function scrollOnAnimation(): void;
declare namespace xui {
    function run(): void;
    namespace control {
        function navbar(): void;
        function loader(): void;
    }
    namespace animate {
        function _default(custom: any): void;
        export { _default as default };
        export function start(custom: any): void;
        export function end(custom: any): void;
    }
    namespace effect {
        function typewriter(obj: any): void;
    }
    namespace reveal {
        function images(): void;
        function skeletons(): void;
    }
    namespace modal {
        function show(name: any): void;
        function hide(name: any): void;
    }
}
declare function autoRun(): void;
export declare function xuiRun(): void;
export declare function xuiControlNavbar(): void;
export declare function xuiControlLoader(): void;
export declare function xuiAnimateDefault(custom: any): void;
export declare function xuiAnimateStart(custom: any): void;
export declare function xuiAnimateEnd(custom: any): void;
export declare function xuiEffectTypewriter(obj: any): void;
export declare function xuiRevealImages(): void;
export declare function xuiRevealSkeletons(): void;
export declare function xuiModalShow(name: any): void;
export declare function xuiModalHide(name: any): void;