# Workout-Tracker

User Story

AS A a person trying to keep track of their progress I WANT to be able to log all the accounts of my workout routine and see the progress I'm making

How to Use

Open URL https://agile-shore-53165.herokuapp.com

Click the 'New Workout' button.
Select your exercise and fill in the prompts
Add your Exercise. Once it's complete, click your "complete" button.
When you hit complete you should be brought back to the main page to see your progress.
Click your Dashboard tab.
You should be able to see pie and circle charts on your prgress
Built With

* MongoDB
* RoboT3
* Mongoose

Task Breakdown

We first need to look at the boiler plate to identify what our code is doing
We can notice there are no api or html routes. We also do not have any models or server to work with.
Once we go over the code, we npm install our dependencies.
Once installed we can start creating our server.
We require our dependencies and folders that will be needed to help our server run.
Then we create our Workout Model that our seeders file will flow through and prepopulate our database and collection
We then move on to our html-routes. We want to make sure that when we click certain buttons on our html pages, they're taking us to where we want them to go.
Moving on to our api-routes we have to make our calls
We make our first call to get all the information from the collection we seeded.
We then make a get call for range, and by ID.
Then we use a post/create to add the get function info onto our html pages.
Then we make sure that we are putting only one workout ID onto the page at a time.
