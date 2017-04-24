var PieChart = require("../models/pieChart")

var GraphView = function(typeOption,filterOption){
  this.typeOption = typeOption
  this.filterOption = filterOption
}

GraphView.prototype = {

  render: function(team,){
    var wins = team.wins
    var draws = team.draws
    var losses = team.losses
    var graphElement = document.querySelector("#graph-div")
    var graphTitle = "Results for " + team.teamName
    console.log(team)
    var data = [{
      name: "Results",

      data: [
        {
          name: "Won",
          y: wins,
          color: "#46c645"
        },
        {
          name: "Drawn",
          y: draws,
          color: "#Fede3b"
        },
        {
          name: "Lost",
          y: losses,
          color: "#e34a49"
        }
      ]

    }]

    new PieChart(graphElement, graphTitle, data)
  }

}


module.exports = GraphView