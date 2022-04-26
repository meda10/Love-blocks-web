<template>
  <div class="p-4">
    <div v-if="show === 0">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">Open tutorial</h1>
      </div>
      <n-p>
        If you want you can copy the whole tutorial as your project. Just go to Project and in section tutorials
        click
        <n-text type="success">Copy to my projects</n-text>
        .
      </n-p>
      <n-card>
        <n-space justify="space-between">
          <n-h5>How Lua/LÖVE works</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="show = 7">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>Check if key is presed</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="show = 2">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>Move object</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="show = 3">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>Load image to the game</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="show = 1">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>How to shoot</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="show = 4">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>Fifteen - game</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="show = 5">Open</n-button>
        </n-space>
        <n-space justify="space-between">
          <n-h5>Snake - game</n-h5>
          <n-button :type="'primary'" class="flex-shrink" size="small" @click="show = 6">Open</n-button>
        </n-space>
      </n-card>
    </div>
    <div v-if="show === 1">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">Load image</h1>
        <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="show = 0">
          <template #icon>
            <n-icon>
              <BackIcon />
            </n-icon>
          </template>
        </n-button>
      </div>
      <n-p>
        To load image to the game you will need to first upload it. In top menu click Project/Files, here you can
        upload your image. After upload, you can find path to your image in the table. Copy the file path and use it in
        your code if function
        <n-text code>love.graphics.newImage()</n-text>
        . This function returns the image, now you can draw it with
        <n-text code>love.graphics.draw()</n-text>
        , you will also need to specify
        <n-text code>X</n-text>
        and
        <n-text code>Y</n-text>
        position. Left corner is
        <n-text code>X=0, Y=0</n-text>
        .
      </n-p>
      <Code :code="loadImageCode" :blocks="loadImageBlockly" />
    </div>
    <div v-if="show === 2">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">Key pressed</h1>
        <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="show = 0">
          <template #icon>
            <n-icon>
              <BackIcon />
            </n-icon>
          </template>
        </n-button>
      </div>
      <n-p>
        This example show how to check if key is pressed. We are using
        <n-text code>love.keyboard.isDown("x")</n-text>
        function, where
        <n-text code>"x"</n-text>
        is the key. To show if key is pressed we use
        <n-text code>love.graphics.print() function</n-text>
        to print text to screen.
        <n-p>
          You can find names of the keys in LÖVE
          <n-a href="https://love2d.org/wiki/KeyConstant" target="_blank">documentation</n-a>
        </n-p>
      </n-p>
      <Code :code="keyIsDownCode" :blocks="keyIsDownBlockly" />
    </div>
    <div v-if="show === 3">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">Move object</h1>
        <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="show = 0">
          <template #icon>
            <n-icon>
              <BackIcon />
            </n-icon>
          </template>
        </n-button>
      </div>
      <n-p>
        This simple example shows how to move object with arrow keys. It uses delta time
        <n-text code>dt</n-text>
        , if you press key it will
        move object in that direction until you release the key. It moves the object by changing the
        <n-text code>X</n-text>
        and
        <n-text code>Y</n-text>
        values. You
        can manage the speed by changing the numerical value in the formula (original value is
        <n-text code>100</n-text>
        ).
      </n-p>
      <n-p>
        Also, you can change the keys, all of the keys you can use are defined in LÖVE
        <n-a href="https://love2d.org/wiki/KeyConstant" target="_blank">documentation</n-a>
      </n-p>
      <Code :code="moveWithKeyboardCode" :blocks="moveWithKeyboardBlockly" />
    </div>
    <div v-if="show === 4">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">How to shoot</h1>
        <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="show = 0">
          <template #icon>
            <n-icon>
              <BackIcon />
            </n-icon>
          </template>
        </n-button>
      </div>
      <n-p>
        First we need to setup some variables in
        <n-text code>love.load()</n-text>
        callback function. We need to create empty array for bullets
        <n-text code>bullets = {}</n-text>
        , we
        will also define starting position
        <n-text code>StartPosX</n-text>
        ,
        and dimension of our player
        <n-text code>width</n-text>
        ,
        <n-text code>height</n-text>
        (player will not move in this example only shoot
        bullets).
      </n-p>
      <Code :code="shootCodeLoad" :blocks="shootBlocklyLoad" />
      <n-h3>Draw player and bullets</n-h3>
      <n-p>
        Next we set how bullets and player will be drawn. Bullets will be red filled circles, player will ber blue
        rectangle. We set the color with
        <n-text code>love.graphics.setColor()</n-text>
        , last value is alpha this needs to be
        <n-text code>> 0</n-text>
        otherwise our color will not be visible. For drawing bullets we need to loop through bullets array and draw them
        one by one. Function
        <n-text code>love.graphics.print()</n-text>
        prints help message to the screen.
      </n-p>
      <Code :code="shootCodeDraw" :blocks="shootBlocklyDraw" />
      <n-h3>Define bullets</n-h3>
      <n-p>
        Next thin we need to do is create bullets. Bullet is crated when left mouse button is clicked. We define start
        position
        <n-text code>startX</n-text>
        ,
        <n-text code>startY</n-text>
        as middle of the player rectangle and target position as current position of the mouse cursor. We get the
        current mouse position with
        <n-text code>love.mouse.getX()</n-text>
        and
        <n-text code>love.mouse.getY()</n-text>
        . Next we create new bullet in variable
        <n-text code>newBullet</n-text>
        and save it to the end of bullets array
        <n-text code>table.insert(bullets, #bullets + 1, newBullet)</n-text>
        .
      </n-p>
      <Code :code="shootCodeBullet" :blocks="shootBlocklyBullet" />
      <n-h3>Move bullets</n-h3>
      <n-p>
        Now it is time to define how will the bullets move. We define delta X
        <n-text code>dx</n-text>
        and delta Y
        <n-text code>dy</n-text>
        and multiply by delta
        time
        <n-text code>dt</n-text>
        , if we add this to old position in bullet array we get the new position of the bullet. We need to do this for
        both
        <n-text code>X</n-text>
        and
        <n-text code>Y</n-text>
        positions.
        . New values are saved to the bullet array. Last thing we need to do is remove bullet from bullets array
        when it exits the screen. To do this we compare
        bullet position to screen width and height. If it is outside the screen it removed from bullets array.
      </n-p>
      <Code :code="shootCodeMove" :blocks="shootBlocklyMove" />
    </div>
    <div v-if="show === 5">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">Fifteen - game</h1>
        <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="show = 0">
          <template #icon>
            <n-icon>
              <BackIcon />
            </n-icon>
          </template>
        </n-button>
      </div>
      <n-p>
        Original tutorial source:
        <n-a
          target="_blank" href="https://simplegametutorials.github.io/love/fifteen/18.html">
          https://simplegametutorials.github.io/love/fifteen/18.html
        </n-a>
      </n-p>
      <n-h3>Rules</n-h3>
      <n-p>
        There is a board with 15 pieces and an empty space. Move the pieces around until they are in sequential order
        by using the arrow keys to move pieces into the empty space.
      </n-p>
      <n-h3>Overview</n-h3>
      <n-p>
        The pieces are stored as a grid of numbers. The number 16 represents the empty space. The other numbers are
        swapped with the empty space when an arrow key is pressed.
      </n-p>
      <n-p>
        At the start of the game, the grid is initially in sorted order, and random moves are made to shuffle it. (If
        the piece positions were totally random instead, it could result in an unsolvable board.)
      </n-p>
      <n-p>
        After a piece has been moved, the pieces are looped through, and if they all have their initial sorted values,
        then the game is over.
      </n-p>
      <n-h3>Drawing pieces</n-h3>
      <n-p>
        The pieces are drawn as squares. For now, a piece is drawn where the empty space should be. First we set grid
        size
        <n-text code>gridXCount</n-text>
        and
        <n-text code>gridYCount</n-text>
        . Then we get screen height with function
        <n-text code>love.graphics.getHeight()</n-text>
        . We need screen height so we can compute the size of one piece
        <n-text code>pieceSize</n-text>
        this will be diferent on every device, it depends on the screen size. Before drawing we need to loop through the
        grid by
        <n-text code>Y</n-text>
        and
        <n-text code>X</n-text>
        . Variable
        <n-text code>pieceDrawSize</n-text>
        is set to
        <n-text code>pieceSize - 1</n-text>
        so there will be black lines between the pieces. Next we set the color and draw rectangles. We also prepare
        function for printing numbers inside rectangles
        <n-text code>love.graphics.print()</n-text>
        , we leave the text field empty for now.
      </n-p>
      <Code :code="fifteenDrawCode" :blocks="fifteenDrawBlockly" />
      <n-h3>Get initial values</n-h3>
      <n-p>
        For getting initial values we need to create function
        <n-text code>get_initial_value()</n-text>
        A piece number is calculated by adding the
        <n-text code>X</n-text>
        position (i.e. column number) to the
        <n-text code>Y</n-text>
        position minus one (i.e. one
        less than the row number) multiplied by the number of pieces in a row. Now if you put this function as text
        input
        to the peint function we made in previous step and pass
        <n-text code>X</n-text>
        ,
        <n-text code>Y</n-text>
        values you will see that every rectangle has its own number.
      </n-p>
      <n-p>
        Second function we will create is called
        <n-text code>reset_game()</n-text>
        . This function will reset game state. For now we just make empty table
        <n-text code>grid</n-text>
        and loop that will fill it with initial values.
      </n-p>
      <Code :code="fifteenInitialValuesCode" :blocks="fifteenInitialValuesBlockly" />
      <n-h3>Remove last rectangle and print numbers</n-h3>
      <n-p>
        Now we should remove last rectangle, to do this we need to add if statement to the draw function. The number of
        pieces on each axis multiplied together gives the total number of pieces (i.e. 4 times 4 means 16 pieces), and a
        piece is drawn only if it isn't number 16.
      </n-p>
      <n-p>
        Also update
        <n-text code>love.graphics.print()</n-text>
        because the piece number should be the number saved in
        <n-text code>grid</n-text>
        on coordinates
        <n-text code>X</n-text>
        and
        <n-text code>Y</n-text>
        .
      </n-p>
      <Code :code="fifteenBoardCode" :blocks="fifteenBoardBlockly" />
      <n-h3>Move the game pieces</n-h3>
      <n-p>
        To move the game pieces we create function
        <n-text code>move(direction)</n-text>
        that takes direction as argument. First step in moving a piece is finding the position of the empty space. When
        the function is called it loops through a
        <n-text code>grid</n-text>

        , and if a piece is equal to the number of pieces on each axis multiplied together (i.e. it's the empty space).
        We store empty space postition in
        <n-text code>emptyX</n-text>
        and
        <n-text code>emptyY</n-text>
        .
      </n-p>
      <n-p>
        Now we will find the coordinates of new empty space by the
        <n-text code>direction</n-text>
        that was given as function argument. For examle if
        <n-text code>direction</n-text>
        is
        <n-text code>down</n-text>
        we subtract
        <n-text code>1</n-text>
        from the
        <n-text code>emptyY</n-text>
        value (we want to move one piece down in Y axis). New empty space coordinates are saved in
        <n-text code>newEmptyX</n-text>
        ,
        <n-text code>newEmptyY</n-text>
        .
      </n-p>
      <n-p>
        Before moving the piece we need to check that we can do that, we shouldn move the pieces outside the game area.
        To do that, we check that the
        <n-text code>newEmptyY</n-text>
        ,
        <n-text code>newEmptyX</n-text>
        position exists in
        <n-text code>grid</n-text>
        if it does we move the piece to its new position.
      </n-p>
      <Code :code="fifteenMoveCode" :blocks="fifteenMoveBlockly" />
      <n-h3>Move on keypress</n-h3>
      <n-p>
        For moving the game pieces on keypress will use callback function
        <n-text code>love.keypressed()</n-text>
        . Moving is done by creating simple if else statement and calling the
        <n-text code>move()</n-text>
        function we created earlier. Also we check if the game si complete, if so we will restart it.
      </n-p>
      <Code :code="fifteenKeypressCode" :blocks="fifteenKeypressBlockly" />
      <n-h3>Check if game is complete</n-h3>
      <n-p>
        Another important piece is function tto check if game is complete we will call it
        <n-text code>is_game_complete()</n-text>
        . This function loops through the
        <n-text code>grid</n-text>
        and check if every piece is equal its initial value if so it returns
        <n-text code>true</n-text>
        else it returns
        <n-text code>false</n-text>
        .
      </n-p>
      <Code :code="fifteenIsCompleteCode" :blocks="fifteenIsCompleteBlockly" />
      <n-h3>Shuffle the game</n-h3>
      <n-p>
        For shuffling the game pieces we need to update function
        <n-text code>reset_game()</n-text>
        . We add loop while game is completed shuffle game. A random number between 1
        and 4 is generated and a move is made in one of the four movement directions based on this number. This is
        repeated 1000 times. Then we need to move all the pieces to the
        <n-text code>left</n-text>
        and
        <n-text code>up</n-text>
        , so the empty piece will be always in the bottom right corner.
      </n-p>
      <n-p>Now the game should be playable in the browser.</n-p>
      <Code :code="fifteenShuffleCode" :blocks="fifteenShuffleBlockly" />
      <n-h3>Adding touch controls for Android</n-h3>
      <n-p>
        For controlling game on touch screen we use finger swipes. To implement that we will need need add some
        variables into
        <n-text code>love.load()</n-text>
        function. Variable
        <n-text code>begin_x</n-text>
        ,
        <n-text code>begin_y</n-text>
        are starting coordinates of the swipe and
        <n-text code>end_x</n-text>
        ,
        <n-text code>end_y</n-text>
        are ending coordinates of the swipe. Last variable is
        <n-text code>doingTouch</n-text>
        .
      </n-p>
      <n-p>
        For adding touch support we will use callback functions
        <n-text code>love.mousepressed()</n-text>
        and
        <n-text code>love.mousereleased()</n-text>
        both of them also work with touch screens. Function
        <n-text code>love.mousepressed()</n-text>
        is called when touch or mouse press is registered, here we will set the
        <n-text code>begin_x</n-text>
        and
        <n-text code>begin_y</n-text>
        values and set
        <n-text code>doingTouch</n-text>
        to
        <n-text code>true</n-text>
        . In function
        <n-text code>love.mousereleased()</n-text>
        we need to compute
        <n-text code>dx</n-text>
        and
        <n-text code>dy</n-text>
        . With
        <n-text code>dx</n-text>
        and
        <n-text code>dy</n-text>
        we will now if the swipe is on x-axis or y-axis. After that we will just compare the begin and end coordinates
        of that axis and call
        <n-text code>move()</n-text>
        function we defined erlier. If
        <n-text code>dx == dy</n-text>
        , or in other words simple screen touch. We check if the game si complete, if so we will restart it.
      </n-p>
      <Code :code="fifteenAndroidCode" :blocks="fifteenAndroidBlockly" />
    </div>
    <div v-if="show === 6">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">Snake - game</h1>
        <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="show = 0">
          <template #icon>
            <n-icon>
              <BackIcon />
            </n-icon>
          </template>
        </n-button>
      </div>
    </div>
    <div v-if="show === 7">
      <div class="flex flex-nowrap flex-row justify-between mb-4">
        <h1 class="m-0 text-2xl font-bold">How LÖVE works</h1>
        <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="show = 0">
          <template #icon>
            <n-icon>
              <BackIcon />
            </n-icon>
          </template>
        </n-button>
      </div>
      <n-p>
        Original tutorial source:
        <n-a
          target="_blank" href="https://sheepolution.com/learn/book/4">
          https://sheepolution.com/learn/book/4
        </n-a>
      </n-p>
      <n-p>
        LÖVE is what we call a framework. Simply said: It's a tool that makes programming games easier. LÖVE is made
        with C++ and OpenGL, which are both considered to be very difficult. The source code of LÖVE is very complex.
        But all this complex code makes creating a game a lot easier for us.
      </n-p>

      <n-h3>How does LÖVE work?</n-h3>
      <n-p>
        LÖVE calls 3 functions. First it calls
        <n-text code>love.load()</n-text>
        . In here we create our variables. After that it calls
        <n-text code>love.update()</n-text>
        and
        <n-text code>love.draw()</n-text>
        , repeatedly in that order.
      </n-p>
      <n-p>
        <n-text code>love.load()</n-text>
        ->
        <n-text code>love.update()</n-text>
        ->
        <n-text code>love.draw()</n-text>
        ->
        <n-text code>love.update()</n-text>
        ->
        <n-text code>love.draw()</n-text>
        ->
        <n-text code>love.update()</n-text>
        ...
      </n-p>
      <Code :code="howLoveCode" :blocks="howLoveBlockly" />
      <n-p>
        Behind the scenes, LÖVE calls these functions, and we to create them, and fill them with code. This is what
        we call a callback function. LÖVE uses multiple callback functions you can find all of them in category
        callback.
      </n-p>
      <n-h3>Draw to the screen</n-h3>
      <n-p>
        If we want to draw something to the screen we use function
        <n-text code>love.draw()</n-text>
        . For example for rectangle, we can do the following:
      </n-p>
      <Code :code="howLoveDrawCode" :blocks="howLoveDrawBlockly" />
      <n-p>
        We define, rectangle X, Y position, width and height. The other values can be left as 0. you can find more about
        them in
        <n-a href="https://love2d.org/wiki/love.graphics.rectangle" target="_blank">documentation</n-a>
        .
      </n-p>

      <n-p>
        When we want to update our game we use function
        <n-text code>love.update()</n-text>
        . For example you can change the position of our rectangle. Find out how to do it in: Move object tutorial.
      </n-p>
    </div>
  </div>
</template>

<script>
import Code from '@/Pages/Project/Tutorial/Code'
import useTutorials from '@/Tutorials'
import { ref, watch } from 'vue'
import {
  ArrowBackOutline as BackIcon,
} from '@vicons/ionicons5'

export default {
  name: 'Tutorial',
  components: {
    Code,
    BackIcon,
  },
  props: {
    tutorial: Number,
  },
  setup(props) {
    const {
      loadImageBlockly,
      loadImageCode,
      keyIsDownBlockly,
      keyIsDownCode,
      moveWithKeyboardBlockly,
      moveWithKeyboardCode,
      shootCodeMove,
      shootCodeDraw,
      shootCodeLoad,
      shootBlocklyMove,
      shootBlocklyLoad,
      shootCodeBullet,
      shootBlocklyDraw,
      shootBlocklyBullet,
      howLoveBlockly,
      howLoveCode,
      howLoveDrawBlockly,
      howLoveDrawCode,
      fifteenDrawBlockly,
      fifteenDrawCode,
      fifteenInitialValuesBlockly,
      fifteenInitialValuesCode,
      fifteenBoardBlockly,
      fifteenBoardCode,
      fifteenMoveBlockly,
      fifteenMoveCode,
      fifteenKeypressBlockly,
      fifteenKeypressCode,
      fifteenIsCompleteBlockly,
      fifteenIsCompleteCode,
      fifteenShuffleBlockly,
      fifteenShuffleCode,
      fifteenAndroidBlockly,
      fifteenAndroidCode,
    } = useTutorials()
    const show = ref(0)

    watch(() => props.tutorial, () => {
      show.value = props.tutorial
    })

    return {
      loadImageBlockly,
      loadImageCode,
      keyIsDownBlockly,
      keyIsDownCode,
      moveWithKeyboardBlockly,
      moveWithKeyboardCode,
      shootCodeMove,
      shootCodeDraw,
      shootCodeLoad,
      shootBlocklyMove,
      shootBlocklyLoad,
      shootCodeBullet,
      shootBlocklyDraw,
      shootBlocklyBullet,
      howLoveBlockly,
      howLoveCode,
      howLoveDrawBlockly,
      howLoveDrawCode,
      fifteenDrawBlockly,
      fifteenDrawCode,
      fifteenInitialValuesBlockly,
      fifteenInitialValuesCode,
      fifteenBoardBlockly,
      fifteenBoardCode,
      fifteenMoveBlockly,
      fifteenMoveCode,
      fifteenKeypressBlockly,
      fifteenKeypressCode,
      fifteenIsCompleteBlockly,
      fifteenIsCompleteCode,
      fifteenShuffleBlockly,
      fifteenShuffleCode,
      fifteenAndroidBlockly,
      fifteenAndroidCode,
      show,
    }
  },
}
</script>
