import './App.css';
import microsoft01 from './microsoft01.webp';
import microsoft02 from './microsoft02.webp';
import microsoft03 from './microsoft03.webp';
import microsoft04 from './microsoft04.webp';
import microsoft05 from './microsoft05.webp';
import microsoft06 from './microsoft06.webp';


function App() {
  
  return (
    
    <div className="App">

      <div className='App-div'>
        <div className='Head'>
          <h1 className='Heading'>Projects</h1>
          <a href='#' className='Link'>contact me</a>
        </div>

        <div className='Card-div'>
            <div>
              <a href='#'><img src={microsoft01} alt='microsoft01 picture' className='Img' /></a>
              
              <p>DESIGN PORTFOLIO</p>
              
              <div className='Label'>
                  <span>HTML</span>
                  <span>CSS</span>
              </div>
            </div>
            
            <div>
              <a href='#'><img src={microsoft02} alt='microsoft02 picture' className='Img' /></a>
              
              <p>DESIGN PORTFOLIO</p>
              
              <div className='Label'>
                  <span>HTML</span>
                  <span>CSS</span>
              </div>
            </div>
            
            <div>
              <a href='#'><img src={microsoft03} alt='microsoft03 picture' className='Img' /></a>
              
              <p>DESIGN PORTFOLIO</p>
              
              <div className='Label'>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JAVASCRIPT</span>
              </div>
            </div>
            
            <div>
              <a href='#'><img src={microsoft04} alt='microsoft04 picture' className='Img' /></a>
              
              <p>DESIGN PORTFOLIO</p>
              
              <div className='Label'>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JAVASCRIPT</span>
              </div>
            </div>
            
            <div>
              <a href='#'><img src={microsoft05} alt='microsoft05 picture' className='Img' /></a>
              
              <p>DESIGN PORTFOLIO</p>
              
              <div className='Label'>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JAVASCRIPT</span>
              </div>
            </div>
            
            <div>
              <a href='#'><img src={microsoft06} alt='microsoft06 picture' className='Img' /></a>
              
              <p>DESIGN PORTFOLIO</p>
              
              <div className='Label'>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JAVASCRIPT</span>
              </div>
            </div>
        
        </div>

      </div>

    </div>
  
  );

}

export default App;
