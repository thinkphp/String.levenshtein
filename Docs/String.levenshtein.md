String method: levenshtein (#String: levenshtein)
=================================================

Calculate Levenshtein distance between two strings. The Levenshtein distance is defined as the 
minimal number of characters you have to replace, insert or delete to transform string1 into string2.
The complexity of the algorithm is O(m*n), where m and n are the length of string1 and string2.


### Syntax: 

          myString.levenshtein(string);

### Arguments: 

1. string  - (* String *) one of the strings being evaluated for Levenshtein distance.

### Returns: 

* (* Integer *) return the Levenshtein-Distance between myString and argument string.


### Examples:

    "ioana".levenshtein("dania");
    //return 3
    "motols".levenshtein("mootools");
    //return 2
    "rascolnicov".levenshtein("raskolnikov");
    //return 2