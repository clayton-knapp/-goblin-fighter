## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)


HTML Plan
-- Hero Div
    -- Hero HP
    -- Hero Image
-- Defeated Goblins DIV
    --Show # of defeated Goblins
-- Add a New Goblin
    -- Form with Input and Button
-- Display Goblins Div
    -- Displays the list of Goblins in the array

EVENTS
-- Enter New Goblin Submit
    -- default form behavior
    -- Grabs name input value and stores in a new goblin object
    -- pushes new goblin object into goblin array
    -- updates DOM to display Goblins - call display func which calls render func

-- Click on Goblin
    -- Run math to see if Goblin hit Hero. if so decremenent hero HP
    -- Display alert if Goblin hit Hero
    -- Run math to see if Hero hit Goblin, is so decrement goblin HP
    -- Display alert if Hero hit Goblin
    -- Check to see if Goblin HP = 0
        -- if so increment defeated Goblin count
        -- add class of dead - disable click, make opaque
    -- Check to see if Hero HP = 0
        -- if so alert Game over
        -- make class of hero dead - rotate image?
    -- Update the Goblin Display
    -- Update the defeatedCount Display




If goblin HP = 0, then disable click

FUNCTIONS
-- Display Function
    -- clears the DOM
    -- iterates with for loop through array
    -- sends each object to render function which returns a Node for each goblin
    -- appends the returned node to the goblin list

-- Render Function
    -- takes in a goblin object (name + HP)
    -- creates 4 divs, 1 container, 1 p for HP, 1p for name, 1 for emoji
    -- add text content of HP and name to p divs
    -- append the divs together
    -- return appended node


    STILL LETS HERO HP GO NEGATIVE AFTER GAME OVER
    FIX BUG OF DEAD CLASS NOT ADDED TO GOBLIN