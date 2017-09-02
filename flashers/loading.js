let pixel: game.LedSprite = null
let delay = 0
basic.forever(() => {
    for (let index = 0; index <= 3; index++) {
        pixel.move(1)
        basic.pause(delay)
    }
    pixel.turn(Direction.Right, 90)
})
input.onButtonPressed(Button.A, () => {
    if (delay != 1) {
        delay = delay / 2
    }
})
input.onButtonPressed(Button.B, () => {
    delay = delay * 2
})
delay = 10
pixel = game.createSprite(0, 0)
