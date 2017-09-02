let pixels: game.LedSprite[] = []
let delay = 0
basic.forever(() => {
    for (let current_pixel of pixels) {
        current_pixel.ifOnEdgeBounce()
        current_pixel.move(1)
    }
    basic.pause(delay)
})
input.onButtonPressed(Button.A, () => {
    if (delay != 1) {
        delay = delay / 2
    }
})
input.onButtonPressed(Button.B, () => {
    delay = delay * 2
})
delay = 50
pixels = [game.createSprite(0, 0), game.createSprite(0, 1), game.createSprite(0, 2), game.createSprite(0, 3), game.createSprite(0, 4)]
