let products = [
    {href: 'english_breakfast.html', text: 'Английский завтрак', images: ['english_breakfast.jpg'], price: '349 &#8381', info: '<p>Яичница с жареными грибами, беконом и подрумяненными тостами - завтрак <br> для тех, кто любит все английское.<br> Блюдо подается с домашним кетчупом и фасолью в томатном соусе.<br> Вкус впечатлит даже самого искушенного гурмана, проверено!<p> Состав: Глазунья, бекон, шампиньоны, хлеб тостовый, томат, салат Романо, фасоль, кетчуп домашний<p> Ккал: 628,6 Белки: 31,8 Жиры: 34,78 Углеводы: 44,82<p>Вес: 300 г'},
    {href: 'german_breakfast.html', text: 'Немецкий завтрак', images: ['german_breakfast.jpg'], price: '379 &#8381', info: '<p>Любимый завтрак, который способен пробудить любого даже от самого крепкого сна. Куриный купат, идеальная глазунья и картофельные драники с золотистой корочкой, которые так и манят.<p>Состав: Куриные купаты, глазунья, драник, хлеб тостовый, томат, салат Романо, кетчуп домашний<p> Ккал: 835,8 Белки: 31,5 Жиры: 44,32 Углеводы: 77,66<p>Вес: 400 г'},
    {href: 'skand_breakfast.html', text: 'Скандинавский завтрак', images: ['skand_breakfast.jpg'], price: '499 &#8381', info: '<p>Ох уж этот сырный соус, который способен влюбить в себя даже первого встречного. Мы бы назвали этот завтрак с лососем классическим, но вот соус – соус мы сделали неповторимо-вкусным. Такой вы точно не попробуете нигде!<p>Состав: Лосось, яйцо пашот, авокадо, чиабатта, микрозелень, зеленое масло, сырный соус<p> Ккал: 666,4 Белки: 22,05 Жиры: 44,65 Углеводы:43,76<p> Вес: 260 г'},
    {href: 'sirniki.html', text: 'Сырники со сметаной', images: ['sirniki.jpg'], price: '249 &#8381', info: '<p>Нежные сырники из обезжиренного творога, подаются со сметаной, клубничным соусом и ягодами смородины, с легкой приятной кислинкой<p>Состав: Творог, яйцо, мука, клубничный конфитюр, сметана, чёрная смородина<p> Ккал: 367,88 Белки: 23,32 Жиры: 10,36 Углеводы: 45,16'},
    {href: 'omlet.html', text: 'Омлет', images: ['omlet.jpg'], price: '329 &#8381', info: '<p>Сочный омлет из трех яиц, нежное куриное филе sous-vide и сливочный сыр. Блюдо, которое будет достойно внимания в любое время дня – много белка и мало углеводов, не это ли счастье?<p>Состав: Яйцо, молоко, куриное филе су-вид, сыр, авокадо, огурец маринованый, зеленое масло, микрозелень<p> Ккал: 354,4 Белки: 25,25 Жиры: 18,62 Углеводы: 21,01 <p>Вес: 280 г'},
    {href: 'skrambl.html', text: 'Скрэмбл с креветкой', images: ['skrambl.jpg'], price: '489 &#8381', info: '<p>Нежный скрэмбл, приготовленный по твоему любимому рецепту, креветки, спелые томаты и слегка пикантный соус из зеленого горошка. Что может быть вкуснее?<p>Состав: Яйцо, томаты, креветки королевские, чиабатта, шпинат, гуакомоле из гороха<p> Ккал: 676,4 Белки: 26,69 Жиры: 43,52 Углеводы: 43,41 <p>Вес: 330 г'},
    {href: 'bowl.html', text: 'Боул', images: ['bowl.jpg'], price: '259 &#8381', info: '<p>Твой идеальный боул на завтрак. Нежный творог в классическом сочетании со сметаной, гранолой, ягодами и спелыми фруктами.<p>Состав: Творог, сметана, клубничное варенье, персик, черная смородина, банан, апельсин, гранола, мята<p> Ккал: 343,58 Белки: 20,5 Жиры: 9 Углеводы: 45,92 <p>Вес: 280 г'},
    {href: 'poke_tunec.html', text: 'Поке с тунцом', images: ['poke_tunec.jpg'], price: '349 &#8381', info: '<p>Поке – классическая гавайская закуска на основе теплой подушки из риса, свежей рыбы, овощей и фруктов. Подушка из теплого риса, свежий тунец, редис, бобы Эмадаме и хрустящий лук фри, который придает структуру общему блюду и идеально сочетается с соусом на основе домашнего майонеза с Кимчи.<p>Состав: Рис, тунец, редис, икра Тобико, огурец, лук фри, бобы Эмадаме, зеленый горошек, кинза<p> Ккал: 473,57 Белки: 15,92 Жиры: 22,14 Углеводы: 52,86<p>Вес: 360 г'},
    {href: 'poke_losos.html', text: 'Поке с лососем', images: ['poke_losos.jpg'], price: '429 &#8381', info: '<p>Поке – классическая гавайская закуска на основе теплой подушки из риса, свежей рыбы, овощей и фруктов. В поке с лососем мы добавили авокадо, имбирь, водоросли чукка, маринованные огурцы и соус на основе домашнего майонеза с кимчи, что придает блюду небольшую пикантную остринку.<p>Состав: Рис, лосось, авокадо, имбирь, соус Кимчи, огурец, водоросли чукка, кинза, кунжут, икра Тобико, персик<p> Ккал: 441,59 Белки: 14 Жиры: 18,94 Углеводы: 52,39<p>Вес: 350 г'},
    {href: 'poke_krevetka.html', text: 'Поке с креветкой', images: ['poke_krevetka.jpg'], price: '439 &#8381', info: '<p>Поке – классическая гавайская закуска на основе теплой подушки из риса, свежей рыбы, овощей и фруктов. Поке с креветкой мы сделали более пикантным за счет добавления спелых томатов, кинзы, лайма и хрустящих начос. Креветки предварительно обжарили в соусе сладкий чили, а в качестве добавочного соуса использовали домашний майонез с Кимчи.<p>Состав: Рис, креветки тигровые, начос, авокадо, томат, соус сладкий чили, соус Кимчи, кинза, лайм<p> Ккал: 444,48 Белки: 12,73 Жиры: 22,07 Углеводы: 49,12<p>Вес: 410 г'},
    {href: 'poke_frukt.html', text: 'Поке фруктовый', images: ['poke_frukt.jpg'], price: '229 &#8381', info: '<p>Рай для любителей сладкого. Мы приготовили чиа-пудинг с добавлением спелых фруктов, клубничного варенья, темного шоколада и, конечно, с любовью нашего шефа.<p>Состав: Молоко кокосовое, семена чиа, банан, апельсин, персик, темный шоколад, клубничное варенье, мята, лайм.<p> Ккал: 550,6 Белки: 14,05 Жиры: 36,53 Углеводы: 37,93<pВес: 220 г'},
    {href: 'cesar.html', text: 'Цезарь с цыпленком', images: ['cesar.jpg'], price: '290 &#8381', info: '<p>Состав: Хлеб тостовый, куриное филе су-вид, томат, сыр Пармезан, микс салата, соус Цезарь<p>Вес: 200 г'},
    {href: 'grecheskiy.html', text: 'греческий салат', images: ['grecheskiy.jpg'], price: '270 &#8381', info: '<p>Состав: Огурец, томаты, лук красный, перец болгарский, сыр Фета, маслины, микс салата, соус Бальзамический<p>Вес: 200 г'},
    {href: 'chicken_soup.html', text: 'Куриный суп с яйцом', images: ['chicken_soup.jpg'], price: '139 &#8381', info: '<p>Ароматный бульон с куриным филе, яйцом и лапшой. Идеальное первое  блюдо в обед, а так же идеальный, например, субботний завтрак ;)<p>Состав: Куриный бульон, яйцо, куриное филе су-вид, лапша, лук репчатый, морковь, петрушка<p> Ккал: 276,35 Белки: 18,5 Жиры: 10,8 Углеводы:25,28<p>Вес: 320 г'},
    {href: 'Tom_Yam.html', text: 'Том Ям', images: ['tom-Yam.jpg'], price: '479 &#8381', info: '<p>Всеми любимый тайский суп, в который помимо кокосового молока мы добавили немного обычных сливок, чтобы сделать суп более наваристым. Особенно согревающее блюдо!<p>Состав: Кокосовое молоко, паста Том Ям, сливки, креветки тигровые, томат, шампиньоны, зелень, перец чили, корень галангала, лист лайма, лемонграсс, рис<p> Ккал: 472,42 Белки: 21,65 Жиры: 24,86 Углеводы: 41,89<p> присутствуют сливки животного происхождения<p>Вес: 470 г'},
    {href: 'borsch.html', text: 'Борщ', images: ['borsch.jpg'], price: '229 &#8381', info: '<p>То, что любит русская душа! Борщ, кстати, приготовлен с нежнейшей говядиной и, можно сказать, низкокаллориен, так как в его составе нет картофеля.<p>Состав: Капуста квашеная, бульон говяжий, говядина су-вид, морковь, свекла, лук репчатый, петрушка, сметана Подаётся с домашней сметаной.<p> Ккал: 195,84 Белки: 12,67 Жиры: 10,02 Углеводы: 15,35<p>Вес: 380 г'},
    {href: 'asian_lapsha.html', text: 'Азиатская лапша с курицей', images: ['asian_lapsha.jpg'], price: '329 &#8381', info: '<p>Самая сытная паста в твоей жизни. Пшеничная лапша, куриное филе, овощи, грибы шиитаке и все это в перечном соусе Терияки. Твой лучший обед!<p>Состав: Лапша лагман, куриное филе су-вид, грибы шиитаке, перец болгарский, лук красный, луп порей, соус перечный, соус Терияки, кинза<p> Ккал: 1123,32 Белки: 33,33 Жиры: 60,99 Углеводы: 118,82<p>Вес: 350 г'},
    {href: 'pasta_moreproduct.html', text: 'Паста с морепродуктами', images: ['pasta_moreproduct.jpg'], price: '399 &#8381', info: '<p>Изысканная паста тальятелле с румяными тигровыми креветками, нежным мясом кальмара и филе мидий в томатном соусе. Маленькая Италия в твоей тарелке!<p>Состав: Тальятелле, мидии, кальмар, креветки, томаты, лук репчатый, чеснок, петрушка, соус томатный<p> Ккал: 363,34 Белки: 25,19 Жиры: 4,35 Углеводы: 56,57<p>Вес: 330 г'},
    {href: 'karbonara.html', text: 'Карбонара', images: ['karbonara.jpg'], price: '329 &#8381', info: '<p>Популярнейшее блюдо итальянской кухни. Отварная паста Тальятелле с тонкими ломтиками хрустящего бекона и неповторимым соусом Карбонара, которым заправляется блюдо. Что может быть понятнее и вкуснее?<p>Состав: Тальятелле, бекон, сыр Грана Падано, яичный желток, сливки<p> Ккал: 940,8 Белки: 30,59 Жиры: 67,37 Углеводы: 53,56<p>Вес: 310 г'},
    {href: 'meatbol.html', text: 'Митболы из говядины', images: ['meatbol.jpg'], price: '339 &#8381', info: '<p>Мы больше, чем уверенны, что вы хоть раз в жизни ели фрикадельки в одноименных ресторанах одной небезызвестной мебельной швейцарской кампании. Так вот, наши митболы примерно в 1000 раз вкуснее!<p>Состав: Фарш говяжий, лук репчатый, картофель фри, сметана, соус томатный, микрозелень<p> Ккал: 1088,25 Белки: 34,59 Жиры: 65,25 Углеводы: 88<p>Вес: 340 г'},

]
function showModal(messageText, buttonText) {
    //alert('Извините, еще не готово...');
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modal.style.top = '100px';
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
        {href: 'products.html', text: 'Товары'},
        {href: 'contacts.html', text: 'Контакты'},
        {href: 'discount.html', text: 'Акции'},
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
            <div>${product.price}</div>
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
            <div class="price" onmouseover="ColorPrice(this)" onmouseout="ColorPrice1(this)">${products[i].price}</div>
            </a>
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