import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();

  const bagItem = useSelector(store => store.bag);
  const elemFound = bagItem.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };


  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elemFound ? (
        <button className="btn-add-bag btn btn-danger" style={{
          backgroundColor: "#b23956",
          color: "white",
          borderColor: "#b23956",
      }}onClick={handleRemove} >
        Remove From Bag <MdOutlineRemoveShoppingCart />
      </button>
      ) : (
        <button
          className="btn-add-bag btn btn-success" style={{
            backgroundColor: "#ff3e6c",
            color: "white",
            borderColor: "#ff3e6c",
        }}
          onClick={handleAddToBag}
        >
          Add to Bag <MdAddShoppingCart style={{ fontSize: "21px" }} />
        </button>
      )}
    </div>
  );
};

export default HomeItem;