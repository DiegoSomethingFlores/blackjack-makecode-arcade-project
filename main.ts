function askPlayer () {
    decisionHitOrPass = game.askForNumber("(Would You Like A Card?) HIT ME=1 PASS=2", 1)
    if (decisionHitOrPass == 1) {
        RandomCard3 = 0
        RandomCard3 = randint(2, 10)
        players_Cards = RandomCard + RandomCard2 + RandomCard3
        game.splash("You Draw")
        game.splash("You have a " + RandomCard3)
        askPlayer2()
    } else if (decisionHitOrPass == 2) {
        game.splash("Dealer Draws")
        DealersRandomCard2 = randint(2, 10)
        dealers_Cards = DealersRandomCard + DealersRandomCard2
        game.splash("Dealer Has a " + dealers_Cards)
        if (dealers_Cards < 16) {
            Dealer_Draws_Again()
        } else if (dealers_Cards >= 16) {
            if (players_Cards < dealers_Cards) {
                game.splash("Players Card: " + players_Cards + " Dealers Card: " + dealers_Cards, "")
                game.splash("Dealers Wins")
                amountOfChips = amountOfChipsBet - amountOfChipsBet
                info.setScore(amountOfChips)
                game.splash("You now have " + info.score() + " chips" + "")
            } else {
                if (players_Cards > dealers_Cards) {
                    game.splash("Players Card: " + players_Cards + " Dealers Card: " + dealers_Cards, "")
                    game.splash("Player Wins ")
                    amountOfChips = amountOfChipsBet + amountOfChipsBet
                    info.setScore(amountOfChips)
                    game.splash("You now have " + info.score() + " chips" + "")
                }
            }
        }
    }
}
function calculateSuit (card: number) {
    SuitNumber = Math.idiv(card, 13)
    if (players_Cards > 52) {
        game.splash("" + players_Cards + " Is A Invalid Card Number")
        game.reset()
    }
    if (SuitNumber == 0) {
        return "Spades"
    } else if (SuitNumber == 1) {
        return "Diamond"
    } else if (SuitNumber == 2) {
        return "Clubs"
    } else {
        return "Hearts"
    }
}
function Dealer_Draws_Again () {
    game.splash("Dealer Draws")
    DealersRandomCard3 = randint(2, 10)
    dealers_Cards = DealersRandomCard + (DealersRandomCard2 + DealersRandomCard3)
    game.splash("Dealer Has a " + DealersRandomCard3)
    if (dealers_Cards < 16) {
        Dealer_Draws_Again2()
    } else if (dealers_Cards >= 16) {
        if (players_Cards < dealers_Cards) {
            game.splash("Players Card: " + players_Cards + " Dealers Card: " + dealers_Cards, "")
            game.splash("Dealers Wins")
            amountOfChips = amountOfChipsBet - amountOfChipsBet
            info.setScore(amountOfChips)
            game.splash("You now have " + info.score() + " chips" + "")
        } else {
            if (players_Cards > dealers_Cards) {
                game.splash("Players Card: " + players_Cards + " Dealers Card: " + dealers_Cards, "")
                game.splash("Player Wins ")
                amountOfChips = amountOfChipsBet + amountOfChipsBet
                info.setScore(amountOfChips)
                game.splash("You now have " + info.score() + " chips" + "")
            }
        }
    }
}
function placeYourBest () {
    for (let index = 0; index < 987654323456789; index++) {
        amountOfChipsBet = game.askForNumber("Please Place Your Bets   You have " + amountOfChips + " Chips Left", 10)
        if (amountOfChips < amountOfChipsBet) {
            game.splash("Insufficient Funds, You have " + amountOfChips + " Chips Left")
        } else if (amountOfChipsBet == 0) {
            game.splash("Please Place Your Bets")
        } else if (amountOfChipsBet <= -1) {
            game.splash("Please Type In A Positive Number")
        } else if (amountOfChips >= amountOfChipsBet) {
            break;
        }
    }
    info.setScore(amountOfChips - amountOfChipsBet)
    startGame = 1
    gameStart()
}
function calculatePip (card: number) {
    PipNumber = card % 13
    if (PipNumber == 0) {
        return "Ace"
    } else if (SuitNumber == 11) {
        return "Jack"
    } else if (SuitNumber == 12) {
        return "Queen"
    } else if (SuitNumber == 13) {
        return "King"
    }
    return players_Cards % 13
}
function Dealer_Draws_Again2 () {
    game.splash("Dealer Draws")
    DealersRandomCard4 = randint(2, 10)
    dealers_Cards = DealersRandomCard + (DealersRandomCard2 + (DealersRandomCard3 + DealersRandomCard4))
    game.splash("Dealer Has a " + DealersRandomCard4)
    if (dealers_Cards < 16) {
        Dealer_Draws_Again3()
    } else if (dealers_Cards >= 16) {
        if (players_Cards < dealers_Cards) {
            game.splash("Players Card: " + players_Cards + " Dealers Card: " + dealers_Cards, "")
            game.splash("Dealers Wins")
            amountOfChips = amountOfChipsBet - amountOfChipsBet
            info.setScore(amountOfChipsBet)
            game.splash("You now have " + info.score() + " chips" + "")
        } else {
            if (players_Cards > dealers_Cards) {
                game.splash("Players Card: " + players_Cards + " Dealers Card: " + dealers_Cards, "")
                game.splash("Player Wins ")
                amountOfChips = amountOfChipsBet + amountOfChipsBet
                info.setScore(amountOfChipsBet)
                game.splash("You now have " + info.score() + " chips" + "")
            }
        }
    }
}
function askPlayer2 () {
    decisionHitOrPass = game.askForNumber("(Would You Like A Card?) HIT ME=1 PASS=2", 1)
    if (decisionHitOrPass == 1) {
        RandomCard4 = 0
        RandomCard4 = randint(2, 10)
        players_Cards = RandomCard + RandomCard2 + (RandomCard3 + RandomCard4)
        game.splash("You Draw")
        game.splash("You have a " + RandomCard4)
    } else if (decisionHitOrPass == 2) {
        game.splash("Dealer Draws")
        DealersRandomCard2 = randint(2, 10)
        dealers_Cards = DealersRandomCard + DealersRandomCard2
        game.splash("Dealer Has a " + dealers_Cards)
    }
}
function Dealer_Draws_Again3 () {
    game.splash("Dealer Draws")
    DealersRandomCard5 = randint(2, 10)
    dealers_Cards = DealersRandomCard + (DealersRandomCard2 + (DealersRandomCard3 + (DealersRandomCard4 + DealersRandomCard5)))
    game.splash("Dealer Has a " + DealersRandomCard5)
    if (dealers_Cards < 16) {
    	
    } else if (dealers_Cards >= 16) {
        if (players_Cards < dealers_Cards) {
            game.splash("Players Card: " + players_Cards + " Dealers Card: " + dealers_Cards, "")
            game.splash("Dealers Wins")
        } else {
            if (players_Cards > dealers_Cards) {
                game.splash("Players Card: " + players_Cards + " Dealers Card: " + dealers_Cards, "")
                game.splash("Player Wins ")
            }
        }
    }
}
function gameStart () {
    if (startGame == 1) {
        players_Cards = 0
        dealers_Cards = 0
        game.splash("All Bets Are Over")
        RandomCard = randint(2, 10)
        players_Cards = RandomCard
        game.splash("You Have a " + RandomCard)
        DealersRandomCard = randint(2, 10)
        dealers_Cards = DealersRandomCard
        game.splash("Dealer Has a " + dealers_Cards)
        RandomCard2 = randint(2, 10)
        players_Cards = RandomCard + RandomCard2
        game.splash("You Have a " + RandomCard2)
        askPlayer()
    }
}
let DealersRandomCard5 = 0
let RandomCard4 = 0
let DealersRandomCard4 = 0
let PipNumber = 0
let DealersRandomCard3 = 0
let SuitNumber = 0
let DealersRandomCard = 0
let dealers_Cards = 0
let DealersRandomCard2 = 0
let RandomCard2 = 0
let RandomCard = 0
let players_Cards = 0
let RandomCard3 = 0
let decisionHitOrPass = 0
let startGame = 0
let amountOfChipsBet = 0
let amountOfChips = 0
amountOfChips = 100
amountOfChipsBet = 0
startGame = 0
info.setScore(amountOfChips)
game.splash("Welcome To BlackJack")
if (startGame == 0) {
    placeYourBest()
}
game.onUpdate(function () {
    if (players_Cards > 21) {
        game.splash("BUST!1!111")
        startGame = 0
    } else if (players_Cards == 21) {
        game.splash("BLACKJACK, YOU WIN")
        startGame = 0
    }
})
