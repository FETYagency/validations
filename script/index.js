const inputs = document.querySelectorAll("input");
const btn = document.querySelector("[type='submit']");
const icon = document.querySelectorAll(".notValid");


const email = document.querySelector("[type='email']");
const password = document.querySelector("[type='password']");
const user = document.querySelectorAll("[type='text']");

const emailMark = document.querySelector(".email__mark")
const passMark = document.querySelector(".pass__mark")
const nameMark = document.querySelectorAll(".name__mark")

const errorMsg = document.querySelectorAll(".error")


icon.forEach((e)=>{
    e.style.display = "none"
});

errorMsg.forEach((e)=>{
    e.style.display = "none"
});

inputs.forEach((e)=>{
    e.value=""
})

btn.disabled=true;



function isValidEmail(x) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
    return regex.test(x);
}

inputs.forEach((e)=>{
    e.addEventListener("input", ()=>{



        let valid;
        const tests = [];
        for(const input of inputs){
            if(input.value!==''){
                valid = true
            }else{
                valid = false
            }
            tests.push(valid);
        }

        // console.log(tests)

        for(const test of tests){
            if(test === false){
                valid = false;
                break;
            }else{
                continue;
            }
        }
        // console.log(valid)



        if(valid === false){
            btn.disabled = true;
            icon.forEach((e)=>{
                e.style.display = "inline-block"
            });
        }else{
            btn.disabled = false;
            icon.forEach((e)=>{
                e.style.display = "none"
            });
        }


        let validEmail;
        validEmail = isValidEmail(email.value);
        if(validEmail === true){
            emailMark.style.display = "none"
            btn.disabled = false;

            errorMsg[2].style.display="none"
        }else{
            emailMark.style.display = "inline-block"
            btn.disabled = true;

            errorMsg[2].style.display="block"
        };

        if(password.value.length !== 0){
            passMark.style.display="none";
            errorMsg[3].style.display="none"
        }else{
           passMark.style.display = "inline-block"            
           errorMsg[3].style.display="block"
        };


        if(user[0].value !== ""){
            nameMark[0].style.display = "none";
            errorMsg[0].style.display="none"
        }else{
            errorMsg[0].style.display="block"
        }

        if(user[1].value !== ""){
            nameMark[1].style.display = "none";
            errorMsg[1].style.display="none"
        }else{
            errorMsg[1].style.display="block"
        }
    })

})








