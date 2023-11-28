const sendMessageInGroup = () => {
   const message = document.querySelector('.form-control').value
   
   const token = '6360968307:AAE3Vd-6Ac8NO9f3kclN6KM7xMnPbtMtjmY'
   const chat_id = '-4095010427'
   const url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id='+chat_id+'&text='
   const xhttp = new XMLHttpRequest()
   xhttp.open('GET', url + message, true)
   xhttp.send()
}

document.querySelector('btn').addEventListener('click', sendMessageInGroup)