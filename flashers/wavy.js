let pixels: game.LedSprite[] = []
let delay = 0
basic.forever(() => {
    for (let pixel of pixels) {
        pixel.move(1)
        if (pixel.get(LedSpriteProperty.X) == 0 || pixel.get(LedSpriteProperty.X) == 4) {
            pixel.turn(Direction.Right, 180)
        }
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
pixels = []
delay = 25
pixels = [game.createSprite(0, 0), game.createSprite(1, 1), game.createSprite(2, 2), game.createSprite(3, 3), game.createSprite(4, 4)]
pixels[4].turn(Direction.Right, 180)
