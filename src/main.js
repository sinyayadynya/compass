import './components.js';

import Alpine from 'alpinejs';
import ui from '@alpinejs/ui';
import focus from '@alpinejs/focus';
import intersect from '@alpinejs/intersect';
import collapse from '@alpinejs/collapse';
import persist from '@alpinejs/persist';
import resize from '@alpinejs/resize';
import ajax from '@imacrayon/alpine-ajax';
import { animate } from "motion";

// import { animate, scroll } from "motion"

// animate(".box", { scale: [0.4, 1] }, { ease: "circInOut", duration: 1 });

Alpine.plugin(ui);
Alpine.plugin(focus);
Alpine.plugin(intersect);
Alpine.plugin(collapse);
Alpine.plugin(persist);
Alpine.plugin(resize);
Alpine.plugin(ajax);

window.Alpine = Alpine;
Alpine.start();
