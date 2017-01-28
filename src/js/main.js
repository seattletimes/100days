// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("./lib/qsa.js");

var switchTab = function(e) {
  if (e) e.preventDefault();
  $(".switch-tab.activated").forEach(t => t.classList.remove("activated"));
  this.classList.add("activated");
  // var id = this.getAttribute("href");
  // $(".players-by-line").forEach(t => t.classList.add("hidden"));
  // var shown = document.querySelector(id);
  // shown.classList.remove("hidden");

  var first = shown.querySelector(".player");
  var p = first.getAttribute("data-jersey");

  showDetail(p);
  selectPlayer.value = p;

};