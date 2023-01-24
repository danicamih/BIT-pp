// In your IDE of choice, create a new JavaScript file named festival.js and make it so that all
// code written in the file follows strict mode.
// Create an anonymous immediately-invoking function that will hold the main execution of all
// program calls. Writing a simple command console.log(“Hi”) inside this function and running
// code should output “Hi“ in the console.
// Create constructor functions with properties representing the following:
// ● Genre - name
// ● Movie - title, genre (instance of Genre), length
// ● Program - date, list of movies (initially empty) and total number of movies
// ● Festival - name, list of programs (initially empty), and number of movies in all programs
// Add method getData to Genre which returns formatted string as first and last letter of genre
// name
// 'Action'; AN
// 'Drama'; DA
// 'Comedy'; CY
// Add getData method to Movie. It should return a formatted string consisting of the movie title,
// length and genre acronym.
// The Shawshank Redemption, 130min, AN
// Add addMovie method to Program. It should receive a Movie and add the movie to the movie
// list of a given program.
// Add addProgram method to Festival. It should receive a Program and add the program to the
// list of the given festival’s programs.
// Add getData method to Program. It should return a formatted string of all data related to the
// program. The string should contain date, program length (calculated from length of all movies in a
// list) and data about movies in a list (see the example below). To display movie data, use Movie’s
// getData method.
// Date, program length from all movies
// First movie title, length and genre
// Second movie title, length and genre
// Third movie title, length and genre
// Fourth movie name and length and genre
// Add method getData to Festival which return formatted string like festival name, number of
// movies in all programs and all programs listed. Use Programs getData method to list all
// programs. (example output is shown below)
// Weekend festival has 4 movie titles
// 28.10.2017, program duration 368min
// Spider-Man: Homecoming, 133min, AN
// War for the Planet of the Apes, 140min, DA
// The Dark Tower, 95min, WN
// 29.10.2017, program duration 108min
// Deadpool, 108min, CY

// Inside your immediately-invoking function, add createMovie function that receives a movie title,
// movie length and genre (as a string) as parameters and returns a created Movie.
// Inside your immediately-invoking function, add createProgram function that receives a date and
// returns a created Program.
// Start creating your movie festival.
// In your main program function, create an instance of the Festival object.
// Create two instances of Program using createProgram function.
// Create four instances of Movie object using createMovie function. Add all created movies to
// both programs using the addMovie method.
// Add the created program instances to the created festival instance using festival’s addProgram
// method.
// Display festival’s data using getData method.
// Hints
// ● List is a synonym for array, so when we say a list of movies, it’s actually an array of movie
// objects
// ● Use JS built-in Date()object to create Date object
// ● Use \t and \n special strings to format output
// ● Use built-in String methods to transform text from lowercase to uppercase
// ● Use Array’s built-in methods to add and remove elements from an array

// When adding a movie to the movie list, make sure that there are no more than 4 movies of the
// same genre. Also, length of all movies in a list can not be longer than 8 hours.
// Handle error when you enter text instead of a number for movie length. Try to stop program
// execution when this type of error happens.



'use strict';

(function () {
    
        function Genre(name) {
            this.name = name;
            this.getData = function () {
                var firstLetter = this.name.charAt(0);
                var lastLetter = this.name.charAt(this.name.length - 1);
                var result = firstLetter + lastLetter;
                return result.toUpperCase();
            }
        }
    
        function Movie(title, genre, length) {
            this.title = title;
            this.genre = genre;
            this.length = length;
            this.getData = function () {
                return this.title + ', ' + this.length + 'min, ' + this.genre.getData();
            }
        }
    
        function Program(date) {
            this.date = new Date(date);
            this.listOfMovies = [];
            this.totalMovies = 0;
            this.addMovie = function (movie) {
                this.listOfMovies.push(movie);
                this.totalMovies++;
            }
            this.getData = function () {
                var result = '';
                var programLength = 0;
                for (var i = 0; i < this.listOfMovies.length; i++) {
                    programLength += this.listOfMovies[i].length;
                }
                result += this.date.getDate() + '.' + (this.date.getMonth() + 1) + '.' + this.date.getFullYear() + ', program duration ' + programLength + 'min\n';
                for (var i = 0; i < this.listOfMovies.length; i++) {
                    result += '\t' + this.listOfMovies[i].getData() + '\n';
                }
                return result;
            }
        }
    
        function Festival(name) {
            this.name = name;
            this.listOfPrograms = [];
            this.totalMovies = 0;
            this.addProgram = function (program) {
                this.listOfPrograms.push(program);
                this.totalMovies += program.totalMovies;
            }
            this.getData = function () {
                var result = '';
                result += this.name + ' has ' + this.totalMovies + ' movie titles\n';
                for (var i = 0; i < this.listOfPrograms.length; i++) {
                    result += this.listOfPrograms[i].getData();
                }
                return result;
            }
        }
    
        function createMovie(title, length, genre) {
            var genre = new Genre(genre);
            var movie = new Movie(title, genre, length);
            return movie;
        }
    
        function createProgram(date) {
            var program = new Program(date);
            return program;
        }

        var festival = new Festival('Weekend festival');
        var program1 = createProgram('10/28/2017');
        var program2 = createProgram('10/29/2017');
        var movie1 = createMovie('Spiderman', 133, 'action');
        var movie2 = createMovie('War for the Planet of the Apes', 140, 'drama');
        var movie3 = createMovie('The Dark Tower', 95, 'western');
        var movie4 = createMovie('Deadpool', 108, 'comedy');
        var movie5 = createMovie('The Dark Tower', 95, 'western');
        var movie6 = createMovie('Titanic', 108, 'drama');
        var movie7 = createMovie('Mullholand drive', 95, 'thriller');

        program1.addMovie(movie1);
        program1.addMovie(movie2);
        program1.addMovie(movie3);
        program1.addMovie(movie4);

        program2.addMovie(movie5);
        program2.addMovie(movie6);
        program2.addMovie(movie7);

        festival.addProgram(program1);
        festival.addProgram(program2);

        console.log(festival.getData());      

    })();



