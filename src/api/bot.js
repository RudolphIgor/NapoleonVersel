export async function sendBot(event, name, phoneNumber) {
  //Принимаем событие (клик мышкой - для его перехвата, что бы страница не перезагружалась и значения переменных name и phoneNumber из стейта формы.
  const TELEGRAM_BOT_TOKEN = "6427826466:AAHNH4-24qHDOshc6VwFCdeKNbHyH12mmN8"; //Токен бота получаемый у BotFather
  const TELEGRAM_CHAT_ID = "-4143000809"; //Адрес комнаты телеграмм, получаемая через бота Get My ID
  const API = "https://api.telegram.org"; //Адрес телеграм API
  let res = false;
  event.preventDefault(); //Перехват обычного клика, что бы страница не перезагружалась.

  const text = `Поступил запрос от ${name}\nНомер телефона: ${phoneNumber}`; //Формируем текстовое сообщение отправляемое в API телеграмм
  try {
    const res = await fetch(`${API}/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: "-4143000809", //Id чата куда телеграмм бот будет присылать сообщения
        text,
      }),
    });
    if (res.ok) {
      //Если статус запроса ok то ничего не делаем.
    } else {
      throw new Error(res.statusText);
      //Если же ошибка, то пробрасываем ошибку и возвращаем ее выше.
    }
  } catch (e) {
    //В случае ошибок выводим даныне в консоль
    console.error(e);
    console.log("BAD");
  }

  //В случае если статус res = ok возращаем true и в форме выводим надпись, что наше сообщение отправлено
  return (res = true);
}
