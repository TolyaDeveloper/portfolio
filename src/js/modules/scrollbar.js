import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

Scrollbar.use(OverscrollPlugin);

Scrollbar.init(document.querySelector('#app'), {
  plugins: {
    overscroll: 'glow',
  },
});
