const userlist = document.querySelector('#addposition');
const form = document.querySelector('#addcard');
const Addti = document.querySelector('#addtime');
const AddHome = document.querySelector('#addhome');
const AddLogo = document.querySelector('#addlogo');
const AddSkills = document.querySelector('#addskills');
function renderUser(doc){
let h2 = document.createElement('h2');
let li = document.createElement('li');
let h1 = document.createElement('h1');
let img = document.createElement('img');
let button =document.createElement('button');





let companyLogo = document.createElement('img');
let position = document.createElement('p');
let jobType = document.createElement('li');
let country = document.createElement('li');
let companyName = document.createElement('p');
let skills = document.createElement('btn1');

img.setAttribute('data-id',doc.id);
li.setAttribute('data-id',doc.id);
h2.setAttribute('data-id', doc.id);
h1.setAttribute('data-id',doc.id);
position.textContent = doc.data().position;
jobType.textContent = doc.data().jobType;
country.textContent = doc.data().country;
companyName.textContent = doc.data().companyName;
companyLogo.textContent = doc.data().companyLogo;
skills.textContent = doc.data().skills;

h1.appendChild(companyName);
h2.appendChild(position);
li.appendChild(jobType);
li.appendChild(country);
img.appendChild(companyLogo);
button.appendChild(skills);

userlist.appendChild(h2);
Addti.appendChild(li);
AddHome.appendChild(h1);
AddLogo.appendChild(img);
AddSkills.appendChild(button);
}
//getting data





db.collection('jobs').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderUser(doc);
    })
})

db.collection("jobs").where("HTML", "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });