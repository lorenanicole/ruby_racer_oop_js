// -game
// winner
// playtime
// two players


// - players
//  name
//  position

var bob, sally, game;
console.log(bob);

$(document).ready(function() {

    game = {
        insertPlayers: function(player1, player2) {
            this.player1 = new player(player1, 1);
            this.player2 = new player(player2, 2);
            console.log(arguments)
        },
        onKeyUp: function(key) {
            if (key == 80) {
                this.player1.move();
            } else if (key == 81) {
                this.player2.move();
            }
        },
        finished: function() {
            if (parseInt(this.player1.$el.css('margin-left')) >= 860) {
                game.winner = this.player1;
                sendData()
                $(document).unbind("keyup")
            } else if (parseInt(this.player2.$el.css('margin-left')) >= 860) {
                game.winner = this.player2;
                sendData()
                $(document).unbind("keyup")
            }
        }

    }


    function sendData() {
        $.ajax({
            type: "Post",
            url: "localhost:8000/",
            data: game,
            success: function(res) {
                alert(res);
            }
        })
    }

    var player = function(name, track) {
        this.name = name;
        this.track = track;
        this.$el = (function() {
            if (track == 1) {
                return $('#car1');
            } else if (track == 2) {
                return $('#car2');
            };
        })();
        this.move = function() {
            this.$el.animate({
                marginLeft: "+=10px"
            }, 10);
        };
    }

    $(document).on('keyup', function(event) {
        game.onKeyUp(event.which);
        game.finished();
    });
    game.insertPlayers('bob', 'sally', 'tim', 'mary')

})
