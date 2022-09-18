/* elements */
var elements = document.querySelectorAll('.watch');
var items = document.querySelectorAll('.item');

/* callback */
var callback = function(items){
    items.forEach((item) => {
        if(item.isIntersecting){
            item.target.classList.add("in-page");
        }else{
            item.target.classList.remove("in-page");
        }
    });
}

/* observer */
var observer = new IntersectionObserver(callback, { threshold: 0.6 });
var navObserver = new IntersectionObserver(callback, { threshold: 0.9 });

/* apply */
elements.forEach((element) => {
    observer.observe(element);
});
items.forEach((element) => {
    navObserver.observe(element);
});