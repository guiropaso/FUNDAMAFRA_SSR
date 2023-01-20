export default async function sendData (data) {
    await fetch('/api/mailer',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
}