import React from "react";
import classNames from "classnames";
import Image from "../shared/image";
import style from "./lot.module.scss";
import { Button, FontIcon } from "../shared";

const Lot = ({
  _id,
  productName,
  description,
  urlImage,
  quantity,
  added,
  characteristic,
  price,
  asset,
  user_id,
  edit,
  history,
  toggleSelected,
  selectedProducts,
}) => {
  const editHandler = () => history && history.push(`/lots-constructor/${_id}`);

  return (
    <div className={style.lot}>
      <div className={style.lot__container}>
        <div className={style.lot__image}>
          <Image src={urlImage} style={{ height: "200px" }} />
          {edit && (
            <>
              <Button className={style.lot__edit} handler={editHandler}>
                Edit
              </Button>
              <Button
                className={classNames(style.lot__edit, style.lot__edit_remove)}
                handler={toggleSelected}
              >
                {selectedProducts.includes(_id) ? (
                  <FontIcon iconKey={"checkMArk"} style={{width:"10px"}} />
                ) : (
                  "x"
                )}
              </Button>
            </>
          )}
        </div>
        <div className={style.lot__textContainer}>
          <div className={style.lot__title}>{productName}</div>
          <div>
            <div className={style.lot__buyDescription}>
              <div className={style.lot__price}>{price || "0"}</div>
              <div>
                <span className={style.lot__fieldTitle}>quantity:</span>{" "}
                {quantity || "0"}
              </div>
            </div>
            <div className={style.lot__description}>
              <div>Description:</div>
              <div>{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Lot.Add = ({ hendler }) => (
  <div className={style.lot}>
    <div className={style.lot__plus} onClick={hendler} />
  </div>
);

export default Lot;
