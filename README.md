String.levenshtein
==================

  In information theory and computer science, the Levenshtein distance is a metric for 
  measuring the amount of difference between two sequences (called edit distance). 
  The Levenshtein distance between two strings is given by minimum number of operations 
  needed to transform one string into another given string, where possible operations are insertion,
  deletion, or substitution of a single character. The Levenshtein distance algorithm has been used in: 
       * Spell checking
       * Speech recognition
       * DNA analysis
       * plagiarism detection

  The complexity of the algorithm is O(mXn), where n and m are the length of string1 and string2.


![Screenshot](http://www.levenshtein.net/images/levenshtein_meilenstein_matrix.gif)


How to use
----------

First you must to include the JS files in the head of your HTML document.

            #HTML
            <script type="text/javascript" src="mootools.js"></script>
            <script type="text/javascript" src="String.levenshtein.js"></script>

In your JavaScript code.

           #JavaScript     
           var words = ["rodion","dunia","raskolnikov","adrian","statescu","sunday","saturday","jquery","mootools","dojo"];
           function matchWords(input) {

              return words.filter(function(word){

                //compute levensthein distance
                var lev = word.levenshtein(input);  

                if(lev >=0 && lev <= 3 ) {

                   return word;
                }

             });    
            }
            var input = "rascolnicov";
            var similarities = matchWords(input);
            if(window.console) console.log("Did you mean: " + similarities);
            var similar = matchWords("motols"); 
            if(window.console) console.log("Did you mean: " + similar);     
