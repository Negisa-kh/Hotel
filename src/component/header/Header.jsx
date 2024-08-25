import Navigation from "./Navigation";
import ImgHeader from "./ImgHeader";


export default function Header() {
    return (
      <header>
        <div className="container" >
          <Navigation />
          <ImgHeader/>
        </div>
      </header>
    );
  }