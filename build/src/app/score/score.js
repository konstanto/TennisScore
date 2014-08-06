angular.module('ngBoilerplate.score', [
  'ui.router',
  'plusOne'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('score', {
      url: '/score',
      views: {
        'main': {
          controller: 'ScoreCtrl',
          templateUrl: 'score/score.tpl.html'
        }
      },
      data: { pageTitle: 'score' }
    });
  }
]).controller('ScoreCtrl', [
  '$scope',
  '$http',
  function ScoreController($scope, $http) {
    var me = $scope;
    me.pointArray = [
      '0',
      '15',
      '30',
      '40',
      'Ad'
    ];
    me.scoreData = {
      players: [
        {
          name: 'Player 1',
          point: 0,
          party: 0,
          set: 0,
          tieBreak: 0
        },
        {
          name: 'Player 2',
          point: 0,
          party: 0,
          set: 0,
          tieBreak: 0
        }
      ],
      isTiebreak: 0
    };
    me.isLoaded = false;
    if (!me.isLoaded) {
      $http.get('http://konstantyner.org/tennissporten/score.json').then(function (response) {
        var data = response.data;
        me.scoreData.isTiebreak = data.isTiebreak;
        for (var i = 0; me.scoreData.players.length > i; i++) {
          me.scoreData.players[i].point = data.players[i].point;
          me.scoreData.players[i].party = data.players[i].party;
          me.scoreData.players[i].set = data.players[i].set;
          me.scoreData.players[i].tieBreak = data.players[i].tieBreak;
        }
        me.isLoaded = true;
      });
    }
    me.players = me.scoreData.players;
    me.sendToServer = function () {
      if (me.isLoaded) {
        $http({
          method: 'POST',
          url: 'http://konstantyner.org/tennissporten/tennisScore.php',
          data: 'players=' + angular.toJson(me.scoreData),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
      }
    };
    me.changeGameType = function () {
      if (me.scoreData.isTiebreak === 0) {
        me.scoreData.isTiebreak = 1;
      } else {
        me.scoreData.isTiebreak = 0;
      }
      me.sendToServer();
    };
    me.decreasePoint = function (player) {
      if (player.point > 0) {
        player.point--;
      }
      me.sendToServer();
    };
    me.increasePoint = function (player, playerNumber) {
      var otherPlayerId = playerNumber === 0 ? 1 : 0;
      var otherPlayer = me.players[otherPlayerId];
      if (player.point === 3 && otherPlayer.point === 4) {
        otherPlayer.point--;
      } else if (player.point < 5) {
        player.point++;
      }
      if (player.point > 3 && player.point - otherPlayer.point > 1) {
        _.each(me.players, function (player) {
          player.point = 0;
        });
        player.party++;
      }
      if (player.point === 4 && otherPlayer.point === 5) {
      }
      me.sendToServer();
    };
    me.decreaseParty = function (player) {
      if (player.party > 0) {
        player.party--;
      }
      me.sendToServer();
    };
    me.increaseParty = function (player) {
      player.party++;
      _.each(me.players, function (player) {
        player.point = 0;
      });
      me.sendToServer();
    };
    me.decreaseSet = function (player) {
      if (player.set > 0) {
        player.set--;
      }
      me.sendToServer();
    };
    me.increaseSet = function (player) {
      player.set++;
      _.each(me.players, function (player) {
        player.point = 0;
        player.party = 0;
      });
      me.sendToServer();
    };
    me.decreaseTiebreakPoint = function (player) {
      if (player.tieBreak > 0) {
        player.tieBreak--;
      }
      me.sendToServer();
    };
    me.increaseTiebreakPoint = function (player) {
      player.tieBreak++;
      me.sendToServer();
    };
    me.resetTiebreak = function () {
      _.each(me.players, function (player) {
        player.tieBreak = 0;
      });
      me.sendToServer();
    };
    me.resetMatch = function () {
      me.scoreData.isTiebreak = 0;
      _.each(me.scoreData.players, function (player) {
        player.point = 0;
        player.party = 0;
        player.set = 0;
        player.tieBreak = 0;
      });
      me.sendToServer();
    };
  }
]);
;