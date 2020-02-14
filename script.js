var els = document.getElementsByClassName('trigger-collapse');
var loader = document.getElementById('loader');
loader.style.display = 'none';
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

document.getElementById("hiderSidebar").title = "Hide sidebar";
if(window.innerWidth < 400) {
    document.getElementById("hiderSidebar").firstElementChild.innerText = "chevron_right";
    document.getElementById("hiderSidebar").title = "Show sidebar";
}

const hideSidebar = function()
{
    console.log("Window width", window.innerWidth);
    var sidebar = document.getElementsByClassName("sidebar")[0];
    console.log("Sidebar width", sidebar.style.width);
    var trigger = document.getElementById("hiderSidebar");
    if (sidebar.style.width == '300px' || sidebar.style.width == '') {
        sidebar.style.width = "0px";
        trigger.firstElementChild.innerText = "chevron_right";
        document.getElementById("hiderSidebar").title = "Show sidebar";
    } else {
        sidebar.style.width = "300px";
        trigger.firstElementChild.innerText = "chevron_left";
        document.getElementById("hiderSidebar").title = "Hide sidebar";
    }
}

const sendRequest = function(uri)
{
    loader.style.display = 'block';
    var request = new XMLHttpRequest();
    request.open('GET', uri, true);
    var json = {};
    request.onload = function() {
        json = JSON.parse(request.response);
        document.getElementById("result").innerText = JSON.stringify(request.response);
        document.getElementById("username").innerText = json.login
        document.getElementById("email").innerText = json.bio
        document.getElementById("userprofile").src = json.avatar_url
        loader.style.display = 'none';
        console.log(json.avatar_url)
    }
    request.send()
}

sendRequest('https://api.github.com/users/augustohtpereira');