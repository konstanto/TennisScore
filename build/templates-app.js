angular.module('templates-app', ['score/score.tpl.html', 'watch/watch.tpl.html']);

angular.module("score/score.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("score/score.tpl.html",
    "<div class=\"scoreMain\">\n" +
    "    <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\n" +
    "        <li ng-class=\"{active: scoreData.isTiebreak == 0}\"><a href=\"#\" ng-click=\"changeGameType()\">Normal game</a></li>\n" +
    "        <li ng-class=\"{active: scoreData.isTiebreak == 1}\"><a href=\"#\" ng-click=\"changeGameType()\">Tiebreak</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <div class=\"scoreContent\" ng-if=\"scoreData.isTiebreak == 0\">\n" +
    "        <div class=\"row text-center\">\n" +
    "                <div ng-repeat=\"player in players\">\n" +
    "                    <div class=\"col-xs-6\">\n" +
    "                        <h1>{{player.name}}</h1>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"pointGroup clearfix\">\n" +
    "                                <div class=\"col-xs-12\">\n" +
    "                                    <p class=\"small\">Point</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-6\">\n" +
    "                                    <button ng-click=\"decreasePoint(player)\" class=\"btn btn-lg btn-block btn-default\"><span\n" +
    "                                            class=\"glyphicon glyphicon-minus\"></span></button>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-6\">\n" +
    "                                    <button ng-click=\"increasePoint(player, $index)\" class=\"btn btn-lg btn-block btn-default\"><span\n" +
    "                                            class=\"glyphicon glyphicon-plus\"></span></button>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-12\">\n" +
    "                                    <h1>{{pointArray[player.point]}}</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"pointGroup clearfix\">\n" +
    "                                <div class=\"col-xs-12\">\n" +
    "                                    <p class=\"small\">Party</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-6\">\n" +
    "                                    <button ng-click=\"decreaseParty(player)\" class=\"btn btn-lg btn-block btn-default\"><span\n" +
    "                                            class=\"glyphicon glyphicon-minus\"></span></button>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-6\">\n" +
    "                                    <button ng-click=\"increaseParty(player)\" class=\"btn btn-lg btn-block btn-default\"><span\n" +
    "                                            class=\"glyphicon glyphicon-plus\"></span></button>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-12\">\n" +
    "                                    <h1>{{player.party}}</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"pointGroup clearfix\">\n" +
    "                                <div class=\"col-xs-12\">\n" +
    "                                    <p class=\"small\">Set</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-6\">\n" +
    "                                    <button ng-click=\"decreaseSet(player)\" class=\"btn btn-lg btn-block btn-default\"><span\n" +
    "                                            class=\"glyphicon glyphicon-minus\"></span></button>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-6\">\n" +
    "                                    <button ng-click=\"increaseSet(player)\" class=\"btn btn-lg btn-block btn-default\"><span\n" +
    "                                            class=\"glyphicon glyphicon-plus\"></span></button>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-12\">\n" +
    "                                    <h1>{{player.set}}</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            <button class=\"btn btn-sm btn-danger\" ng-click=\"resetMatch()\"><span class=\"glyphicon glyphicon-refresh\"></span> Reset match</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"scoreContent\" ng-if=\"scoreData.isTiebreak == 1\">\n" +
    "        <div class=\"row text-center\">\n" +
    "            <div ng-repeat=\"player in players\">\n" +
    "                <div class=\"col-xs-6\">\n" +
    "                    <h1>{{player.name}}</h1>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"pointGroup clearfix\">\n" +
    "                            <div class=\"col-xs-12\">\n" +
    "                                <p class=\"small\">Point</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-6\">\n" +
    "                                <button ng-click=\"decreaseTiebreakPoint(player)\" class=\"btn btn-lg btn-block btn-default\"><span\n" +
    "                                        class=\"glyphicon glyphicon-minus\"></span></button>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-6\">\n" +
    "                                <button ng-click=\"increaseTiebreakPoint(player)\" class=\"btn btn-lg btn-block btn-default\"><span\n" +
    "                                        class=\"glyphicon glyphicon-plus\"></span></button>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-12\">\n" +
    "                                <h1>{{player.tieBreak}}</h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <button class=\"btn btn-sm btn-danger\" ng-click=\"resetTiebreak()\"><span class=\"glyphicon glyphicon-refresh\"></span> Reset tiebreak</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("watch/watch.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("watch/watch.tpl.html",
    "<div class=\"scoreMain\">\n" +
    "    <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\n" +
    "        <li class=\"disabled\" ng-class=\"{active: scoreData.isTiebreak == 0}\"><a>Normal game</a></li>\n" +
    "        <li class=\"disabled\" ng-class=\"{active: scoreData.isTiebreak == 1}\"><a>Tiebreak</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <div class=\"scoreContent\" ng-if=\"scoreData.isTiebreak == 0\">\n" +
    "        <div class=\"row text-center\">\n" +
    "            <div ng-repeat=\"player in players\">\n" +
    "                <div class=\"col-xs-6\">\n" +
    "                    <h1>{{player.name}}</h1>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"pointGroup clearfix\">\n" +
    "                            <div class=\"col-xs-12\">\n" +
    "                                <p class=\"small\">Point</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-12\">\n" +
    "                                <h1>{{pointArray[player.point]}}</h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"pointGroup clearfix\">\n" +
    "                            <div class=\"col-xs-12\">\n" +
    "                                <p class=\"small\">Party</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-12\">\n" +
    "                                <h1>{{player.party}}</h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"pointGroup clearfix\">\n" +
    "                            <div class=\"col-xs-12\">\n" +
    "                                <p class=\"small\">Set</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-12\">\n" +
    "                                <h1>{{player.set}}</h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"scoreContent\" ng-if=\"scoreData.isTiebreak == 1\">\n" +
    "        <div class=\"row text-center\">\n" +
    "            <div ng-repeat=\"player in players\">\n" +
    "                <div class=\"col-xs-6\">\n" +
    "                    <h1>{{player.name}}</h1>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"pointGroup clearfix\">\n" +
    "                            <div class=\"col-xs-12\">\n" +
    "                                <p class=\"small\">Point</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-12\">\n" +
    "                                <h1>{{player.tieBreak}}</h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);
