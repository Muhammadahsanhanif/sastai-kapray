import { motion } from "framer-motion";

function ProductCard({ id, title, image, price }) {
  return (
    <motion.div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transform hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }} // Hover animation
      whileTap={{ scale: 0.95 }} // Tap animation
    >
      <div className="px-6 py-4">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animate state
          transition={{ delay: 0.2 }} // Animation delay
        >
          <a className="block" href={`/products/${id}`}>
            <motion.img
              alt={title}
              className="h-64 w-full object-cover rounded-lg"
              src={image}
              whileHover={{ scale: 1.1 }} // Image hover effect
              transition={{ duration: 0.3 }} // Transition duration
            />
          </a>
        </motion.div>
        <div className="py-4 text-center">
          <motion.h2
            className="text-lg font-bold mb-2 text-gray-900 dark:text-white"
            initial={{ y: 10, opacity: 0 }} // Initial animation state
            animate={{ y: 0, opacity: 1 }} // Animate to visible state
            transition={{ delay: 0.3 }} // Delay for title animation
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-gray-700 dark:text-gray-300 text-base"
            initial={{ y: 10, opacity: 0 }} // Initial animation state
            animate={{ y: 0, opacity: 1 }} // Animate to visible state
            transition={{ delay: 0.4 }} // Delay for price animation
          >
            ${price}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
