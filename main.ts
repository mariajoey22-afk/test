player.onChat("tp", function () {
    agent.teleportToPlayer()
})

player.onChat("line", function () {
    agent.teleportToPlayer()
    agent.setItem(STONE, 64, 1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let i = 0; i < 8; i++) {
        agent.move(FORWARD, 1)
    }
    agent.setAssist(PLACE_ON_MOVE, false)
})

player.onChat("wall", function () {
    agent.teleportToPlayer()
    agent.setItem(STONE, 64, 1)
    for (let i = 0; i < 8; i++) {
        agent.place(FORWARD)
        agent.move(FORWARD, 1)
    }
})

player.onChat("L", function () {
    agent.teleportToPlayer()
    agent.setItem(STONE, 64, 1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let i = 0; i < 6; i++) {
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
    for (let i = 0; i < 4; i++) {
        agent.move(FORWARD, 1)
    }
    agent.setAssist(PLACE_ON_MOVE, false)
})

player.onChat("double", function () {
    agent.teleportToPlayer()
    agent.setItem(STONE, 64, 1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let i = 0; i < 16; i++) {
        agent.move(FORWARD, 1)
    }
    agent.setAssist(PLACE_ON_MOVE, false)
})
