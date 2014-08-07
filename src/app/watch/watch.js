angular.module('ngBoilerplate.watch', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
])

    .config(function config($stateProvider) {
        $stateProvider.state('watch', {
            url: '/watch',
            views: {
                "main": {
                    controller: 'WatchCtrl',
                    templateUrl: 'watch/watch.tpl.html'
                }
            },
            data: { pageTitle: 'What is It?' }
        });
    })

    .controller('WatchCtrl', function AboutCtrl($scope, $http) {
        var me = $scope;

        me.pointArray = ["0", "15", "30", "40", "Ad"];

        me.scoreData = {
            players: [
                {
                    name: "Player 1",
                    point: 0,
                    party: 0,
                    set: 0,
                    tieBreak: 0
                },
                {
                    name: "Player 2",
                    point: 0,
                    party: 0,
                    set: 0,
                    tieBreak: 0
                }
            ],
            isTiebreak: 0
        };

        me.players = me.scoreData.players;

        me.updateData = function(){
            $http.get("score.json").then(function (response) {
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
            setTimeout(me.updateData, 1000);
        };

        me.updateData();

        setTimeout(function(){
            window.location.reload(true);
        }, 1000*60*10);


    })

;
