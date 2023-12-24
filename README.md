# Unbundl-Task-

Task 1
TASK 1

Firstly, we have all add all necessary files and then doctype html
Then in the <body> section contains a <div> with the class "product," representing the product carousel.
•	Inside this div, there are two <i> elements with the IDs "left" and "right," which resumed represent left and right navigation arrows for the carousel.
•	A <ul> list with the class "carousel" is used to hold a series of <li> items, each representing a product card in the carousel.
•	It uses of external stylesheets and scripts promotes a separation of concerns, making the code more modular and maintainable.
•	The choice of Font Awesome for icons is common and convenient, allowing for easy integration of scalable vector icons.
•	The defer attribute on the script tag ensures that the script is executed after the HTML document is parsed, reducing the page load time.



Variable Declarations:
•	product: Represents the container of the entire carousel.
•	carousel: Represents the carousel element containing product cards.
•	firstCardWidth: Stores the width of the first product card in the carousel.
•	arrowBtns: Node List containing left and right arrow buttons.
•	carouselChildrens: An array containing the child elements of the carousel.

Initialization:
•	isDragging: A Boolean flag indicating whether the user is currently dragging the carousel.
•	isAutoPlay: A Boolean flag indicating whether auto play is enabled.
•	startX: Initial X-coordinate of the cursor when dragging starts.
•	startScrollLeft: Initial scroll position of the carousel when dragging starts.
•	timeoutId: Stores the ID of the timeout used for auto play.



TASK 2


Task 2

It begins with the necessary document type and HTML tags. the head section includes metadata, such as character set and viewport settings, along with links to external stylesheets for Bootstrap and Font Awesome, contributing to the visual design. The body section comprises a centred heading, "My chocolate cart," and a container div holding the main content. Within this container, individual divs represent each chocolate item in the cart. Each chocolate div contains an image, description, quantity input with increment and decrement buttons, and the corresponding unit and total prices. The checkout section, also within the container, displays the subtotal, tax, and total price, each accompanied by their respective values. A checkout button concludes the cart, styled with Bootstrap classes. The script tag at the end links to an external JavaScript file, 'app.js,' presumably handling dynamic functionality such as quantity calculations and updating display values. 



updateChocolateNumber Function:
•	This function takes three parameters: product (representing the chocolate item), price (the unit price of the chocolate), and is Increasing (a Boolean indicating whether to increase or decrease the quantity).
•	It retrieves the current quantity from the input field, increments or decrements it based on the is Increasing parameter, and ensures the quantity stays between 0 and 8.
•	It updates the input field with the new quantity and calculates and updates the total price for the specific chocolate item.
•	Finally, it calls the calculate Total function to update the overall cart total.
2.	getInputValue Function:
•	This function takes a product parameter and retrieves the current quantity from the corresponding input field.
3.	calculate Total Function:
•	This function calculates the total price for each chocolate item, the subtotal, tax (assumed to be 10% of the subtotal), and the overall total price.
•	It updates the corresponding HTML elements displaying these values.

