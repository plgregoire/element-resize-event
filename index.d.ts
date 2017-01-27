export = element_resize_event;
declare function element_resize_event(omNode: Element, callback: () => void): void;
declare namespace element_resize_event {
    function unbind(omNode: Element, callback: () => void): void;
}
