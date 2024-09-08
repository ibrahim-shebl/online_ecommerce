import { FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import { LuArrowLeftRight } from "react-icons/lu";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, deleteFavorite } from "../redux/proSlice";  

const ProductCardSideNav = ({ product }) => {
  const { favoriteData } = useSelector((state) => state.pro);
  const [existingProduct, setExistingProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const availableItem = favoriteData.find((item) => item?._id === product?._id);
    setExistingProduct(availableItem || null);
  }, [product, favoriteData]);

  const handleFavorite = () => {
    if (existingProduct) {
      //  remove from favourite
      dispatch(deleteFavorite(product._id));  
      toast.error('Removed from favorites successfully');
    } else {
      
      dispatch(
        addToFavorite({
          _id: product._id,
          name: product.name,
          images: product.images[0],
          category: product.category,
          description: product.description,
          regularPrice: product.regularPrice,
          discountedPrice: product.discountedPrice,
          colors: product.colors,
          brand: product.brand,
          rating: product.rating,
          quantity: 1,
        })
      );
      toast.success('Added to favorites successfully');
    }
  };

  return (
    <div className="absolute right-1 top-1 flex flex-col gap-1 transition translate-x-12 group-hover:translate-x-0 duration-300">
      <span
        onClick={handleFavorite}
        className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200"
      >
        {existingProduct ? <FaStar /> : <FaRegStar />}
      </span>
      <span className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
        <LuArrowLeftRight />
      </span>
      <span className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
        <FaRegEye />
      </span>
    </div>
  );
};

export default ProductCardSideNav;
