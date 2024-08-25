import wifi from "/img/wifi-01.jpg";
import tea from "/img/tea.jpg";
import electric from "/img/electric-plugs.jpg";
import car from "/img/car-parking-02.jpg";
import swimming from "/img/swimming.jpg";
import dumbbell from "/img/dumbbell-01.jpg";

export default function OverService() {
  return (
    <div className="bg-white py-24 sm:py-32 ">
      <h1 className="font-bold text-4xl">Over Service</h1>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-3 gap-3">
          <div>
            <img
              alt="wifi"
              src={wifi}
              width={158}
              height={48}
              className="col-span-3 max-h-12 w-full object-contain lg:col-span-1 "
            />
            <h2 className="text-sm text-[#764731]">Free Wifi</h2>
          </div>
          <div>
            <img
              alt="tea"
              src={tea}
              width={158}
              height={48}
              className="col-span-3 max-h-12 w-full object-contain lg:col-span-1"
            />
            <h2 className="text-sm text-[#764731]">Free Wifi</h2>
          </div>
          <div>
            <img
              alt="electric"
              src={electric}
              width={158}
              height={48}
              className="col-span-3 max-h-12 w-full object-contain lg:col-span-1"
            />
            <h2 className="text-sm text-[#764731]">Free Electricity </h2>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-16">
          <div>
            <img
              alt="car"
              src={car}
              width={158}
              height={48}
              className="col-span-3 max-h-12 w-full object-contain lg:col-span-1"
            />
            <h2 className="text-sm text-[#764731]">Parking Area </h2>
          </div>
          <div>
            <img
              alt="swimming"
              src={swimming}
              width={158}
              height={48}
              className="col-span-3 max-h-12 w-full object-contain lg:col-span-1"
            />
            <h2 className="text-sm text-[#764731]">Swimming Pool</h2>
          </div>
          <div>
            <img
              alt="dumbbell"
              src={dumbbell}
              width={158}
              height={48}
              className="col-span-3 max-h-12 w-full object-contain lg:col-span-1"
            />
            <h2 className="text-sm text-[#764731]">Exercise Space </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
