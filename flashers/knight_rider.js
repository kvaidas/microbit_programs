let delay = 0
let y = 0
let x = 0
basic.forever(() => {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.toggle(x, y)
        }
        basic.pause(delay)
        for (let y = 0; y <= 4; y++) {
            led.toggle(x, y)
        }
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.toggle(4 - x, y)
        }
        basic.pause(delay)
        for (let y = 0; y <= 4; y++) {
            led.toggle(4 - x, y)
        }
    }
})
input.onButtonPressed(Button.A, () => {
    delay = delay / 2
})
input.onButtonPressed(Button.B, () => {
    delay = delay * 2
})
delay = 50
