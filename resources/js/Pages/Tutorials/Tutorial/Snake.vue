<template>
  <div class="flex flex-nowrap flex-row justify-between mb-4">
    <div class="flex-row flex flex-nowrap justify-start">
      <h1 class="m-0 text-2xl font-bold">Snake - game</h1>
      <n-tag class="self-center ml-6" type="error" size="small" round>Hard</n-tag>
    </div>
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
      target="_blank" href="https://simplegametutorials.github.io/love/snake/18.html">
      https://simplegametutorials.github.io/love/snake/18.html
    </n-a>
  </n-p>
  <n-h3>Rules</n-h3>
  <n-p>
    Eating food makes the snake grow. When the food is eaten it moves to another random position. The snake will wrap
    around to the other side of the screen when it goes off the edge. The game is over when the snake crashes into
    itself.
  </n-p>
  <n-h3>Overview</n-h3>
  <n-p>
    The snake is represented by a sequence of X and Y positions.

    The food is represented by a single X and Y position.

    When the snake moves, then the last item in the sequence (i.e. its old tail position) is removed, and an item is
    added to the front (i.e. its new head position) in the direction that the snake is going.

    If the new head position is at the same position as the food's position, then the snake's tail is not removed, and
    the food is moved to a random position not occupied by the snake.

    If the new head position is at the same position as any of the snake's other segments, then the game is over.
  </n-p>

  <n-h3>Setup</n-h3>
  <n-p>
    Snake will be moving in the playing area represented by grid of cells with size
    <n-text code>20</n-text>
    , so first we set grid size
    <n-text code>gridXCount</n-text>
    and
    <n-text code>gridYCount</n-text>
    . This grid will be different on every device, it depends on the screen size. We need screen height and width so we
    can compute the size. We get screen height and width with functions
    <n-text code>love.graphics.getHeight()</n-text>
    <n-text code>love.graphics.getWidth()</n-text>
    .
  </n-p>
  <Code :code="snakeLoadCode" :blocks="snakeLoadBlockly" />
  <n-h3>Draw Grid</n-h3>
  <n-p>
    Now we can draw the grid. First we set the color and then draw rectangle that represents the the playing area. Next
    we should create function to draw snake and food, we will create function
    <n-text code>drawCell(x,y)</n-text>
    that draws cell in position
    <n-text code>X</n-text>
    ,
    <n-text code>Y</n-text>
    .
  </n-p>
  <Code :code="snakeDrawGridCode" :blocks="snakeDrawGridBlockly" />
  <n-h3>Create snake</n-h3>
  <n-p>
    Snake will be represented as its segments
    <n-text code>snakeSegments</n-text>
    . That means we need to create table of tables where every table will be one segment and have two values
    <n-text code>X</n-text>
    and
    <n-text code>Y</n-text>
    . These are ste coordinates of the segment. Also we should declare the direction in which will be snake moving
    <n-text code>directionQueue</n-text>
    and if the snake is alive
    <n-text code>snakeAlive</n-text>
    . All of this will be wrapped in function
    <n-text code>reset_game()</n-text>
    so we cen use it to reset the game to its initial state. Dont forget to add
    <n-text code>reset_game()</n-text>
    tp your
    <n-text code>love.load()</n-text>
    function to get initial state.
  </n-p>
  <Code :code="snakeResetCode" :blocks="snakeResetBlockly" />
  <n-h3>Draw snake snake and food</n-h3>
  <n-p>
    Now that we have created snake we can draw it. just update the
    <n-text code>love.draw()</n-text>
    to loop through the
    <n-text code>snakeSegments</n-text>
    and draw them with
    <n-text code>drawCell(x,y)</n-text>
    . Food is drawn the same way,
    <n-text code>foodPosition</n-text>
    will be created in next section (if you want to run code now any integer).
  </n-p>
  <Code :code="snakeDrawSnakeCode" :blocks="snakeDrawSnakeBlockly" />
  <n-h3>Create Food</n-h3>
  <n-p>
    To create food first we need to find where to put it. It can not be in the cells occupied by the snake. To do this
    we create function
    <n-text code>createFood()</n-text>
    . Here we loop through the grid of cells and check if the cell is occupied by the snake, if it is not we remember
    this cell by putting it in table
    <n-text code>possibleFoodPositions()</n-text>
    . After we go through the whole grid we pick random cell from the table
    <n-text code>possibleFoodPositions()</n-text>
    with function.
    <n-text code>love.math.random()</n-text>
    . This is our new food position saved in variable
    <n-text code>foodPosition</n-text>
    .
  </n-p>
  <Code :code="snakeCreateFoodCode" :blocks="null" />
  <n-h3>Move the snake</n-h3>
  <n-p>
    Snake is moved automatically user will control only the direction in which the snake is moving. The snake will move
    once every 0.15 seconds. A
    <n-text code>timer</n-text>
    variable starts at
    <n-text code>0</n-text>
    and increases by
    <n-text code>dt</n-text>
    each frame. When the timer is at or above
    <n-text code>0.15</n-text>
    snake will move one cell and
    <n-text code>timer</n-text>
    is reset to
    <n-text code>0</n-text>
    . Now we need to create food when game starts, add
    <n-text code>createFood()</n-text>
    to
    <n-text code>reset_game()</n-text>
    .
  </n-p>
  <n-p>
    The next position of the snake's head is calculated by adding 1 to the current X position of the snake's head (i.e.
    the first element of the segments table). This new segment is added to the start of the segments table. The last
    element of the segments table (the snake's tail) is removed.
  </n-p>
  <n-p>
    The direction will be saved in the
    <n-text code>directionQueue</n-text>
    . Queue is used because the player may want to give multiple directions within a single tick. For example player may
    want the snake to move down for the next tick, and then left on the tick after.
  </n-p>
  <n-p>
    Also we need to check if the next position would be off the grid, snake is then wrapped around to the position on
    the other side. We just compare the
    <n-text code>nextXPosition</n-text>
    and
    <n-text code>gridXCount</n-text>
    .
  </n-p>
  <Code :code="snakeModeDirectionCode" :blocks="null" />
  <n-h3>Check if snake is dead</n-h3>
  <n-p>
    Last thing is check if the snake is dead. The snake's segments are looped through, and if any of them except for the
    last one is at the same position as the snake's new head position, then the snake has crashed into itself. The last
    segment is not checked because it will be removed within the same tick.
  </n-p>
  <Code :code="snakeGameOverCode" :blocks="null" />
  <n-h3>Eat food</n-h3>
  <n-p>
    If the snake's new head position is the same as the food's position, then the snake's tail is not removed, and the
    food gets a new random position.
  </n-p>
  <Code :code="snakeMoveCode" :blocks="null" />
  <n-h3>Control the snake direction on keypress</n-h3>
  <n-p>
    To add keypress controls we can use
    <n-text code>love.keypressed(key)</n-text>
    here we need to specify the keys. In this example we will use the arrow keys. Before moving the snake we should
    check if you can move in that direction. You can not go backwards and you can not go the same direction that you are
    already going (pressing right arrow key multiple time should have no effect). Moving the snake is done by inserting
    the direction to the
    <n-text code>directionQueue</n-text>
    we created earlier with
    <n-text code>table.insert(directionQueue, 'up')</n-text>
    .
  </n-p>
  <Code :code="snakeKeypressCode" :blocks="null" />
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
    of that axis and insert the direction to the
    <n-text code>directionQueue</n-text>
    . If
    <n-text code>dx == dy</n-text>
    , or in other words simple screen touch. We check if the snake is dead, if so we will restart the game.
  </n-p>
  <Code :code="snakeAndroidCode" :blocks="null" />
</template>

<script>
import Code from '@/Pages/Tutorials/Tutorial/Code'
import { ArrowBackOutline as BackIcon } from '@vicons/ionicons5'
import snake from '@/Pages/Tutorials/code/snakeTutorial.json'
import { onMounted } from 'vue'

export default {
  name: 'Snake',
  components: {
    Code,
    BackIcon,
  },
  emits: ['goBack', 'loadingFinish'],
  setup(props, { emit }) {
    onMounted(() => {
      emit('loadingFinish')
    })

    const tutorial = snake.tutorial
    const snakeLoadBlockly = tutorial[0].blockly
    const snakeLoadCode = tutorial[0].code

    const snakeDrawGridBlockly = tutorial[1].blockly
    const snakeDrawGridCode = tutorial[1].code

    const snakeResetBlockly = tutorial[2].blockly
    const snakeResetCode = tutorial[2].code

    const snakeDrawSnakeBlockly = tutorial[3].blockly
    const snakeDrawSnakeCode = tutorial[3].code

    const snakeCreateFoodCode = tutorial[4].code

    const snakeModeDirectionCode = tutorial[5].code
    const snakeMoveCode = tutorial[6].code
    const snakeGameOverCode = tutorial[7].code
    const snakeKeypressCode = tutorial[8].code
    const snakeAndroidCode = tutorial[9].code

    const goBack = () => {
      emit('goBack')
    }

    return {
      snakeLoadBlockly,
      snakeLoadCode,
      snakeDrawGridBlockly,
      snakeDrawGridCode,
      snakeResetBlockly,
      snakeResetCode,
      snakeDrawSnakeBlockly,
      snakeDrawSnakeCode,
      snakeCreateFoodCode,
      snakeGameOverCode,
      snakeMoveCode,
      snakeModeDirectionCode,
      snakeKeypressCode,
      snakeAndroidCode,
      goBack,
    }
  },
}
</script>
