import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [id]);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {product ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-4/5 mx-auto flex flex-wrap"
          >
            {/* Image Section */}
            <motion.img
              alt={product.title}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded shadow-lg"
              src={product.thumbnail}  
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Product Details */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <motion.h2
                className="text-sm title-font text-gray-500 tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {product.brand} {/* Changed to product.brand */}
              </motion.h2>
              <motion.h1
                className="text-gray-900 text-3xl title-font font-medium mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {product.title}
              </motion.h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {/* Rating Icons */}
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      fill={index < Math.round(product.rating) ? "currentColor" : "none"}  
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="text-gray-600 ml-3">{product.stock} Reviews</span>
                </span>
              </div>
              <motion.p
                className="leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {product.description}
              </motion.p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <motion.button
                    className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.button
                    className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.button
                    className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <motion.span
                  className="title-font font-medium text-2xl text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  ${product.price}
                </motion.span>
                <motion.button
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
}

export default ProductDetail;
