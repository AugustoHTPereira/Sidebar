var els = document.getElementsByClassName('trigger-collapse');
console.log('Found', els.length)
for(let i = 0; i < els.length; i++)
{
    els[i].onclick = function() {
        if (els[i].parentElement.classList.contains('active'))
        {
            els[i].parentElement.classList.remove('active');
        }
        else 
        {
            els[i].parentElement.classList.add('active');
        }
        console.log(els[i]);
    }
}