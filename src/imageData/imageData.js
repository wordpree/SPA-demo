import icon from '../assets/image/adam-muise-slider.jpg'
import book from '../assets/image/annie-spratt-slider.jpg'
import portrait from '../assets/image/gambler-slider.jpg'
import film from '../assets/image/jakob-owens-slider.jpg'
import room from '../assets/image/joseph-morris-slider.jpg'
import kid from '../assets/image/josh-applegate-slider.jpg'
import mIcon from '../assets/image/adam-muise-slider-m.jpg'
import mBook from '../assets/image/annie-spratt-slider-m.jpg'
import mPortrait from '../assets/image/gambler-slider-m.jpg'
import mFilm from '../assets/image/jakob-owens-slider-m.jpg'
import mRoom from '../assets/image/joseph-morris-slider-m.jpg'
import mKid from '../assets/image/josh-applegate-slider-m.jpg'

const urls = window.innerWidth > 960 ?
            [icon,book,portrait,film,room,kid]:[mIcon,mBook,mPortrait,mFilm,mRoom,mKid]

const data =[
  {
    id:0,
    url:urls[0],
    title:'icon',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero finibus posuere congue, quam sapien tristique arcu, ut ullamcorper mi magna ac tortor. '
  },
  {
    id:1,
    url:urls[1],
    title:'book',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero finibus posuere congue, quam sapien tristique arcu, ut ullamcorper mi magna ac tortor.'
  },
  {
    id:2,
    url:urls[2],
    title:'portrait',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero finibus posuere congue, quam sapien tristique arcu, ut ullamcorper mi magna ac tortor.'
  },
  {
    id:3,
    url:urls[3],
    title:'film',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero finibus posuere congue, quam sapien tristique arcu, ut ullamcorper mi magna ac tortor.'
  },
  {
    id:4,
    url:urls[4],
    title:'room',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero finibus posuere congue, quam sapien tristique arcu, ut ullamcorper mi magna ac tortor.'
  },
  {
    id:5,
    url:urls[5],
    title:'kid',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero finibus posuere congue, quam sapien tristique arcu, ut ullamcorper mi magna ac tortor.'
  },
]
export default data
