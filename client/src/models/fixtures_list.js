var Fixture = require('./fixture.js')
var visibleUpcomingGamesStorage = JSON.parse(localStorage.getItem('storedUpcomingGames')) || []

var mappedStorage = visibleUpcomingGamesStorage.map(function(fixture){
  return fixture.homeTeamName
}) 

var FixturesList = function() {
  this.fixtures = null
  this.fixturesWithCoords = null
}

FixturesList.prototype = {

  makeRequest: function(requestType, url, callback){
          var request = new XMLHttpRequest()
          request.open(requestType, url)
          request.setRequestHeader('X-Auth-Token', '3fbc8336da93422fa82dc90ab1808606')
          request.onload = callback
          request.send()
    },

  getData: function(callback) {
      this.makeRequest('GET', 'http://api.football-data.org/v1/competitions/426/fixtures', function(){
        if(this.status !== 200) return
        var jsonFavs = this.responseText
        var fixtures = JSON.parse(jsonFavs)
        this.fixtures = fixtures
        callback(fixtures)
      })
    },

  allCoordinates: function(callback){
    var request = new XMLHttpRequest()
    request.open('GET', "http://localhost:3000/api/fixtures")
    
    request.onload = function(){
      var jsonString = this.responseText;
      this.fixturesWithCoords = JSON.parse(jsonString);

      console.log(this.fixturesWithCoords)

      var fixtureToRender = this.fixturesWithCoords.filter(function(fixture){
        return mappedStorage.includes(fixture.homeTeamName) 
      })
      callback(fixtureToRender)
    }
    request.send()
  }
}


module.exports = FixturesList