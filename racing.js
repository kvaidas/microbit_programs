let score = 0
let obstacles: game.LedSprite[] = []
let mode = 0
let speed = 0
let free_lane = 0
let player: game.LedSprite = null
input.onButtonPressed(Button.AB, () => {
    basic.clearScreen()
    player = game.createSprite(2, 5)
    mode = 1
    score = 0
})
basic.forever(() => {
    if (mode == 1) {
        free_lane = Math.random(5)
        obstacles = []
        for (let iterator1 = 0; iterator1 <= 4; iterator1++) {
            if (iterator1 != free_lane) {
                obstacles.push(game.createSprite(iterator1, 0))
            }
        }
        basic.pause(speed)
        for (let i = 0; i < 4; i++) {
            for (let iterator2 of obstacles) {
                iterator2.change(LedSpriteProperty.Y, 1)
            }
            basic.pause(speed)
        }
        for (let iterator3 of obstacles) {
            if (player.isTouching(iterator3)) {
                mode = 2
                player.delete()
            }
            iterator3.delete()
        }
        score += 1
    } else if (mode == 2) {
        basic.showIcon(IconNames.Skull)
        basic.showNumber(score)
    }
    basic.pause(speed)
})
input.onButtonPressed(Button.B, () => {
    player.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.A, () => {
    player.change(LedSpriteProperty.X, -1)
})
basic.showIcon(IconNames.Happy)
speed = 500
