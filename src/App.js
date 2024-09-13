import logo from './logo.svg';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Blog from './layout/Blog';
import BlogClass from './layout/BlogClass';
import FooterClass from './layout/FooterClass';
import HeaderClass from './layout/HeaderClass';
import Contaxt from './pages/Context';
import ContaxtClass from './pages/Context';
import Context from './pages/Context';

function App() {
  return (
    <>
    {/* <Header></Header> */}
    <HeaderClass></HeaderClass>
    {/* <Blog></Blog> */}
    <BlogClass></BlogClass>
    {/* <Context></Context> */}
    <ContaxtClass></ContaxtClass>
    {/* <Footer></Footer> */}
    <FooterClass></FooterClass>
    </>
  );
}

export default App;
