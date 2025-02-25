controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`you caught me doing what    question mark`,
    500,
    false
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Army detailed stickfigure`, SpriteKind.Player)
scene.setBackgroundColor(8)
