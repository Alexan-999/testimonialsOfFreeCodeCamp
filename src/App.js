import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapore'
          imagen='Shawn'
          cargo='Software Engineer'
          empresa='Amazon'
          testimonio={['Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year eI had a six-figure job as a Software Engineer.', <strong> FreeCodeCamp changed my life. </strong>]} />
          <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='Sarah'
          cargo='Software Engineer'
          empresa='ChatDesk'
          testimonio={[<strong>freeCodeCamp was the gateway to my career </strong>, 'as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.']} />
          <Testimonio
          nombre='Emma Bostian'
          pais='Sweden'
          imagen='Emma'
          cargo='Software Engineer'
          empresa='Spotify'
          testimonio={['I ve always struggled with learning JavaScript. I ve taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on', <strong> freeCodeCamp gave me the skills </strong>, ' and confidence I needed to land my dream job as a software engineer at Spotify']} />
      </div>
    </div>
  );
}

export default App;
