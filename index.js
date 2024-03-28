var btn = document.getElementById("google-pay-button")
btn.addEventListener("click",sendMoney)

 function sendMoney(){
    var amount = document.getElementById("amount").value
    var name = document.getElementById("name").value

    var Payment = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Payment successful");
        }, 2000);
        var img = document.getElementById("img")
        img.src = "https://i.gifer.com/origin/a1/a1d81f564eeb1468aefbcfd54d1571b8_w200.gif"
    })
    Payment.then(function(){
        var result = document.getElementById("result")
        result.innerText = "Payment successful. ₹" + amount +" "+ name

        var img = document.getElementById("img")
        img.src = "https://cdn.dribbble.com/users/39201/screenshots/3694057/nutmeg.gif" 
        
    })

}
// sendMoney()

