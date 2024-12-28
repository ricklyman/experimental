let html = "";
let card = document.createElement('div');
let elem = document.getElementById('displayUsers');

fetch("https://reqres.in/api/users/23")
    .then(response => {
        // handle the response
    if(!response.ok){
        //console.log('A: ' + response.status);
        throw new Error(`There was an error with status of ${response.status}`)
        }
        let usersJson = response.json();
        //console.log('usersJson' + usersJson);
        //return usersJson;
    })
    .catch(error => {
        // handle the error
        console.log(error);
    let elem = document.getElementById('displayUsers');
    card.innerHTML = error;
    elem.append(card);	

    });


const makeRequest = async () => {
    try {
        let response = await fetch("https://reqres.in/api/users"); //https://reqres.in/api/users/23
        //let response = await localStorage.getItem("https://reqres.in/api/users");
        //console.log('A: ' + Object.keys(response));
                response.ok = true; //temp
               response.status = "200"; //temp		
               if(!response.ok){
                   console.log('B: ' + Object.keys(response));
                   if(response.status == '404') {
                   let elem = document.getElementById('displayUsers');
                   card.innerHTML = '</h1>Page not found: ' + response.status + '</h1>';
                   elem.append(card);	
                   }
                   throw new Error(`There was an error with status of ${response.status}`)
               }
               // let usersJson = response.json();
        let usersJson = JSON.parse(response);
        console.log('usersJson B: ' + usersJson);
        return usersJson;
    }
    catch (error) {
             //console.log(error);
         	if(response.status == '404') {
         		let elem = document.getElementById('displayUsers');
                 card.innerHTML = '</h1>Page not found: ' + response.status + '</h1>';
                 elem.append(card);
         		}
            //card.innerHTML =  '</h1>' + error + '</h1>';
            //elem.append(card);
        throw new Error(`There was an error with status of ${response.status}`)
        //throw new Error(`There was an error with status of ${error}`)
    }
}

const anotherFunc = async () => {
    let response = await makeRequest(); //ToDo //usersJSON not response ...
    //console.log('C: response: ' + response);
    if (!response.ok) { //usersJSON
       card.innerHTML = '</h1>Page not found: ' + response.status + '</h1>';
       elem.append(card);
       throw new Error(`There was an error with status of ${response.status}`)
    }
    //console.log('C: ');
    //console.log(response);
    //console.log(response.data);
    //console.log(response.data.length);
    for (i = 0; i < response.data.length; i++) {
        //console.log(response.data[i]);	
        //console.log(response.data[i].email);
        //console.log(response.data[i].first_name);
        //console.log(response.data[i].last_name);
        //console.log(response.data[i].avatar);
        createHTML(i, response.data[i].first_name, response.data[i].last_name, response.data[i].email, response.data[i].avatar);
    }
    displayUser();
}

console.log(anotherFunc());

const createHTML = function (i, first_name, last_name, email, avatar) {
    //console.log(response.data[i].email);
    //console.log(response.data[i].first_name);
    //console.log(response.data[i].last_name);
    //console.log(response.data[i].avatar);
    //let html = "" 
    if (i == 0 || i == 3) {
        html = html + '<div id="displayUsersRow' + i + '" class="row">'
    }
    html = html + '<div id="user' + i + '  " class="card border-primary mb-3 pt-2 mx-auto" style="width: 18rem;">'
    html = html + '  <img class="card-img-top" src="' + avatar + '" alt="' + first_name + ' ' + last_name + '">'
    html = html + '  <div class="card-body">'
    html = html + '    <p class="card-text"><strong>' + first_name + ' ' + last_name + '</strong><br><em>' + email + '</em></p>'
    html = html + '  </div>'
    html = html + '</div>'
    if (i == 2 || i == 5) {
        //card.innerHTML = html;
        html = html + '</div>'
    }
    //	elem.append(card);
}

const displayUser = function () {
    console.log('html: ' + html);
    card.innerHTML = html;
    elem.append(card);
    //elem.innerHTML = elem.innerHTML + html;
}


id="displayUsers"





