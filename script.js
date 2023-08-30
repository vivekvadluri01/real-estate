window.addEventListener("scroll",function()
{
    let form = document.querySelector(".enquiry");
    if (window.scrollY<=1450)
    {
        form.classList.remove('sticky');
    }
    else{
        form.classList.add('sticky');
    }

});