import { version, Component } from 'inferno';
import Logo from './logo';
import './App.css';
import 'js-carousel';
import InfernoCarousel from 'inferno-carousel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className="App">
        <h1 className="title_header"> 
         Carousel with different content
        </h1>
        <main>
        <div className="horizonal_carousel">
        <div className="horizonal_carousel_container">
          <InfernoCarousel animationSpeed={500} itemDuration={5000} className="content_horizonal">
          <img src="./images/Horizonal/cryout.png" height="300"/>
          <img src="./images/Horizonal/FullSizeRender_5.jpg" width="300" style="margin-top:40px;"/>
          <img src="./images/Horizonal/my_hearts.png" height="300"/>
          <img src="./images/Horizonal/まつもと.png" height="300"/>
        </InfernoCarousel>
        </div>
        <div className="horizonal_content_message">
          <p>Since the carousel does not know what you are putting inside of it, you have to style them to ensure that they fit properly. </p>
        <p>The carousel doesn't break, but of course the contents inside of it will. </p>
        <p>It's Simple and easy. Just give the images width of 100% then that's it, if images have different sizes, you have to ensure that their heights fit as well.</p>
        <p>There's a trick that would allow you to have your images on the same sizes. </p>
        <p>You can use the trick for variety of things like adding a placeholder for the image.</p>
        <p>It goes something like this.</p>
        </div></div>

        <h1 className="title_header"> 
         Not properly styled carousel
        </h1>
        
        <div className="horizonal_carousel_container">
          <InfernoCarousel animationSpeed={500} itemDuration={5000} className="content_vertical">
          <img src="./images/Vertical/2018_11_19年賀状.png" height="500"/>
          <img src="./images/Vertical/bantan.png" height="500"/>
          <img src="./images/Vertical/IMG_3203.jpg" height="500"/>
        </InfernoCarousel>
        </div>
        <div className="vertical_content_message">
          <p>Since the carousel does not know what you are putting inside of it, you have to style them to ensure that they fit properly. </p>
        <p>The carousel doesn't break, but of course the contents inside of it will. </p>
        <p>It's Simple and easy. Just give the images width of 100% then that's it, if images have different sizes, you have to ensure that their heights fit as well.</p>
        <p>There's a trick that would allow you to have your images on the same sizes. </p>
        <p>You can use the trick for variety of things like adding a placeholder for the image.</p>
        <p>It goes something like this.</p>
        </div>
        </main>
      </div>
    );
  }
}

export default App;
