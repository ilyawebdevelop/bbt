import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./modules/bootstrap.bundle.min.js";
import fullpage from "../../node_modules/fullpage.js/dist/fullpage.min.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

document.addEventListener('DOMContentLoaded', () => {
  const fullpageElement = document.querySelector('#fullpage');

  if (fullpageElement) {
    new fullpage('#fullpage', {
      licenseKey: 'gplv3-license',
      autoScrolling: true,

      /* Изменения здесь: */
      navigation: false,        // Выключаем дефолтные точки
      menu: '#menu',            // Передаем ID нашего текстового меню
      anchors: ['journeys', 'about', 'contacts']
    });
  }

});
