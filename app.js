function createResendBtn(){
    let resendBtn = document.createElement('button');
    document.getElementById("footer").appendChild(resendBtn);
    resendBtn.setAttribute("id","resend-btn");
    resendBtn.setAttribute("class","resend");
    resendBtn.setAttribute("type","button");
    resendBtn.setAttribute("onclick","resendCode()");
    resendBtn.textContent = "Resend Code";
}
function createTag(tagName){

}
const resendCode=()=>{
    let number=30;
    setInterval(() => {
        document.get
        if(number>0){
            resendBtn.setAttribute("disabled");
        }
    },1000);
}