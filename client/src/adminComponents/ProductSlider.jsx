import { useRef } from "react";

const products = [
  {
    id: 1,
    img: "admin-asset/img/product-slider-1.png",
    title: "Stylish leather bag",
    oldPrice: 150,
    price: 130,
    rating: 51,
    sales: 60,
  },
  {
    id: 2,
    img: "admin-asset/img/product-slider-1.png",
    title: "Elegant leather wallet",
    oldPrice: 120,
    price: 100,
    rating: 45,
    sales: 48,
  },
  {
    id: 3,
    img: "admin-asset/img/product-slider-1.png",
    title: "Modern leather backpack",
    oldPrice: 180,
    price: 160,
    rating: 68,
    sales: 70,
  },
  {
    id: 4,
    img: "admin-asset/img/product-slider-1.png",
    title: "Classic leather belt",
    oldPrice: 80,
    price: 65,
    rating: 30,
    sales: 40,
  },
  {
    id: 5,
    img: "admin-asset/img/product-slider-1.png",
    title: "Premium leather boots",
    oldPrice: 250,
    price: 220,
    rating: 72,
    sales: 80,
  },

  {
    id: 1,
    img: "admin-asset/img/product-slider-1.png",
    title: "Stylish leather bag",
    oldPrice: 150,
    price: 130,
    rating: 51,
    sales: 60,
  },
  {
    id: 2,
    img: "admin-asset/img/product-slider-1.png",
    title: "Elegant leather wallet",
    oldPrice: 120,
    price: 100,
    rating: 45,
    sales: 48,
  },
  {
    id: 3,
    img: "admin-asset/img/product-slider-1.png",
    title: "Modern leather backpack",
    oldPrice: 180,
    price: 160,
    rating: 68,
    sales: 70,
  },
  {
    id: 4,
    img: "admin-asset/img/product-slider-1.png",
    title: "Classic leather belt",
    oldPrice: 80,
    price: 65,
    rating: 30,
    sales: 40,
  },
  {
    id: 5,
    img: "admin-asset/img/product-slider-1.png",
    title: "Premium leather boots",
    oldPrice: 250,
    price: 220,
    rating: 72,
    sales: 80,
  },
];

function ProductCard({ product }) {
  return (
    <div className="product-card-vertical">
      
      <div className="product-card-vertical__img">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="product-card-vertical__content">
        <h4 className="product-card-vertical__title">
          <a href="#" className="sherah-pcolor">
            {product.title.split(" ").map((word, i) =>
              word.toLowerCase() === "leather" ? (
                <b key={i}>{word} </b>
              ) : (
                word + " "
              )
            )}
          </a>
        </h4>
        <h5 className="product-card-vertical__price">
          <del>${product.oldPrice}</del> ${product.price}
        </h5>
        <div className="product-card-vertical__meta">
          <span className="product-card-vertical__rating sherah-color4">
            <i className="fa fa-star"></i> {product.rating}
          </span>
          <span className="product-card-vertical__sales sherah-pcolor">
            Sales ({product.sales})
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProductSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        .product-slider-container {
          position: relative;
          padding: 20px 40px;
          background: #fff;
          border: 0px ;
          border-radius: 8px;
          max-width: 100%;
          overflow: hidden;
        }

        .product-slider {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none; /* Firefox */
        }
        .product-slider::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }

        .product-card-vertical {
          min-width: 240px;
          background: #fefefe;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .product-card-vertical:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgb(0 0 0 / 0.2);
        }

        .product-card-vertical__img img {
          width: 100%;
          height: 190px;
          object-fit: cover;
          border-bottom: 1px solid #ccc;
        }

        .product-card-vertical__content {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-grow: 1;
        }
        .product-card-vertical__title {
          font-weight: 700;
          font-size: 1.15rem;
          margin: 0;
          color: #222;
          text-decoration: none;
        }
        .product-card-vertical__title a:hover {
          text-decoration: underline;
        }

        .product-card-vertical__price {
          font-size: 1rem;
          color: #333;
          margin: 0;
        }
        .product-card-vertical__price del {
          color: #999;
          margin-right: 8px;
        }
        .product-card-vertical__meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: #555;
          margin-top: auto;
        }
        .product-card-vertical__rating i {
          margin-right: 6px;
          color: gold;
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0,0,0,0.5);
          border: none;
          color: white;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          z-index: 10;
          transition: background-color 0.3s ease;
        }
        .slider-btn:hover {
          background-color: rgba(0,0,0,0.8);
        }
        .slider-btn.prev {
          left: 10px;
        }
        .slider-btn.next {
          right: 10px;
        }
      `}</style>

      <div className="product-slider-container">
        <button className="slider-btn prev" onClick={scrollLeft} aria-label="Scroll Left">
          ‹
        </button>
        <button className="slider-btn next" onClick={scrollRight} aria-label="Scroll Right">
          ›
        </button>
        <div className="product-slider" ref={sliderRef}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
