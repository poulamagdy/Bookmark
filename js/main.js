var bookmark = document.getElementById("bookmarkinp");
var url = document.getElementById("urlinp");

var bookmarklist;

if (localStorage.getItem("myvalue") != null)
{
    bookmarklist = JSON.parse(localStorage.getItem("myvalue"));
    displayvalue(bookmarklist);
}
else
{
    bookmarklist=[];
}

function addvalue()
{
    if (validationbookmark() == true && validationurlurl() == true)
    {
        var product = {
            name : bookmark.value,
            link : url.value
        };
    
        bookmarklist.push(product);
        localStorage.setItem("myvalue", JSON.stringify(bookmarklist));
        displayvalue(bookmarklist);
        clearvalue();
    }
    else
    {
        alert(`Site Name or Url is not valid, Please follow the rules below :

        Site name must contain at least 3 characters
        Site URL must be a valid one`);
    }  
}

function displayvalue(date)
{
    var cartona = ``;
    for (var i = 0; i < date.length; i++)
    {
       var x = i;
       x++
        cartona += `<tr>
        <td>${x}</td>
        <td>${date[i].name}</td>
        <td><button class="btn btn-warning btn-sm text-white btn-color"><i class="fa-solid fa-eye pe-2"></i> <a href="${date[i].link}" target="_blank">Visit</a></button></td>
        <td><button class="btn btn-danger btn-sm" onclick="deletevalue(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>`
    }
    document.getElementById("mybookmark").innerHTML = cartona
}

function clearvalue()
{
    bookmark.value = "";
    url.value = "";
}

function deletevalue(index)
{
    bookmarklist.splice(index,1);
    localStorage.setItem("myvalue", JSON.stringify(bookmarklist));
    displayvalue(bookmarklist);
}

function validationbookmark()
{
    regx = /^([A-Z]|[a-z]){3,}$/;
    if (regx.test(bookmark.value) == true)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function validationurlurl()
{
    regx = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)$/
    if (regx.test(url.value) == true)
    {
        return true;
    }
    else
    {
        return false;
    }
}