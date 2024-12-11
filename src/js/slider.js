import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  modules: [Pagination, Autoplay],
  loop: true,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoHeight: true,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  speed: 900,
});

export default swiper;
