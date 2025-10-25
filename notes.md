# Step-by-step approach (instructions only)

1. Start with index.html
    - Create basic HTML5 structure with head and body
    - Add a container div with an ID (like "container" or "grid-container")
    - Include a button for resizing the grid (research <button> tag and onclick attribute)
    - Link your CSS file in the head section
    - Link your JavaScript file before closing body tag
    - Remember: don't manually create the grid divs here - JavaScript will do that

2. Create basic styles in styles.css
    - Set up the container div to have a fixed size (like 960px × 960px)
    - Use Flexbox properties: display: flex, flex-wrap: wrap
    - Style the individual grid squares (you'll target them with a class like .grid-square)
    - Make sure each square is perfectly sized using flex-basis, width, and height
    - Critical: Set box-sizing: border-box to handle borders properly
    - Add hover effects with :hover pseudo-class
    - Consider adding transitions for smooth color changes

3. Work with your script.js:
    > Create the grid generation function first
        - Write a function that takes a number (like 16) and creates that many squares per side
        - Use document.createElement() to create div elements
        - Calculate the size each square should be (container size ÷ number of squares)
        - Use a nested loop structure: outer loop for rows, inner loop for columns
        - Add a CSS class to each created square
        - Append each square to the container using appendChild()

    > Then add the hover functionality
        - Research addEventListener() for 'mouseenter' and 'mouseleave' events
        - Decide between adding listeners to each square vs. using event delegation
        - Create a function that changes the background color of the hovered square
        - Consider how you'll track which squares have been "drawn on"

    > Finally implement the resize feature
        - Add an event listener to your button
        - Use prompt() to get user input for grid size
        - Add input validation (check it's a number, limit to 100)
        - Clear the existing grid (remove all child elements from container)
        - Call your grid generation function with the new size
        - Make sure the container stays the same total size

    > Extra credit enhancements (optional)
        - For random colors: research Math.random() and RGB color format
        - For progressive darkening: track interaction count per square, modify opacity
        - Consider using data attributes to store state information on elements




# Key concepts to research

- DOM manipulation: createElement, appendChild, removeChild
- Event handling: addEventListener, event types, event delegation
- Flexbox: flex-wrap, flex-basis, justify-content
- CSS calculations: Using calc() for dynamic sizing
- User input: prompt(), input validation, parseInt()
- The beauty of this project is that it combines several fundamental web development concepts in a visual, interactive way. Each challenge builds on the previous one, so tackle them in order!