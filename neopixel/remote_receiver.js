let current_led = 0
let blue = 0
let strip3: neopixel.Strip = null
let green = 0
let strip2: neopixel.Strip = null
let red = 0
let strip1: neopixel.Strip = null
let led_number = 0
let led_count = 0
let recipient = 0
let participant = 0
input.onButtonPressed(Button.B, () => {
    participant += 1
    basic.showString("P")
    basic.showNumber(participant)
})
radio.onDataPacketReceived(({ receivedString }) => {
    recipient = parseInt(receivedString.substr(0, 2))
    led_number = parseInt(receivedString.substr(2, 2))
    led_count = parseInt(receivedString.substr(4, 2))
    red = parseInt(receivedString.substr(6, 3))
    green = parseInt(receivedString.substr(9, 3))
    blue = parseInt(receivedString.substr(12, 3))
    if (participant == recipient) {
        for (let i = 0; i < led_count; i++) {
            current_led = led_number
            strip1.setPixelColor(current_led, neopixel.rgb(red, green, blue))
            strip2.setPixelColor(current_led, neopixel.rgb(red, green, blue))
            strip3.setPixelColor(current_led, neopixel.rgb(red, green, blue))
            current_led += 1
        }
        strip1.show()
        strip2.show()
        strip3.show()
    }
})
led_count = 0
participant = 1
strip1 = neopixel.create(DigitalPin.P0, 32, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P1, 32, NeoPixelMode.RGB)
strip3 = neopixel.create(DigitalPin.P2, 32, NeoPixelMode.RGB)
basic.showNumber(1)
