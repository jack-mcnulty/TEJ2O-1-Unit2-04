/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack
 * Created on: Sep 2025
 * This program says the temperature
*/

// variable for the temperature of the microbit
let temperatureOfMicrobit: number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
    temperatureOfMicrobit = input.temperature()
    basic.showNumber(input.temperature())
})
