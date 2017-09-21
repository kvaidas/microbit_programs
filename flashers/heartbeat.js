let index = 0
basic.forever(() => {
    for (let index = 0; index <= 16; index++) {
        led.setBrightness(index * 16)
        basic.pause(20)
    }
    for (let index = 0; index <= 16; index++) {
        led.setBrightness(255 - index * 16)
        basic.pause(20)
    }
})
basic.showIcon(IconNames.Heart)
