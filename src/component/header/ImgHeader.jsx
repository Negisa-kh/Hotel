import bg from "/img/Rectangle 5.jpg";
import Reservation from "./Reservation";
import Selection from "./Selection";

export default function ImgHeader() {
    return (
        <div>        
            <img src={bg} alt="bg" className="mt-6"/>
            <div className="bg-white rounded-md grid grid-cols-2 gap-4  shadow1 p-3  content-center relative bottom-16   items-center  ">
            <Reservation/>
            <Selection/>
            </div>
       </div>
);
}