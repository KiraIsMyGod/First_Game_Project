namespace SpriteKind {
    export const Door = SpriteKind.create()
    export const Power_Up = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`10001000383f443d443f443f443f443d443f44373a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3c451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e45111211121112111211121112111247393546354635464b4b46354636463534`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.rock0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.doorLockedWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenSwitchDown,sprites.dungeon.floorLight2,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.stairWest,sprites.dungeon.stairSouth,sprites.dungeon.stairEast,sprites.dungeon.stairNorth,sprites.dungeon.doorClosedWest],
            TileScale.Sixteen
        ))
    Good_Square.setPosition(130, 230)
    Bad_Square.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`10001000383f443d443f4449493f443d443f44373a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c48451112111211121112111211121112483a1b1c1b1c1b1c1b1c1b1c1b1c1b1c474511121112111211121112111211123c3a1b1c1b1c1b1c1b1c1b1c1b1c1b1c474511121112111211121112111211123e3a1b1c1b1c1b1c1b1c1b1c1b1c1b1c474511121112111211121112111211123e39354635463546354635463546354634`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.rock0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.doorLockedWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenSwitchDown,sprites.dungeon.floorLight2,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.stairWest,sprites.dungeon.stairSouth,sprites.dungeon.stairEast,sprites.dungeon.stairNorth,sprites.dungeon.doorClosedWest],
            TileScale.Sixteen
        ))
    Good_Square.setPosition(130, 20)
    Bad_Square.destroy()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Direction != -200) {
        Good_Square.setImage(img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
`)
        Good_Square.image.flipX()
    }
    Direction = -200
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Direction != 100) {
        Good_Square.setImage(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`)
        Good_Square.image.flipY()
    }
    Direction = 100
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.setScore(0)
    info.changeLifeBy(-1)
    Good_Square.startEffect(effects.disintegrate)
    pause(1000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`10001000383f443d443f443d443f443d443f44373a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112474a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3c4a111211121112111211121112111247451b1c1b1c1b1c1b1c1b1c1b1c1b1c3c3a111211121112111211121112111247451b1c1b1c1b1c1b1c1b1c1b1c1b1c3c3b111211121112111211121112111247451b1c1b1c1b1c1b1c1b1c1b1c1b1c3e3a11121112111211121112111211124739354635463546354635463546354634`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.rock0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.doorLockedWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenSwitchDown,sprites.dungeon.floorLight2,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.stairWest,sprites.dungeon.stairSouth,sprites.dungeon.stairEast,sprites.dungeon.stairNorth,sprites.dungeon.doorClosedWest],
            TileScale.Sixteen
        ))
    Good_Square.setPosition(20, 120)
    Bad_Square.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    sprite.destroy()
    info.changeScoreBy(20)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`10001000383f443d443f4449493f443d443f44373a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c48451112111211121112111211121112483a1b1c1b1c1b1c1b1c1b1c1b1c1b1c474511121112111211121112111211123c3a1b1c1b1c1b1c1b1c1b1c1b1c1b1c474511121112111211121112111211123e3a1b1c1b1c1b1c1b1c1b1c1b1c1b1c474511121112111211121112111211123e39354635463546354635463546354634`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.rock0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.doorLockedWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenSwitchDown,sprites.dungeon.floorLight2,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.stairWest,sprites.dungeon.stairSouth,sprites.dungeon.stairEast,sprites.dungeon.stairNorth,sprites.dungeon.doorClosedWest],
            TileScale.Sixteen
        ))
    Good_Square.setPosition(240, 120)
    Bad_Square.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.abs(Direction) < 200) {
        projectile = sprites.createProjectileFromSprite(img`
. . 5 5 5 5 . . 
. 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 . 
. . 5 5 5 5 . . 
`, Good_Square, 0, Direction * 2)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
. . 5 5 5 5 . . 
. 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 . 
. . 5 5 5 5 . . 
`, Good_Square, Direction, 0)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Direction != 200) {
        Good_Square.setImage(img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 
`)
    }
    Direction = 200
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`10001000383f443d443f443f443f443d443f44373a1b1c1b1c4e1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3c451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e45111211121112111211121112111247393546354635464b4b46354636463534`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.rock0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.doorLockedWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenSwitchDown,sprites.dungeon.floorLight2,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.stairWest,sprites.dungeon.stairSouth,sprites.dungeon.stairEast,sprites.dungeon.stairNorth,sprites.dungeon.doorClosedWest,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen],
            TileScale.Sixteen
        ))
    Power_Ups = sprites.create(img`
. . e e e e e e . . 
. e e e e e e e e . 
e e e e e e e e e e 
e e e e e e e e e e 
e e e e e e e e e e 
e e e e e e e e e e 
e e e e e e e e e e 
e e e e e e e e e e 
. e e e e e e e e . 
. . e e e e e e . . 
`, SpriteKind.Power_Up)
    Power_Ups.setPosition(75, 25)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Direction != -100) {
        Good_Square.setImage(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`)
    }
    Direction = -100
})
info.onLifeZero(function () {
    Good_Square.destroy(effects.disintegrate, 500)
    pause(500)
    game.splash("Game Over")
    game.reset()
})
let Power_Ups: Sprite = null
let projectile: Sprite = null
let Direction = 0
let Bad_Square: Sprite = null
let Good_Square: Sprite = null
game.splash("Good Square vs Bad Squares", "WASD to move, B to Shoot")
info.setScore(0)
info.setLife(3)
scene.setBackgroundColor(12)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000383f443d443f443f443f443d443f44373a1b1c1b1c4d1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3c451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e451112111211121112111211121112473a1b1c1b1c1b1c1b1c1b1c1b1c1b1c3e45111211121112111211121112111247393546354635464b4b46354636463534`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.rock0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.doorLockedWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenSwitchDown,sprites.dungeon.floorLight2,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.stairWest,sprites.dungeon.stairSouth,sprites.dungeon.stairEast,sprites.dungeon.stairNorth,sprites.dungeon.doorClosedWest,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen],
            TileScale.Sixteen
        ))
Good_Square = sprites.create(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, SpriteKind.Player)
scene.cameraFollowSprite(Good_Square)
Good_Square.setPosition(20, 100)
controller.moveSprite(Good_Square, 100, 100)
game.onUpdateInterval(5000, function () {
    Bad_Square = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.Enemy)
    Bad_Square.setPosition(160, 150)
    Bad_Square.follow(Good_Square, 30)
})
