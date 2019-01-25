let brightness = 0
let y_coord = 0
let x_coord = 0
let delay = 0
input.onButtonPressed(Button.B, function () {
    delay = delay - 100
})
input.onButtonPressed(Button.A, function () {
    delay = delay + 100
})
delay = 100
basic.forever(function () {
    x_coord = Math.randomRange(0, 4)
    y_coord = Math.randomRange(0, 4)
    brightness = 128 * Math.randomRange(0, 2)
    led.plotBrightness(x_coord, y_coord, brightness)
    basic.pause(delay)
})
