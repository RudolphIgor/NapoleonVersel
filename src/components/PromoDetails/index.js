import React from "react";
import style from "./index.module.css";
import clsx from "clsx";
import { promotions } from "../../data/promotions";

const Index = (props) => {
  console.log(props.id);
  return (
    <div className={clsx(style.wrapperPromo)}>
      {/*Заголовок карточки Картинка и текст карточки*/}
      {props.promotionsArray.map((promotionItem) => {
        if (promotionItem.id === props.id) {
          return (
            <div>
              <img
                src={promotionItem.image}
                className={clsx(style.imagePromo)}
                alt=""
              />
              <h2 className={clsx(style.titlePromo)}>{promotionItem.title}</h2>
            </div>
          );
        }
      })}
      {/*Перечисление товаров в акции*/}
      {props.promotionsArray.map((promotionItem) => {
        if (promotionItem.id === props.id) {
          return (
            <div className={clsx(style.detailsBlock)}>
              {promotionItem.details.map((detail) => {
                return (
                  // Обертка товара
                  <div className={clsx(style.detailsWrapper)}>
                    <img
                      src={detail.image}
                      className={clsx(style.imageProductPromo)}
                      alt=""
                    />
                    <div className={clsx(style.productBlock)}>
                      {/*Заголовок товара*/}
                      <h3 className={clsx(style.detailsTitle)}>
                        {detail.title}
                      </h3>
                      <div>
                        {Object.entries(detail.specifications).map(
                          ([key, value]) => {
                            return (
                              <div>
                                <span className={clsx(style.key)}>
                                  {key}&nbsp;:&nbsp;
                                </span>
                                <span className={clsx(style.value)}>
                                  {value}
                                </span>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Index;
