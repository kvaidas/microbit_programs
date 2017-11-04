let blue = 0
let green = 0
let red = 0
let cycling = false
let strip: neopixel.Strip = null
let delay = 0
input.onButtonPressed(Button.B, () => {
    if (cycling) {
        cycling = false
        basic.showString("P")
    } else {
        cycling = true
        basic.showNumber(delay / 10)
    }
})
input.onButtonPressed(Button.A, () => {
    delay = (delay + 10) % 100
    basic.showNumber(delay / 10)
})
strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
red = 255
green = 0
blue = 0
delay = 30
cycling = true
led.setBrightness(32)
basic.showNumber(delay / 10)
basic.forever(() => {
    if (!(cycling)) {
        basic.pause(1000)
    }
    while (green < 255 && cycling) {
        green += 5
        strip.showColor(neopixel.rgb(red, green, blue))
        basic.pause(delay)
    }
    while (red > 0 && cycling) {
        red += -5
        strip.showColor(neopixel.rgb(red, green, blue))
        basic.pause(delay)
    }
    while (blue < 255 && cycling) {
        blue += 5
        strip.showColor(neopixel.rgb(red, green, blue))
        basic.pause(delay)
    }
    while (green > 0 && cycling) {
        green += -5
        strip.showColor(neopixel.rgb(red, green, blue))
        basic.pause(delay)
    }
    while (red < 255 && cycling) {
        red += 5
        strip.showColor(neopixel.rgb(red, green, blue))
        basic.pause(delay)
    }
    while (blue > 0 && cycling) {
        blue += -5
        strip.showColor(neopixel.rgb(red, green, blue))
        basic.pause(delay)
    }
})
