# Batificity
##Not the css specificity guide you deserve, but the one you need right now.

###WHAT IS SPECIFICITY?
Specificity determines which CSS rule is applied by the browser.

Rules with more specific selectors have a greater specificity, if two selectors apply to the same element, the one with higher specificity wins.

When selectors have an equal weight, the last rule defined is the one that counts.

Combinators ( +, >, ~ ) allow for more specific targeting, but do not increase specificity.


##GOTHAM:THE PAGE

The place containing the many things that make up Gotham City.

###WHAT IS THE PAGE?
The page is your html document where your html and selectors exist.

CSS specificity applies in the context of that page.

