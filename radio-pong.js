let height = 0
let state = ""
let line: game.LedSprite[] = []
let speed = 0
let value: game.LedSprite = null
radio.onDataPacketReceived( ({ receivedString }) =>  {
    if (receivedString == "ping") {
        state = "pong"
        show_line()
        for (let i = 0; i < 4; i++) {
            if (state == "pong") {
                lower_line()
                basic.pause(speed)
            }
        }
        if (state == "pong" && [0].length != 0) {
            radio.sendString("you win")
            hide_line()
            basic.showIcon(IconNames.No)
            state = "stopped"
        }
    } else if (receivedString == "you win") {
        hide_line()
        state = "stopped"
        basic.showIcon(IconNames.Yes)
    }
})
function hide_line()  {
    for (let value of line) {
        value.delete()
    }
}
function show_line()  {
    line = [game.createSprite(0, height), game.createSprite(1, height), game.createSprite(2, height), game.createSprite(3, height), game.createSprite(4, height)]
}
function lower_line()  {
    for (let value of line) {
        value.change(LedSpriteProperty.Y, 1)
    }
}
input.onButtonPressed(Button.A, () => {
    if (state == "stopped" || state == "pong") {
        state = "ping"
        hide_line()
        radio.sendString("ping")
    }
})
speed = 1000
state = "stopped"
