game.splash("let's calculate the area of a Trapezoid")
let Base_1 = game.askForNumber("What is Base 1 ")
let Base_2 = game.askForNumber("What is Base 2")
let B1B2 = Base_1 + Base_2
B1B2 = B1B2 / 2
game.splash(B1B2)
let h = game.askForNumber("What is the height")
let area = h * B1B2
game.splash(area)
game.splash("The area of the Trapezoid is ", area)
