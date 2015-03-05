var pages = {
    Home: {pageUrl:'home.html', default: true},
    "About Us": {pageUrl:'about_us.html'},
    Services: {pageUrl:'services.html'},
    Contact: {pageUrl:'contact.html'}
};

$('document').ready(function() {
    createMenu(); // calls the function when the document is done loading
});

//create a function to .get pages, create and append navigation links
function createMenu() {
    
    var nav_bar_ul = $('.nav_bar ul'); //target element ul
    for(var i in pages) { 
        console.log("the index is " +i);
        var li = $('<li/>'); // create li
        var a = $('<a/>').text(i); // get key value names from object and create <a>
        (function(){
            var my_index = i;
            li.on("click","a",function(){
                var my_page = pages[my_index];
                load_page(my_page.pageUrl);
                });
            })();
        li.append(a); // append the <a> to the li element
        // or a.appendTo(li); // another way to append
        nav_bar_ul.append(li); // append created li to the div with the ul
        if(pages[i].default==true){ // if [i] finds default in pages,
            load_page(pages[i].pageUrl); // load that key values html page
        }
    }
}

function load_page(page_url){
    $.get(page_url,function(data){
        $('#main_content').html(data);
    });
}