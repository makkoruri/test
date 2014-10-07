# Description:
#   ONOSHIをマンセーしたい
#
# Commands:
#   ONOSHI - マンセーする

module.exports = (robot) ->
  robot.hear /ONOSHI/, (msg) ->
    msg.send "ONOSHIマンセー！！ :raised_hands:"
