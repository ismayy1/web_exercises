

$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }

    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
    } else{
      $('.scroll-up-btn').removeClass("show");
    }
  });



  const downloadPdf = document.querySelector(".btn");
  const submitBtn = document.querySelector("#submit-form");

  const name = document.querySelector(".input");
  // const downld = document.querySelector(".form");

  downloadPdf.addEventListener("click", () =>{
    let element = document.createElement("a");
    if(name != null){
      element.href = "./TKIMembershipBrochure.pdf";
      
      element.download = "TKIMembershipBrochure.pdf";
  
      document.documentElement.appendChild(element);
  
      element.click();
      
      document.documentElement.removeChild(element);
      
      submitBtn.click();
    }    

  });

});


const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const company = document.querySelector(".company");
const country = document.querySelector(".country");
const prefix = document.querySelector("prefix");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");

const personalGreeting = document.querySelector(".personalGreeting");

const downloadBtn = document.querySelector(".btn");

downloadBtn.addEventListener('click', function() {
  localStorage.setItem('nameInput', name.value);

  nameDisplayCheck();

});

function nameDisplayCheck() {
  if(localStorage.getItem('nameInput')){
    let name = localStorage.getItem(nameInput);
    h1.textContent = 'Welocome, ' + name;

    personalGreeting.textContent = 'Welcome to our website, ' + name + '! We..';    
  }

  document.querySelector.onclick("#submit-form");
}
