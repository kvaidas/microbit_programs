let blue = 0
let green = 0
let red = 0
let delay = 0
let strip: neopixel.Strip = null
input.onButtonPressed(Button.A, () => {
    if (delay != 1) {
        delay += -1
    }
    basic.showNumber(delay)
})
input.onButtonPressed(Button.B, () => {
    delay += 1
    basic.showNumber(delay)
})
strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
red = 255
green = 0
blue = 0
delay = 5
basic.showNumber(delay)
basic.forever(() => {
    for (let i = 0; i < 255; i++) {
        green += 1
        strip.showColor(neopixel.rgb(red, green, blue))
        basic.pause(delay)
    }
    for (let i = 0; i < 255; i++) {
        red += -1
        strip.showColor(neopixel.rgb(red, green, blue))
        basic.pause(delay)
    }
    for (let i = 0; i < 255; i++) {
        blue += 1
        strip.showColor(neopixel.rgb(red, green, blue))
        basic.pause(delay)
    }
    for (let i = 0; i < 255; i++) {
        green += -1
        strip.showColor(neopixel.rgb(red, green, blue))
        basic.pause(delay)
    }
    for (let i = 0; i < 255; i++) {
        red += 1
        strip.showColor(neopixel.rgb(red, green, blue))
        basic.pause(delay)
    }
    for (let i = 0; i < 255; i++) {
        blue += -1
        strip.showColor(neopixel.rgb(red, green, blue))
        basic.pause(delay)
    }
})
