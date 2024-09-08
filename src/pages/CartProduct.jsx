import { Link } from "react-router-dom";
import FormattedPrice from "./FormattedPrice";
import AddToCartBtn from "./AddToCartBtn";
import { IoClose } from "react-icons/io5";
import {
    deleteProduct,
} from "../redux/proSlice";
import { useDispatch } from "react-redux";
const CartProduct = ({ product }) => {
    const dispatch = useDispatch();
    const productName = product?.name || "No Name";   
    return (
        <div className="flex py-6 sm:py-10">
            <Link to={`/product/${product._id}`}>
                <img
                    src={product.images}
                    alt="productImage"
                    className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48 border border-skyText/30 hover:border-skyText duration-300"
                />
            </Link>
            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="relative pr-9 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:pr-0">
                    <div className="flex flex-col gap-1 col-span-3">
                        <h3 className="text-base font-semibold w-full">
                            {productName.substring(0, 80)}
                        </h3>
                        <p className="text-xs">
                            Brand: <span className="font-medium">{product.brand}</span>
                        </p>
                        <p className="text-xs">
                            Category: <span className="font-medium">{product.category}</span>
                        </p>
                        <div className="flex items-center gap-6 mt-2">
                            <p className="text-base font-semibold">
                                <FormattedPrice
                                    amount={product.discountedPrice * product.quantity}
                                />
                            </p>
                            <AddToCartBtn product={product} showPrice={false} />
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:pr-9">
                        <div className="absolute right-0 top-0">
                            <button
                                onClick={() => dispatch(deleteProduct(product._id))}
                                className="-m2 inline-flex p-2 text-gray-600 hover:text-red-600"
                            >
                                <IoClose className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <p>
                        You are saving{" "}
                        <span className="text-sm font-semibold text-green-500">
                            <FormattedPrice
                                amount={product?.regularPrice - product?.discountedPrice}
                            />
                        </span>{" "}
                        upon purchase
                    </p>
                </div>
            </div>
        </div>
    );
};


export default CartProduct;
