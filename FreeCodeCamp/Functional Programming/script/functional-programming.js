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

const prepareGreenTea = () => 'greenTea';
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
console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

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
console.log(finalTabs.tabs);

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