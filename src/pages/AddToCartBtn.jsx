import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import PriceTag from "./PriceTag";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQuantity, decreaseQuantity } from "../redux/proSlice";

const AddToCartBtn = ({
  className,
  title,
  product,
  showPrice = true,
}) => {
  const [existingProduct, setExistingProduct] = useState(null);
  const cartProduct = useSelector((state) => state.pro.productData);
  const dispatch = useDispatch();

  useEffect(() => {
    const availableItem = cartProduct.find(
      (item) => item?._id === product?._id
    );
    setExistingProduct(availableItem || null);
  }, [product, cartProduct]);

  const newClassName = twMerge(
    "bg-[#f7f7f7] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer",
    className
  );

  const getRegularPrice = () => {
    if (existingProduct) {
      return product?.regularPrice * existingProduct?.quantity;
    } else {
      return product?.regularPrice;
    }
  };
  const handleIncrease = () => {
    dispatch(increaseQuantity({ _id: product._id }));
    toast.success(`${product?.name.substring(0, 10)} added successfully!`);
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity({ _id: product._id }));
    toast.success(`${product?.name.substring(0, 10)} decreased successfully!`);
  };
  const getDiscountedPrice = () => {
    if (existingProduct) {
      return product?.discountedPrice * existingProduct?.quantity;
    } else {
      return product?.discountedPrice;
    }
  };

  return (
    <>
      {showPrice && (
        <div>
          <PriceTag
            regularPrice={getRegularPrice()}
            discountedPrice={getDiscountedPrice()}
          />
        </div>
      )}
      {existingProduct ? (
        <div className="flex self-center items-center justify-center gap-2">
          <button
            onClick={handleDecrease}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
            {existingProduct?.quantity}
          </p>
          <button
            onClick={handleIncrease}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            console.log("Adding product:", {
              _id: product._id,
              name: product.name,
              images: product.images[0],
              category: product.category,
              description: product.description,
              regularPrice: product.regularPrice,
              discountedPrice: product.discountedPrice,
              colors: product.colors,
              brand: product.brand,
              quantity: 1,
            });
            dispatch(
              addToCart({
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
          }}
          className={newClassName}
        >
          {title ? title : "Add to cart"}
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
