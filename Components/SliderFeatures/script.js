import { buildRefs, getJSON } from "@/assets/scripts/helpers.js";
import Swiper from "swiper";
import { Autoplay, A11y, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

export default function (el) {
  const refs = buildRefs(el);
  const data = getJSON(el);

  const swiper = initSlider(refs, data);

  return () => swiper.destroy();
}

function initSlider(refs, data) {
  const { options } = data;
  const config = {
    modules: [Autoplay, A11y, Navigation, Scrollbar],
    a11y: options.a11y,
    navigation: {
      nextEl: refs.next,
      prevEl: refs.prev,
    },
    slidesPerView: 1,
    spaceBetween: 100,
    height: 420,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  };
  if (options.autoplay && options.autoplaySpeed) {
    config.autoplay = {
      delay: options.autoplaySpeed,
    };
  }

  return new Swiper(refs.featureSliders, config);
}
