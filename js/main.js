function sp(){
	var arr1 = document.getElementsByClassName('spoyler__content_title');
	console.log(Array.from(arr1));

	if(this.classList.contains("active")){

        this.classList.remove("active");
        this.nextElementSibling.style.maxHeight = null;
    }else{
         Array.from(arr1).forEach(function(item, index, array) {
     item.classList.remove("active");
     item.nextElementSibling.style.maxHeight = null;
    });
        this.classList.add("active");
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
        
        //console.log(this.nextElementSibling);
    }
	//console.log(this.classList.add("active"));
}
var arr = document.getElementsByClassName('spoyler__content_title');
//console.log(arr);
Array.from(arr).forEach(function(item, index, array) {
 item.addEventListener('click', sp)
});
let user = {     // объект
  name: "John",  // под ключом "name" хранится значение "John"
  age: 30        // под ключом "age" хранится значение 30
};
console.log(user.name);
let recipes = {
    recipe1:{
        title: "Утинные ножки с овощами и грудинкой",
        img_background: "images/recipies/r1.jpg",
        img_face: "images/cat.jpg",
        name: "Daria Fedorenko",
        time: "240",
        complexity: "Сложно",
        kcal: "125",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci qui nisi, sint culpa nulla hic, vero dolore magnam deserunt ipsum dolor sit amet, consectetur adipisicing quos!",
        like: "15"
    },
    recipe2:{
        title: "Наварен из говядины",
        img_background: "images/recipies/r4.jpg",
        img_face: "images/cat.jpg",
        name: "Daria Fedorenko",
        time: "150",
        complexity: "Сложно1",
        kcal: "150",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci qui nisi, sint culpa nulla hic, vero dolore magnam deserunt ipsum dolor sit amet, consectetur adipisicing quos!",
        like: "19"
    }
}
var arrRecipes = document.getElementsByClassName('recipes__recipe_row');
var q = '';

Array.from(arrRecipes).forEach(function(item, index, array) {
// console.log(item.innerHTML);
item.innerHTML = '';
let counter = 0;
for (var recipe in recipes) {
      
       q =  `<div class="recipes__recipe_element">
                <div class="recipe">
    
        <div class="recipe__row">
            <div class="recipe__element recipe__img">
                <div class="recipe__img_img">
                        <img src="${recipes[recipe].img_background}" alt="" >
                </div>
                <div class="recipe__img_row">
                    <div class="recipe__img_hidden"></div>
                    <div class="recipe__img_footer">
                        <div class="footer__row">
                            <div class="footer__row_element footer__row_img"> 
                                <img src="${recipes[recipe].img_face}" alt="" >
                            </div>
                            <div class="footer__row_element footer__row_name">
                                <span >${recipes[recipe].name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recipe__element recipe__content">
                <a href="" class="recipe__content_title">
                    <div>${recipes[recipe].title}</div>
                </a>
                <div class="recipe__content_conditions">
                    <div class="conditions__row">
                        <div class="conditions__element conditions__content1">
                            <img src="images/recipie/r1.png" alt="">
                            <span>${recipes[recipe].time} мин</span>
                        </div>
                        <div class="conditions__element conditions__content1">
                            <img src="images/recipie/r2.png" alt="">
                            <span>${recipes[recipe].complexity}</span>
                        </div>
                        <div class="conditions__element conditions__content1">
                            <img src="images/recipie/r3.png" alt="">
                            <span>${recipes[recipe].kcal} ккал</span>
                        </div>
                    </div>
                </div>
                <a href="" class="recipe__content_text">
                    <div >
                        ${recipes[recipe].text}...
                    </div>
                </a>
                <div class="recipe__content_footer">
                    <div class="recipefooter__row">
                        <div class="recipefooter__element recipefooter__like">
                            <a href=""><img src="images/recipie/r4.png" alt=""></a>
                            <span class="recipefooter__counter">${recipes[recipe].like}</span>
                        </div>
                        <div class="recipefooter__element recipefooter__social">
                            <a href=""><img src="images/recipie/r5.png" alt=""></a>
                            <a href=""><img src="images/recipie/r6.png" alt=""></a>
                            <a href=""><img src="images/recipie/r7.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
</div>
            </div>`;
        //console.log('like = ' + recipes[recipe].like);
        counter++;
        console.log(counter)
   item.innerHTML += q;
    //console.log(recipe.toString());
}



});










for (var recipe in recipes) {
        
        /*    console.log(`<tr onclick = "app.pages.contacts.goToUser('${recipes[recipe].title}')">
        <td>${recipes[recipe].like}</td>
        <td>${recipes[recipe].kcal}</td>
        <td>${recipes[recipe].title}</td>
        </tr>`)*/
        //console.log('like = ' + recipes[recipe].like);
   
    //console.log(recipe.toString());
}
