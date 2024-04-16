$('.burger-open').click(function() {
    $('.burger-open').toggleClass('open')
    $('.burger-close').toggleClass('open');
    $('.nav-item').toggleClass('open');
})

$('.burger-close').click(function() {
    $('.burger-open').toggleClass('open')
    $('.burger-close').toggleClass('open');
    $('.nav-item').toggleClass('open');
});

var card = document.getElementsByClassName("card-valtwo");
for (i=0; i<card.length; i++) {
    card[i].addEventListener("click", function() {
        titles = this.children;
        for (let title of titles) {
            txt_title = title.getAttribute('value');
            title_form = document.querySelector('.title_form')
            title_form.textContent = txt_title;
            $('body').css('overflow', 'hidden');
            $('.background_form').css('display', 'block');
            $('.forms-blocks').css('display', 'flex');
            $('.block_form').css('display', 'block');
        }

    })
}

$(".btn-close").click(function() {
    $('body').css('overflow', 'visible');
    $('.background_form').css('display', 'none');
    $('.forms-blocks').css('display', 'none');
    $('.block_form').css('display', 'none');

    title_form.textContent = "";  
})

const TOKEN = "6750852442:AAGXrm_FBj8yt1m152qkb133gwtS8uD10Ds";
const CHAT_ID = "-1002080149236";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;


document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();          
    message = `Заявка с сайта\n\n`;
    message += `Товаро: ${txt_title}\n`;
    message += `Клиент:  ${ this.name.value }\n`;
    message += `Email:  ${ this.email.value }\n`;
    message += `Телефон:  ${ this.telephone.value }\n`;
    message += `Сообщение:  ${ this.question.value }\n`;
    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mod: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = "";
        this.email.value = "";
        this.telephone.value = "";
        this.question.value = "";
        $('.block_form').css('display', 'none')
        $('.block_submitted-form').css('display', 'block')
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() =>{
        console.log('Конец')
    })
  })
  
  $('.btn_form_ok').click(function() { 
      $('.background_form').css('display', 'none');
      $('.forms-blocks').css('display', 'none');
      $('.block_submitted-form').css('display', 'none');
      $('body').css('overflow', 'visible');
  })