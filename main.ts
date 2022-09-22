input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        basic.clearScreen()
        basic.showString("Hi")
        basic.pause(100)
        basic.clearScreen()
        number += 1
        basic.showNumber(number)
    }
    basic.showIcon(IconNames.Happy)
})
let number = 0
basic.showIcon(IconNames.Heart)
number = 0
