/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

console.log(data);
/*
Create the `showPage` function that accepts the parameters list and page which will create and insert the elements needed to display a "page" of nine students
Create a parameter with the class of '.student-list', and set it equal to an empty string to remove student previously displayed
*/

//this function will create page of 9 items per page
function showPage(list, page) {
   const studentList = document.querySelector(".student-list")
   studentList.innerHTML = '';

   for (let i=0; i < list.length; i++ ){
      const startIndex = page * 9 - 9;
      const endIndex = page * 9;
      if (i >= startIndex && i < endIndex) {
         let studentItem = 
         `
         <li class=student-item cf}>
         <div class="student-details">
           <img class="avatar" src=${list[i].picture.medium} alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class = 'email'>${list[i].email}</span>
         </div>
         <div "joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
         </div>
         </li> 
         `;

         studentList.insertAdjacentHTML('beforeend', studentItem);
      };
   };
};
//this function will add pagination to my app
function addPagination (list){
   const numOfPages = Math.ceil(list.length / 9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for (let i=1; i <= numOfPages; i++){
   const button = 
      `<li>
      <button type="button">${i}</button>
      </li>`;
//insert the DOM element
   linkList.insertAdjacentHTML('beforeend', button);
//create a variable that represents the first button and select it's active class  
   let firstButton = document.querySelector('li button');
   firstButton.className = 'active';
}; 
/*
Create an eventListener that will be become active when the button is clicked
If clicked, use existing active button to get rid of active class */
linkList.addEventListener('click', (e) =>{
   if (e.target.tagName === 'BUTTON'){
      let active_button = document.querySelector('.active'); 
      active_button.className = '';
      e.target.className ='active';
      showPage (list, e.target.textContent);
   }
});
}
//call functions to make data appear in each page 
showPage(data, 1);
addPagination(data);
