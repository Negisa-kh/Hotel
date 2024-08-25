import bed from "/img/bed-single-01.png"
import bathtub from "/img/bathtub-02.jpg"
import aspect from "/img/aspect-ratio.jpg"


const products = [
    {
      id: 1,
      name: 'price',
      href: '#',
      imageSrc: '/img/room1.jpg',
      imageAlt: "Front of men's price in black.",
      price: '$40',
      color: 'Single  Room',
    },
    {
        id: 1,
        name: 'price',
        href: '#',
        imageSrc: '/img/room.jpg',
        imageAlt: "Front of men's price in black.",
        price: '$50',
        color: 'Room',
      },
      {
        id: 1,
        name: 'price',
        href: '#',
        imageSrc: '/img/Rectangle 9.jpg',
        imageAlt: "Front of men's price in black.",
        price: '$90',
        color: 'Deluxe Room',
      },
      {
        id: 1,
        name: 'price',
        href: '#',
        imageSrc: '/img/Rectangle 10.jpg',
        imageAlt: "Front of men's price in black.",
        price: '$70',
        color: 'Luxury Room',
      },
   
  ]
  
  export default function Roomswerecommend() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-left text-gray-900">Rooms we recommend
            <br></br>
          for our customers</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  <div className="flex flex-row">
                   <img className="w-6 h-6" src={bed}alt="bed"/>
                   <img  className="w-6 h-6"src={bathtub}alt="bathtub"/>
                   <img  className="w-6 h-6"src={aspect}alt="aspect"/>

                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  