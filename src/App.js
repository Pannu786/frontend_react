import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Footer />
      <Work />
      <Skills />
      {/* <Testimonial /> //* keeping this out for now as I don't have a testimonial yet */}
      <Footer />
    </div>
  );
};

export default App;
