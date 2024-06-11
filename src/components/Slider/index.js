import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import Modal from "../Modal";
import clsx from "clsx";
import { sendBot } from "../../api/bot";
import Lable from "../Lable";

const Index = (props) => {
  const styleblock = {
    background: `url(${props.slideArray.img}) center no-repeat`,
    height: "clamp(141px, 41.5vw, 498px)",
    border: "1px solid red",
  };
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(""); //Стейт для хранения имени
  const [phoneNumber, setPhoneNumber] = useState(""); //Стейт для хранения телефона
  const [sendResult, setSendResult] = useState(false); //Стейт для хранения значения об успешной отправке
  return (
    <>
      <div style={styleblock}>
        <div className={style.content}>
          <p className={style.title}>{props.slideArray.text}</p>
          <p className={clsx(style.subtitle)}>{props.slideArray.subtitle}</p>
          <button className={style.button} onClick={() => setIsOpen(true)}>
            {props.slideArray.text_btn}
          </button>
          {props.slideArray.lable && <Lable text={props.slideArray.lable} />}
        </div>
      </div>

      {/*----------Конец основного блока, дальше идет модальное окно------------*/}
      <Modal
        isOpen={isOpen} //передача состояния окна
        onClose={() => setIsOpen(false)}
        sendResult={sendResult} //"обратная" функция вызываемая по onClose из компонента, но срабатывающая здесь
      >
        <div className={clsx(style.wrapperForm)}>
          <div className={clsx(style.form)}>
            <h3 className={clsx(style.formTitle)}>Заказать звонок</h3>

            {/*форма обратной связи*/}
            <form>
              <div className={clsx(style.formBlock)}>
                <div className={clsx(style.inputBlock)}>
                  <label className={clsx(style.labels)} htmlFor="name">
                    Имя
                  </label>
                  <input
                    className={clsx(style.inputs)}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus={true}
                  />
                </div>
                <div className={clsx(style.inputBlock)}>
                  <label className={clsx(style.labels)} htmlFor="phone">
                    Телефон
                  </label>
                  <input
                    className={clsx(style.inputs)}
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <button
                  className={clsx(style.formButton)}
                  onClick={(event) => {
                    if (setSendResult(sendBot(event, name, phoneNumber))) {
                      //Передаем name и phoneNumber из стейта в API бота
                      setSendResult(true); //Если результат sendBot вернул true то устанавливаем setSendResult true, что бы отобразить надпись, что запрос успешно отправлен
                    }
                    setTimeout(() => {
                      setIsOpen(false);
                    }, 1000);
                    //Задержка 1 секунда формы, что бы пользователь прочел, что сообщение успешно отправлено, после чего она закрывается
                  }}
                  type="submit"
                >
                  Отправить
                </button>
              </div>
              {
                sendResult && (
                  <div className={clsx(style.formSendResult)}>
                    Ваш запрос успешно отправлен
                  </div>
                )
                //Если setSendResult == true то отрисовывем эту надпись
              }
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Index;
