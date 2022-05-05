import { About, Footer, Header, Skills, Testimonial, Work } from './container';

const App = () => {
  return (
    <div className='app'>
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
