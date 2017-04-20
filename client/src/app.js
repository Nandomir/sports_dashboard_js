var LeagueTable = require("./models/league_table")
var LeagueTableView = require("./views/league_table_view")

var app = function(){

  var leagueTable = new LeagueTable()
  var leagueTableView = new LeagueTableView()

  leagueTable.getData(function(table){
    leagueTableView.render(table)
  })




}

window.onload = app