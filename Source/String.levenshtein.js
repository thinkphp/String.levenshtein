/*
---
description: calculate Levenshtein distance between two strings.

authors:
  - Adrian Statescu (http://thinkphp.ro)

license:
  - MIT-style license

requires:
  core/1.3:   '*'

provides:
  - String.levenshtein
...
*/

String.implement({

          levenshtein: function(str) {
                 var cost = new Array(),
                     str1 = str,
                     str2 = this,
                     n = str1.length,
                     m = this.length,
                     i, j;

                 var minimum = function(a,b,c) {
                     var min = a;
                     if(b < min) {
                        min = b;
                     }
                     if(c < min) {
                        min = c;
                     }
                  return min;
                 }

                 if(n == 0) {
                     return;  
                 } 
                 if(m == 0) {
                     return;  
                 }

                 for(var i=0;i<=n;i++) {
                     cost[i] = new Array();
                 }

                 for(i=0;i<=n;i++) {
                     cost[i][0] = i;
                 }

                 for(j=0;j<=m;j++) {
                     cost[0][j] = j;
                 }

                 for(i=1;i<=n;i++) {

                     var x = str1.charAt(i-1);

                     for(j=1;j<=m;j++) {

                         var y = str2.charAt(j-1);

                         if(x == y) {

                            cost[i][j] = cost[i-1][j-1]; 

                         } else {

                            cost[i][j] = 1 + minimum(cost[i-1][j-1], cost[i][j-1], cost[i-1][j]);
                         } 

                     }//endfor

                 }//endfor

             return cost[n][m];  
          }
});

