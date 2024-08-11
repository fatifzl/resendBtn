function resendCode(){
    let number=30;
    const resendBtn=document.getElementById("resend-btn");
    resendBtn.disabled=true;
    setInterval(() => {
        const resendText=document.getElementById("span");
        resendText.textContent=`Resend code in ${number} seconds`;
        number-=1;
        if(number<=0){
           resendBtn.disabled=false;
           resendBtn.classList.remove("resend");
           resendBtn.classList.add("resend-change");
           resendText.textContent="Resend code";
        }
    },1000);
}