let products = [
    {href: 'discount1.html', text: 'Счастливые часы -50% по вечерам в PRIMETIME!', images: ['discount1.webp'], info: '<p>Акция "Счастливые часы" позволяет гостю приобрести с 50% скидкой готовое блюдо с фирменной витрины в определенные часы. У каждого заведения определенные временные рамки которые могут не пересекаться с другими кофейнями. Акция распространяется только на готовую продукцию сети кофеен PRIMETIME не включая десерты и конфеты.'},
    {href: 'discount2.html', text: 'Комбо «КОФЕ+КОМПЛЕКСНЫЙ ЗАВТРАК»', images: ['discount2.webp'], info: '<p>Мы не устаем вас радовать и на этот раз решили подготовить приятный сюрприз для тех, кто любит наши завтраки.<p>Заходите и пробуйте наши завтраки по пути на работу, учебу, деловую встречу — мы всегда рады накормить вас. Завтраки готовим в течение всего дня, а к комплексным до 12:00 в подарок кофе на выбор — Латте, Капучино или Американо.'},
    {href: 'discount3.html', text: 'Комбо «КОФЕ+СЭНДВИЧ»', images: ['discount3.webp'], info: '<p>Мы с радостью напоминаем вам о том, что на любом точек нашей сети вы можете приобрести супер комбо «КОФЕ+СЭНДВИЧ» за заманчивую стоимость в 179₽<p>В акции участвуют следующие позиции сэндвичей:<p>Сэндвич ветчина и сыр<p>Сэндвич курица и песто<p>Cэндвич цезарь<p>Сэндвич тунец<p>и яйцо И следующие позиции кофе, объёмом 250мл:<p>АМЕРИКАНО<p>ЛАТТЕ<p>КАПУЧИНО'},
]
function showModal(messageText, buttonText) {
    //alert('Извините, еще не готово...');
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modal.style.top = '30px';
    modal.style.left = '40%';
    modal.style.transform = 'scale(1)';

    let message = modal.getElementsByClassName('message')[0];
    message.innerHTML = messageText;
    let button = modal.getElementsByTagName('button')[0];
    button.innerHTML = buttonText;
 
    document.body.style.overflow = 'auto';
    let = overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
 
    return false;
 
 
 }
 function hideModal() {
     let modal = document.getElementsByClassName('modal')[0];
     setTimeout(function(){
         modal.style.visibility = 'hidden'
     }, 350);
     modal.style.opacity = '0';
     modal.style.top = '100%';
     modal.style.transform = 'scale(1)';
 
     document.body.style.overflow = 'auto';
     let = overlay = document.getElementsByClassName('overlay')[0];
     setTimeout(function(){
         overlay.style.visibility = 'hidden';
     }, 200);
     overlay.style.opacity = '0';
 
     
 }

function notReadyAlert() {
    alert('Извините, еще не готово!');
    return false;
}
 
function search() {
    let cards = document.getElementsByClassName('card');
    let name = document.getElementById('search').value;
    let nameRegExp = new RegExp(name, 'i');
    for (let i = 0; i<products.length; i++) {
       let product = products[i];
       if(nameRegExp.test(product.text)) {
          let card = cards[i];
          card.style.border = '3px dashed blue';
          card.style.display = 'inline-block';
 
          setTimeout(function(){
             card.style.border = 'none';
             card.style.backgroundcolor = '';
          }, 2000);
       }
    }
 }

 

function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML='';
 
    let items = [
        {href: 'rgr.html', text: 'Товары'},
        {href: 'contacts.html', text: 'Контакты'},
        {href: 'promotions.html', text: 'Акции'},
    ];
 
    for(let i=0; i<items.length; i++) {
        let link = document.createElement('a');
        link.innerText = items[i].text;
        link.href = items[i].href;
        if(items[i].href == '') {
            link.addEventListener('click', notReadyAlert);
        }
 
        let menuItem = document.createElement('li');
        menuItem.appendChild(link);
 
        menu.appendChild(menuItem);
    }
}
function showProductInfo(product) {
    let imagesList = '';
    for(let i=0; i<product.images.length; i++){
        imagesList = imagesList + `<div><img src="${product.images[i]}"></div>`
    }
        showModal(`
            ${imagesList}
            <div>${product.text}</div>
            <div><i>${product.info}</i></div>
            `, 'Закрыть');
        }
        function generateCard() {
            let main = document.querySelector('main');
            for(let i = 0; i<products.length; i++){
               let product = document.createElement('div');
               product.className= 'card';
               product.innerHTML = `
               <a href="#">
                  <div class="image"><img src="${products[i].images[0]}" class="scale"></div>
                  <div class="product-name">"${products[i].text}"</div>
                  `;
               product.querySelector('a').addEventListener('click', function(){
                  showProductInfo(products[i]);
               });
         
               main.appendChild(product);
            }
         }


function loaded() {
 let searchbox = document.getElementById('search');
 searchbox.addEventListener('keydown', function (key) {
     if(key.key == 'Enter')
     search();
 });
 
    generateMenu();
    generateCard();
 
}


