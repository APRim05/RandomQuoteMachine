    $(document).ready(function() {

        function randomQuoteGenerator() {
            var quotesArray = [
                "You don't get your name in lights by playing it safe.",
                "You miss 100 percent of the shots you don't take.",
                "Hard work beats talent when talent fails to work hard.",
                "There may be people that have more talent than you, but there's no excuse for anyone to work harder than you do.",
                "Persistence can change failure into extraordinary achievement.",
                "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
                "You are free to walk out of my life during my struggle, but don't expect to walk back in during my success.",
                "Your mistakes should be your motivation, not your excuses.",
                "Age has many beautiful gifts but one we could live without is the pride and resentment we hold onto when we have conflicts with others. The forgiving, free spirit of children is our true nature. Remember this when you feel stubborn.",
                "The good life is one inspired by love and guided by knowledge.",
                "Work until you don't have to introduce yourself.",
                "An essential aspect of creativity is not being afraid to fail.",
                "Don't count the days, make the days count.",
                "To be able, at any moment, to sacrifice what you are, for what you will become.",
                "Today I will do what others won't so tomorrow I can do what others can't.",
                "I'm not here to take part, I'm here to take over.",
                "Talent does not exist. We are all equal as human beings. You could be anyone if you put in the time. You will reach the top and that's that.",
                "When getting your start, you should fear most things that conceal complexity. Abstracts in the wrong hands can give the appearance of advanced skills, while hiding the fact that a developer has an inferior udnerstanding of the underlying concepts."
            ];

            var authorsArray = [
                "Zlatan Ibrahimovic",
                "Wayne Gretzky",
                "Kevin Durant",
                "Derek Jeter",
                "Matt Biondi",
                "Mark Twain",
                "Lazar Angelov",
                "Lazar Angelov",
                "Alexandr Milov",
                "Bertrand Russell",
                "Leonardo Dicaprio",
                "Edwin Land",
                "Muhammad Ali",
                "Dr. Eric Thomas",
                "Jerry Rice",
                "Conor McGregor",
                "Conor McGregor",
                "William Pritchard"
            ];

            $('.quote, .author').animate({ // Creating a fade in/out effect.
                    opacity: 0
                }, 300, function() {
                    $(this).animate({ opacity: 1 }, 300);

                    /* I set the .text() method inside the .animate() method 
                           so the text will output exactly when animated. */
                    var randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
                    var quote = randomQuote.split("randomQuote");
                    $('.quote').text("''" + quote[0] + "''");
                    for (var i = 0; i < authorsArray.length; i++) {
                        if (randomQuote === quotesArray[i]) {
                            $('.author').text("- " + authorsArray[i]);
                        }
                    }
                }) // End of Animate

        };
        var randomQuote = $('.quote').text();
        var author = $('.author').text();

        function tweetQuote(randomQuote, author) {
            var randomQuote = $('.quote').text();
            var author = $('.author').text();
            var url = 'https://twitter.com/intent/tweet?text=' + randomQuote + author;
            console.log(url);
            window.open(url, '_blank');
        };

        $("#newQuote").on("click", function() {
            randomQuoteGenerator();
        });
        randomQuoteGenerator();

        $("#tweetQuote").on("click", function() {
            tweetQuote(randomQuote, author);
        });

    });

    /*code to change delay of hover menu
                var delay = 1000,
                   setTimeoutConst;
                $('.img').on('hover', function() {
                    setTimeoutConst = setTimeout(function() {
                        //do something
                    }, delay);
                }, function() {
                    clearTimeout(setTimeoutConst);

                });*/
