<template>
  <div class="flex flex-nowrap flex-row justify-between mb-4">
    <h1 class="m-0 text-2xl font-bold">Fifteen - game</h1>
    <n-button :type="'primary'" class="flex-shrink self-center" size="small" @click="goBack">
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
</template>

<script>
import Code from '@/Pages/Tutorials/Tutorial/Code'
import { ArrowBackOutline as BackIcon } from '@vicons/ionicons5'
import fifteenTutorial from '@/Pages/Tutorials/code/fifteenTutorial.json'
import { onMounted } from 'vue'

export default {
  name: 'Fifteen',
  components: {
    Code,
    BackIcon,
  },
  emits: ['goBack', 'loadingFinish'],
  setup(props, { emit }) {
    onMounted(() => {
      emit('loadingFinish')
    })

    const tutorial = fifteenTutorial.tutorial

    const fifteenDrawBlockly = tutorial[0].blockly
    const fifteenDrawCode = tutorial[0].code

    const fifteenInitialValuesBlockly = tutorial[1].blockly
    const fifteenInitialValuesCode = tutorial[1].code

    const fifteenBoardBlockly = tutorial[2].blockly
    const fifteenBoardCode = tutorial[2].code

    const fifteenMoveBlockly = tutorial[3].blockly
    const fifteenMoveCode = tutorial[3].code

    const fifteenKeypressBlockly = tutorial[4].blockly
    const fifteenKeypressCode = tutorial[4].code

    const fifteenIsCompleteBlockly = tutorial[5].blockly
    const fifteenIsCompleteCode = tutorial[5].code

    const fifteenShuffleBlockly = tutorial[6].blockly
    const fifteenShuffleCode = tutorial[6].code

    const fifteenAndroidBlockly = tutorial[7].blockly
    const fifteenAndroidCode = tutorial[7].code

    const goBack = () => {
      emit('goBack')
    }

    return {
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
      goBack,
    }
  },
}
</script>

<style scoped>

</style>
