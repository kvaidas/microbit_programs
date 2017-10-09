let name = ""
let delay = 0
let step = 0
input.onButtonPressed(Button.A, () => {
    if (delay != 1) {
        delay = delay / 2
    }
})
input.onButtonPressed(Button.B, () => {
    delay = delay * 2
})
basic.forever(() => {
    pulse_text()
})
function pulse_text()  {
    for (let character = 0; character <=  name.length; character++) {
        basic.showString(name.charAt(character))
        on()
        off()
    }
}
function on()  {
    for (let step = 0; step <= 16; step++) {
        led.setBrightness(step * 16)
        basic.pause(delay)
    }
}
function off()  {
    for (let step = 0; step <= 16; step++) {
        led.setBrightness(255 - step * 16)
        basic.pause(delay)
    }
}
delay = 10
name = "Vaidas"
led.setBrightness(0)
