export async function sendBot(event, name, phoneNumber) {
    const TELEGRAM_BOT_TOKEN = "6427826466:AAHNH4-24qHDOshc6VwFCdeKNbHyH12mmN8";
    const TELEGRAM_CHAT_ID = "-4143000809"
    const API ="https://api.telegram.org"
    let res = false
    event.preventDefault();
    console.log(`Имя: ${name} телефон: ${phoneNumber}`)
    const text = `Поступил запрос от ${name}\nНомер телефона: ${phoneNumber}`
    try {
        const res = await fetch(`${API}/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: '-4143000809',
                text,
            })
        })
        if (res.ok) {
            // formSendResult.textContent = 'Благодарю за Ваше обращение! Очень ценю Ваше доверие🫶.'
            // form.reset()
        } else {
            throw new Error((res.statusText))

        }
    } catch (e) {
        console.error(e)
        console.log("BAD")
    }


    return res = true
}