import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Componet/Contexts";
import SearchBar from "../../G-Components/SearchBar";
import { toast } from "react-toastify";

const ProductPage = () => {
  const { addToCart,filterItems } = useContext(CartContext);

  const handleCart = (product) => {
    addToCart(product);
    toast.success(`product added successfully`);
  };

  return (
    <>
    <SearchBar/>
      <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Special for you
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {filterItems.map((product, index) => (
                <div key={product.id} className="group relative">
                  <Link to={`/products/:${product.id}`} index={index} product={product}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 sm:h-80 border">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                  </Link>
                  <div className="mt-2 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">{product.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-md font-medium text-gray-900">
                      ₹{product.price}
                    </p>
                    <button
                      onClick={() => handleCart(product)}
                      type="button"
                      className="rounded-md bg-indigo-600 px-2 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
