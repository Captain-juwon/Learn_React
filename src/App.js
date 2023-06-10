import './App.css';
import images from './assets/images/index';
import Card from './components/Card/Card';
import Head from './components/Head';

function App () {
    return (

        <div className='App'>

          <div className='App-div'>
              
            <div className="head">
              <Head
                heading="Projects"
                link="contact me"
              />
            </div>
            <div className='card'>
            <div>
              <a href='#'><img src={images.aa} alt='image' /></a>
              <Card 
                title="DESIGN PORTFOLIO"
                text1="HTML"
                text2="CSS" 
              />
            </div>
            
            <div>
              <a href='#'><img src={images.bb} alt='image' /></a>
              <Card
                title="DESIGN PORTFOLIO"
                text1="HTML"
                text2="CSS"
              />
            </div>
            
            <div>
              <a href='#'><img src={images.cc} alt='image' /></a>
              <Card
                title="DESIGN PORTFOLIO"
                text1="HTML"
                text2="CSS"
              />
            </div>
            
            <div>
              <a href='#'><img src={images.dd} alt='image' /></a>
              <Card
                title="DESIGN PORTFOLIO"
                text1="HTML"
                text2="CSS"
              />
            </div>
            
            <div>
              <a href='#'><img src={images.ee} alt='image' /></a>
              <Card
                title="DESIGN PORTFOLIO"
                text1="HTML"
                text2="CSS" 
              />
            </div>
            
            <div>
              <a href='#'><img src={images.ff} alt='image' /></a>
              <Card
                title="DESIGN PORTFOLIO"
                text1="HTML"
                text2="CSS"
              />
            </div>
            </div>
            
        </div> 

      </div>

    );
}

export default App;