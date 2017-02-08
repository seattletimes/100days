// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");


var $ = require("./lib/qsa.js");

var planItems = $(".plan-item");
var filterInputs = $(".plan-filter");

var changeFilter = function() {
  var checked = $(".plan-filter:checked");
  var categories = checked.map(check => check.id);
  if (!categories.length) categories = ["completed", "in-progress", "incomplete"];
  planItems.forEach(function(item) {
    var cat = item.getAttribute("data-category");
    if (categories.indexOf(cat) > -1) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
};

filterInputs.forEach(el => el.addEventListener("change", changeFilter));
changeFilter();

var moment = require("moment");

var lastDay = moment("2017-04-29", "YYYY-MM-DD");
var now = moment([]);
var difference = lastDay.dayOfYear() - now.dayOfYear();

document.querySelector(".days-remaining").innerHTML = difference;