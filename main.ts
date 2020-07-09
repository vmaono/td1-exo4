input.onButtonPressed(Button.A, function () {
    led.unplot(x, 0)
    if (x > 0 && x <= 4) {
        x += -1
    }
    led.plot(x, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, 0)
    if (x >= 0 && x < 4) {
        x += 1
        led.plot(x, 0)
    } else if (x == 4) {
        y += 1
        led.plot(x, y)
    } else if (y == 0) {
    	
    } else {
    	
    }
})
let x = 0
let y = 0
y = 0
x = 0
led.plot(x, 0)
