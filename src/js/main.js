// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");


var $ = require("./lib/qsa.js");

var section = $("[data-topic]");
var planItems = $(".plan-item");
var filterInputs = $(".plan-filter");
var topicSelect = $.one("select.topics");

var changeFilter = function() {
  var checked = $(".plan-filter:checked");
  var categories = checked.map(check => check.id);
  if (!categories.length) categories = ["completed", "developing", "broken", "incomplete", "stymied"];
  planItems.forEach(function(item) {
    var cat = item.getAttribute("data-progress");
    if (categories.indexOf(cat) > -1) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
};


var changeTopic = function() {
  //get topicSelect value
  var value = topicSelect.value;
  //loop through all non-hidden items
  section.forEach(function(item) {
    var topic = item.getAttribute("data-topic");
    if (topic == value || !value){
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  })
};

var findEmpty = function() {
  section.forEach(function(s) {
    var visible = $(".plan-item:not(.hidden)", s)
    if (!visible.length) {
      s.classList.add("hidden");
    }
  })
};

var applyFilters = function() {
  changeFilter();
  changeTopic();
  findEmpty();
}

filterInputs.forEach(el => el.addEventListener("change", applyFilters));
topicSelect.addEventListener("change", applyFilters);
applyFilters();

//finding days remaining
// var moment = require("moment");

// var lastDay = moment("2017-04-29", "YYYY-MM-DD");
// var now = moment([]);
// var difference = lastDay.dayOfYear() - now.dayOfYear();

// var firstDay = moment("2017-01-20", "YYYY-MM-DD");
// var currentDay = ( now.dayOfYear() - firstDay.dayOfYear() ) + 1;


// document.querySelector(".days-remaining").innerHTML = difference;
// document.querySelector(".currentDay").innerHTML = currentDay;