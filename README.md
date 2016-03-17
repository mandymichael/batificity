#Batificity
##Not the css specificity guide you deserve, but the one you need right now.

###WHAT IS SPECIFICITY?
Specificity determines which CSS rule is applied by the browser.

Rules with more specific selectors have a greater specificity, if two selectors apply to the same element, the one with higher specificity wins.

When selectors have an equal weight, the last rule defined is the one that counts.

Combinators ( +, >, ~ ) allow for more specific targeting, but do not increase specificity.


##GOTHAM:THE PAGE

The place containing the many things that make up Gotham City.

###What is the page?
The page is your html document where your html and selectors exist.

CSS specificity applies in the context of that page.

##BATMAN:ID SELECTOR

There can only be one Batman (id) in Gotham City (the page).

ID's have a higher specificity than classes, pseudo-elements/classes and attributes.

**STRENGTH 1:0:0**

###More about ID's
An ID is an identifier for your page elements, such as `#div`. ID selectors have a higher specificity than other selectors.

For example, the selector #batman is more specific than the attribute selector `[id=batman]` or the class selector `.robin`

##.ROBIN:CLASS SELECTOR

There are many robins, they come and go and sometimes exist at the same time.

It doesn’t matter how many robins you have, you cannot beat Batman.

**STRENGTH 0:1:0**

###More about classes
You can have more than one of the same class per page. Classes have the same specificity as pseudo elements and attribute selectors, but a lower specificity than an ID.

Classes can be chained to increase specificity (but this will not override an ID).
`.robin` gives you a strength of 0:1:0
`.robin.red-hood` would give you a strength of 0:2:0

##THE BATMOBILE:ATTRIBUTE SELECTOR

Attributes e.g. `[target]` are Batman’s major gadgets like the Batmobile. They work on their own, but also when added to a Batman or a Robin you get a strength boost.

It doesn’t matter how many gadgets Robin has he still can’t beat batman.

**STRENGTH 0:1:0**

###More about attributes
An attribute selector matches elements which have a specific attribute or its value for example: `a[title]` matches all a elements which have a title attribute.

Attribute selectors have the same weight as classes and pseudo-elements/classes.

##UTILITY BELT:PSEUDO-ELEMENT/CLASS SELECTOR

Pseudo-elements/classes are the utility belt, they aren’t very useful on their own but when you add them to something else they increase your strength.

**STRENGTH 0:1:0**

###More about pseudo-elements and pseudo-classes
Pseudo classes are special classes that are used to define the behavior of HTML elements: e.g. `a:hover` applys on hover of an element.

Pseudo-elements allow you to assign styles to content that does not exist in the page. e.g. `.batman:after` adds an additional element you can style.

##ALFRED:ELEMENT TAG SELECTOR

Elements are like Alfred. Batman and Robin can’t live without him, but he can't beat Batman or Robin in a fight.

**STRENGTH 0:0:1**

###More about element tags
An element selector is the element that is linked to a particular style. e.g. a targets the link tag directly.

These have the lowest specificity weight and are therefore the easiest to override.

The `a` selector has a weight of 0:0:1 whereas `a.robin` has a weight of 0:1:1, which is still lower than an ID.

##BRUCE WAYNE:INLINE STYLES <STYLES>

Batman must always protect his secret identity so Bruce will override any Batman that might exist.

Bruce Wayne (like inline styles) exist publicly in Gotham (the page). Batman and the rest of the css exists in the external stylesheet.

**STRENGTH POWER: 1:0:0:0**

###More about inline styles
An inline style lives directly within your page and is attached to the element to be styled. For example:
````<div style="background:red;"></div>````

Because inline styles exist directly on the element they override IDs, classes, pseudo-elements and attributes.

##THE BOMB:!IMPORTANT

`!important` is a nuclear weapon. Use this and you’ve defeated Batman, Robin, Alfred and their gadgets. With great power comes great responsibility, don’t abuse it.

**STRENGTH 1:0:0:0:0**

###What is !IMPORTANT?
`!important` takes highest precendence in css, even over inline styles.

To override a style with `!important` you have to declare another style using `!important` with the same or higher specificity. For this reason you should only be using `!important` for debugging.

If you are using `!important` regulary you should revisit your css specificity. It is incredibly rare to need it in your stylesheets.

