// 1 task. Learn About Functional Programming

const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
	const teaCups = [];

	for (let cups = 1; cups <= numOfCups; cups += 1) {
		const teaCup = prepareTea();
		teaCups.push(teaCup);
	}
	return teaCups;
};

const tea4TeamFCC = getTea(40);

// 2 task. Understand Functional Programming Terminology

/* const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
	const teaCups = [];

	for (let cups = 1; cups <= numOfCups; cups += 1) {
		const teaCup = prepareTea();
		teaCups.push(teaCup);
	}
	return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
console.log(tea4GreenTeamFCC, tea4BlackTeamFCC); */

// 3 task. Understand the Hazards of Using Imperative Code

// tabs is an array of titles of each site open within the window
var Window = function (tabs) {
	this.tabs = tabs; // We keep a record of the array inside the object
};
// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
	this.tabs = this.tabs.concat(otherWindow.tabs);
	return this;
};
// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
	this.tabs.push('new tab'); // Let's open a new tab for now
	return this;
};
// When you close a tab
Window.prototype.tabClose = function (index) {
	// Only change code below this line
	var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
	var tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
	this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
	// Only change code above this line
	return this;
};
// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
	.tabOpen() // Open a new tab for cat memes
	.join(videoWindow.tabClose(2)) // Close third tab in video window, and join
	.join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);

// 4 task. Avoid Mutations and Side Effects Using Functional Programming

// The global variable
var fixedValue = 4;

function incrementer() {
	// Only change code below this line
	return fixedValue + 1;
	// Only change code above this line
}

// 5 task. Pass Arguments to Avoid External Dependence in a Function

// The global variable
var fixedValue = 4;
// Only change code below this line
function incrementer(value) {
	return value + 1;
	// Only change code above this line
}

// 6 task. Refactor Global Variables Out of Functions

// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
// Change code below this line
function add(originalArray, bookName) {
	var newArray = [...originalArray];
	newArray.push(bookName);
	return newArray;
	// Change code above this line
}
// Change code below this line
function remove(originalArray, bookName) {
	var newArray = [...originalArray];
	var book_index = newArray.indexOf(bookName);
	if (book_index >= 0) {

		newArray.splice(book_index, 1);
		return newArray;
		// Change code above this line
	}
}

var newBookList = add(bookList, 'A Brief History of Time');
console.log(newBookList);
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
console.log(newerBookList);
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(newestBookList);
console.log(bookList);

// 7 task. Use the map Method to Extract Data from an Array
// The global variable
var watchList = [
	{
		"Title": "Inception",
		"Year": "2010",
		"Rated": "PG-13",
		"Released": "16 Jul 2010",
		"Runtime": "148 min",
		"Genre": "Action, Adventure, Crime",
		"Director": "Christopher Nolan",
		"Writer": "Christopher Nolan",
		"Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
		"Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
		"Language": "English, Japanese, French",
		"Country": "USA, UK",
		"Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
		"Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
		"Metascore": "74",
		"imdbRating": "8.8",
		"imdbVotes": "1,446,708",
		"imdbID": "tt1375666",
		"Type": "movie",
		"Response": "True"
	},
	{
		"Title": "Interstellar",
		"Year": "2014",
		"Rated": "PG-13",
		"Released": "07 Nov 2014",
		"Runtime": "169 min",
		"Genre": "Adventure, Drama, Sci-Fi",
		"Director": "Christopher Nolan",
		"Writer": "Jonathan Nolan, Christopher Nolan",
		"Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
		"Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
		"Language": "English",
		"Country": "USA, UK",
		"Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
		"Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
		"Metascore": "74",
		"imdbRating": "8.6",
		"imdbVotes": "910,366",
		"imdbID": "tt0816692",
		"Type": "movie",
		"Response": "True"
	},
	{
		"Title": "The Dark Knight",
		"Year": "2008",
		"Rated": "PG-13",
		"Released": "18 Jul 2008",
		"Runtime": "152 min",
		"Genre": "Action, Adventure, Crime",
		"Director": "Christopher Nolan",
		"Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
		"Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
		"Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
		"Language": "English, Mandarin",
		"Country": "USA, UK",
		"Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
		"Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
		"Metascore": "82",
		"imdbRating": "9.0",
		"imdbVotes": "1,652,832",
		"imdbID": "tt0468569",
		"Type": "movie",
		"Response": "True"
	},
	{
		"Title": "Batman Begins",
		"Year": "2005",
		"Rated": "PG-13",
		"Released": "15 Jun 2005",
		"Runtime": "140 min",
		"Genre": "Action, Adventure",
		"Director": "Christopher Nolan",
		"Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
		"Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
		"Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
		"Language": "English, Urdu, Mandarin",
		"Country": "USA, UK",
		"Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
		"Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
		"Metascore": "70",
		"imdbRating": "8.3",
		"imdbVotes": "972,584",
		"imdbID": "tt0372784",
		"Type": "movie",
		"Response": "True"
	},
	{
		"Title": "Avatar",
		"Year": "2009",
		"Rated": "PG-13",
		"Released": "18 Dec 2009",
		"Runtime": "162 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "James Cameron",
		"Writer": "James Cameron",
		"Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
		"Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
		"Language": "English, Spanish",
		"Country": "USA, UK",
		"Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
		"Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
		"Metascore": "83",
		"imdbRating": "7.9",
		"imdbVotes": "876,575",
		"imdbID": "tt0499549",
		"Type": "movie",
		"Response": "True"
	}
];

// Only change code below this line
var ratings = watchList.map((item, index, array) => {
	return { title: item["Title"], rating: item["imdbRating"] }
});
/* for (var i = 0; i < watchList.length; i++) {
	ratings.push({ title: watchList[i]["Title"], rating: watchList[i]["imdbRating"] });
} */
// Only change code above this line
console.log(JSON.stringify(ratings));

// 8 task. Implement map on a Prototype

var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
	var newArray = [];
	// Only change code below this line
	for (let i = 0; i < this.length; i++) {
		newArray.push(callback(this[i], i, this))
	}
	// Only change code above this line
	return newArray;
};

var new_s = s.myMap(function (item, index, array) {
	return item * 2;
});
console.log(new_s);

// 9 task. Use the filter Method to Extract Data from an Array

// The global variable
var watchList = [
	{
		"Title": "Inception",
		"Year": "2010",
		"Rated": "PG-13",
		"Released": "16 Jul 2010",
		"Runtime": "148 min",
		"Genre": "Action, Adventure, Crime",
		"Director": "Christopher Nolan",
		"Writer": "Christopher Nolan",
		"Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
		"Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
		"Language": "English, Japanese, French",
		"Country": "USA, UK",
		"Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
		"Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
		"Metascore": "74",
		"imdbRating": "8.8",
		"imdbVotes": "1,446,708",
		"imdbID": "tt1375666",
		"Type": "movie",
		"Response": "True"
	},
	{
		"Title": "Interstellar",
		"Year": "2014",
		"Rated": "PG-13",
		"Released": "07 Nov 2014",
		"Runtime": "169 min",
		"Genre": "Adventure, Drama, Sci-Fi",
		"Director": "Christopher Nolan",
		"Writer": "Jonathan Nolan, Christopher Nolan",
		"Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
		"Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
		"Language": "English",
		"Country": "USA, UK",
		"Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
		"Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
		"Metascore": "74",
		"imdbRating": "8.6",
		"imdbVotes": "910,366",
		"imdbID": "tt0816692",
		"Type": "movie",
		"Response": "True"
	},
	{
		"Title": "The Dark Knight",
		"Year": "2008",
		"Rated": "PG-13",
		"Released": "18 Jul 2008",
		"Runtime": "152 min",
		"Genre": "Action, Adventure, Crime",
		"Director": "Christopher Nolan",
		"Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
		"Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
		"Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
		"Language": "English, Mandarin",
		"Country": "USA, UK",
		"Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
		"Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
		"Metascore": "82",
		"imdbRating": "9.0",
		"imdbVotes": "1,652,832",
		"imdbID": "tt0468569",
		"Type": "movie",
		"Response": "True"
	},
	{
		"Title": "Batman Begins",
		"Year": "2005",
		"Rated": "PG-13",
		"Released": "15 Jun 2005",
		"Runtime": "140 min",
		"Genre": "Action, Adventure",
		"Director": "Christopher Nolan",
		"Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
		"Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
		"Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
		"Language": "English, Urdu, Mandarin",
		"Country": "USA, UK",
		"Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
		"Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
		"Metascore": "70",
		"imdbRating": "8.3",
		"imdbVotes": "972,584",
		"imdbID": "tt0372784",
		"Type": "movie",
		"Response": "True"
	},
	{
		"Title": "Avatar",
		"Year": "2009",
		"Rated": "PG-13",
		"Released": "18 Dec 2009",
		"Runtime": "162 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "James Cameron",
		"Writer": "James Cameron",
		"Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
		"Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
		"Language": "English, Spanish",
		"Country": "USA, UK",
		"Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
		"Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
		"Metascore": "83",
		"imdbRating": "7.9",
		"imdbVotes": "876,575",
		"imdbID": "tt0499549",
		"Type": "movie",
		"Response": "True"
	}
];

// Only change code below this line
var filteredList = watchList
	.filter((item) => Number(item['imdbRating']) >= 8.0)
	.map((item) => {
		return {
			title: item['Title'],
			rating: item['imdbRating']
		}
	});
// Only change code above this line
console.log(filteredList);

// 10 task. Implement the filter Method on a Prototype

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
	// Only change code below this line
	var newArray = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			newArray.push(this[i]);
		}
	}
	// Only change code above this line
	return newArray;
};

var new_s = s.myFilter(function (item) {
	return item % 2 === 1;
});
console.log(new_s)

// 11 task. Return Part of an Array Using the slice Method

function sliceArray(anim, beginSlice, endSlice) {
	// Only change code below this line
	var newAnim = anim.slice(beginSlice, endSlice);
	return newAnim;
	// Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));

// 12 task. Remove Elements from an Array Using slice Instead of splice

function nonMutatingSplice(cities) {
	// Only change code below this line
	return cities.slice(0, 3);
	// Only change code above this line
}

var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

// 13 task. Combine Two Arrays Using the concat Method

function nonMutatingConcat(original, attach) {
	// Only change code below this line
	return original.concat(attach);
	// Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

// 14 task. Add Elements to the End of an Array Using concat Instead of push

function nonMutatingPush(original, newItem) {
	// Only change code below this line
	return original.concat(newItem);

	// Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

// 15 task. Use the reduce Method to Analyze Data

// The global variable
var watchList = [
	{
		"Title": "Inception",
		"Year": "2010",
		"Rated": "PG-13",
		"Released": "16 Jul 2010",
		"Runtime": "148 min",
		"Genre": "Action, Adventure, Crime",
		"Director": "Christopher Nolan",
		"Writer": "Christopher Nolan",
		"Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
		"Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
		"Language": "English, Japanese, French",
		"Country": "USA, UK",
		"Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
		"Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
		"Metascore": "74",
		"imdbRating": "8.8",
		"imdbVotes": "1,446,708",
		"imdbID": "tt1375666",
		"Type": "movie",
		"Response": "True"
	},
	{
		"Title": "Interstellar",
		"Year": "2014",
		"Rated": "PG-13",
		"Released": "07 Nov 2014",
		"Runtime": "169 min",
		"Genre": "Adventure, Drama, Sci-Fi",
		"Director": "Christopher Nolan",
		"Writer": "Jonathan Nolan, Christopher Nolan",
		"Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
		"Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
		"Language": "English",
		"Country": "USA, UK",
		"Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
		"Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
		"Metascore": "74",
		"imdbRating": "8.6",
		"imdbVotes": "910,366",
		"imdbID": "tt0816692",
		"Type": "movie",
		"Response": "True"
	},
	{
		"Title": "The Dark Knight",
		"Year": "2008",
		"Rated": "PG-13",
		"Released": "18 Jul 2008",
		"Runtime": "152 min",
		"Genre": "Action, Adventure, Crime",
		"Director": "Christopher Nolan",
		"Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
		"Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
		"Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
		"Language": "English, Mandarin",
		"Country": "USA, UK",
		"Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
		"Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
		"Metascore": "82",
		"imdbRating": "9.0",
		"imdbVotes": "1,652,832",
		"imdbID": "tt0468569",
		"Type": "movie",
		"Response": "True"
	},
	{
		"Title": "Batman Begins",
		"Year": "2005",
		"Rated": "PG-13",
		"Released": "15 Jun 2005",
		"Runtime": "140 min",
		"Genre": "Action, Adventure",
		"Director": "Christopher Nolan",
		"Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
		"Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
		"Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
		"Language": "English, Urdu, Mandarin",
		"Country": "USA, UK",
		"Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
		"Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
		"Metascore": "70",
		"imdbRating": "8.3",
		"imdbVotes": "972,584",
		"imdbID": "tt0372784",
		"Type": "movie",
		"Response": "True"
	},
	{
		"Title": "Avatar",
		"Year": "2009",
		"Rated": "PG-13",
		"Released": "18 Dec 2009",
		"Runtime": "162 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "James Cameron",
		"Writer": "James Cameron",
		"Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
		"Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
		"Language": "English, Spanish",
		"Country": "USA, UK",
		"Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
		"Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
		"Metascore": "83",
		"imdbRating": "7.9",
		"imdbVotes": "876,575",
		"imdbID": "tt0499549",
		"Type": "movie",
		"Response": "True"
	}
];

function getRating(watchList) {
	// Only change code below this line
	var filterRating = watchList.filter((item) => item['Director'] === 'Christopher Nolan')
		.map((item) => Number(item['imdbRating']))
	var sumRating = filterRating.reduce((accum, item, index, array) => accum + item);
	var averageRating = sumRating / filterRating.length;
	// Only change code above this line
	return averageRating;
}
console.log(getRating(watchList));

// 16 task. Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

const squareList = arr => {
	// Only change code below this line
	return arr.filter((item) => item >= 0 && Number.isInteger(item)).map((item) => Math.pow(item, 2));
	// Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// 17 task. Sort an Array Alphabetically using the sort Method

function alphabeticalOrder(arr) {
	// Only change code below this line
	return arr.sort(function (a, b) {
		return a === b ? 0 : a > b ? 1 : -1;
	});
	// Only change code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

// 18 task. Return a Sorted Array Without Changing the Original Array

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
	// Only change code below this line
	var newArray = [].concat(arr);
	return newArray.sort(function (a, b) { return a - b });
	// Only change code above this line
}
console.log(nonMutatingSort(globalArray));

// 19 task. Split a String into an Array Using the split Method

function splitify(str) {
	// Only change code below this line
	return str.split(/[^A-Za-z]/)

	// Only change code above this line
}
console.log(splitify("Hello World,I-am code"));

// 20 task. Combine an Array into a String Using the join Method

function sentensify(str) {
	// Only change code below this line
	return str.split(/[^A-z]/).join(' ')

	// Only change code above this line
}
console.log(sentensify("May-the-force-be-with-you"));

// 21 task. Apply Functional Programming to Convert Strings to URL Slugs

// Only change code below this line
function urlSlug(title) {

	return title.trim().toLowerCase().split(' ').filter((item) => item !== '').join('-');

}
// Only change code above this line
console.log(urlSlug(' Winter Is  Coming'));

// 22 task. Use the every Method to Check that Every Element in an Array Meets a Criteria

function checkPositive(arr) {
	// Only change code below this line
	return arr.every(item => item > 0);

	// Only change code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]));

// 23 task. Use the some Method to Check that Any Elements in an Array Meet a Criteria

function checkPositive(arr) {
	// Only change code below this line
	return arr.some(item => item > 0);

	// Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);

// 24 task. Introduction to Currying and Partial Application

function add(x) {
	// Only change code below this line
	return function (y) {
		return function (z) {
			return x + y + z;
		}
	}
	// Only change code above this line
}
console.log(add(10)(20)(30));