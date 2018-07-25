//--------------------------------------------------------
//TASK 1: Add the text 'List of Friends' to .title element  
//--------------------------------------------------------
var text = document.querySelector('.title').textContent = 'List of Friends';



//--------------------------------------------------------
//TASK 2: Put this array of strings as <li> elements
//        onto the friends list 
//
//     BONUS: do it in reverse order.
//--------------------------------------------------------

var friendsList = ['Jimmy G.', 'Scotty M.', 'Patty L.', 'Kelly F.', 'Kitty S.']

var listText = document.querySelector('.friends-list');
friendsList.reverse().forEach(function(item){
	var liText = "<li>" + item + "</li>";
	listText.innerHTML += liText;
});



//--------------------------------------------------------
//TASK 3: Make all of the text capitalized in the <li> elements with a 
//        class of 'urgent'
//     
//        BONUS: Capitalize AND make bold the elements with
//               a class of 'urgent' 
//--------------------------------------------------------

var taskList = document.querySelector('.task-list');
var listOfLi = taskList.getElementsByTagName('li');
var arrayList = Array.from(listOfLi);
arrayList.forEach(function(item){
	item.className = "urgent";
	item.innerHTML = "<strong>" + item.innerText  +"</strong>";
});





