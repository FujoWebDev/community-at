---
title: Ms Boba's Extra Notes from Writing the Learn-Along
sidebar:
  order: 6
---

Notes from my [Ms Boba's] review of our learn-along, that show changes I made and how I
came to them. I had to formulate principles post-facto, as I never really
spelled them out before.

I had already seen (and written part of) the writing beforehand. Hopefully
this will help me get it right quicker myself next time—I keep forgetting
this is how we write.

:::caution[Classic Ms Boba]

I changed a lot of this again before shipping the learn along, so some of this may be
inaccurate/different in the final version. I think the general principles hold, but
take all this with a big asterisk.

:::

## Fortune Generator — Before You Start

I'll go through each change by bit, but if you want to read the before/after in full,
you can find it here.

<details>
  <summary>Old</summary>

```
/**
 * Fortunes Generator: Simple JavaScript
 *
 * To add complex interactivity to our web pages we must use the JavaScript
 * language. The code in this file is what randomly selects the fortune that is
 * displayed on the page after you click the button.
 *
 *
 * #### PRE-REQUISITES ####
 *
 * This guide is best tackled with some familiarity with basic programming
 * concepts, like variables, if statements, and loops. While we'll go over some
 * of these concepts, you might want to use your favorite search engine to look
 * up things you're not familiar with. For beginners that learn well by doing,
 * we hope that fiddling with this program will help you build a mental model of
 * how programming works in practice!
 *
 * Some concepts that you'll encounter during this tutorial and you might want
 * to read more about (either before or after it), include:
 * - Declaring variables and assigning them values (const & let)
 * - Number, string and boolean values
 * - Comparing values
 * - If/else statements
 * - For loops
 * - Declaring and calling functions
 * - Using arrays
 *
 *
 * #### OVERVIEW ###
 *
 * This file is organized into 3 parts:
 * 1) "PART 1: Declaring our fortunes" - in which we define the fortunes our
 *    generator will randomly pick from
 * 2) "PART 2: Declaring our functions" — in which we define reusable blocks of
 *    code that will help us make our generator's logic easier to understand
 * 3) "PART 3: Adding interactivity to the page" — in which we put it all
 *    together and make our program select a random fortune according to the
 *    user's choice
 *
 *
 * #### TABLE OF CONTENTS ####
 *
 * 1. PART 1: Declaring our fortunes
 *    - 01. Using arrays to store our fortunes
 * 2. PART 2: Declaring our functions
 *    - 02. Using functions to organize our code
 *    - 03. Getting a random number between two values
 *    - 04. Getting the list of fortunes for a given flavor
 * 3. PART 3: Adding interactivity to the page
 *    - 05. Selecting page elements with document.querySelector
 *    - 06. Listening for events with event listeners
 *    - 07. Modifying the page content with innerHTML
 *
 *
 * #### EXTRA CREDIT ####
 *
 * [[EXTRA EXTRA CREDIT]]: Try adding another type of fortune!
 **/

```

</details>

<details>
  <summary>New</summary>

```
/**
 * Fortunes Generator: Simple JavaScript
 *
 * While CSS gives our pages their visual flair, JavaScript is the language that
 * brings our fortune generator to life. The code in this file reacts to clicks
 * on the "Get a fortune!" button, randomly selects one from our chosen flavor,
 * and displays it on the page.
 *
 *
 * ### USING THIS GUIDE ###
 *
 * As you journey through this program, you can follow the path from start to
 * finish, or skip around to what piques your interest. For those who learn best
 * by doing, fiddling with the code as you go will help build a mental model
 * of how JavaScript works in practice. Remember: you can always download this
 * file again (or use Git!) to start from scratch.
 *
 * If the comments feel overwhelming or in the way, you can use the uncommented
 * version of this file to follow along the code.
 *
 * If you haven't explored programming yet, you can skim the guide to see what's
 * possible, and what you should learn on the way to your goals.
 *
 * ### PRE-REQUISITES ###
 *
 * This guide assumes you're acquainted with the building blocks of programming,
 * like variables, if statements, and loops. While we'll give you some
 * refreshers, make sure to use your favorite search engine to look up terms
 * you're not familiar with!
 *
 * Concepts you might want to read more about on your own (either before, during,
 * or after) include:
 *
 * - Declaring variables with const & let
 * - Strings—that is, "how programmers write text"
 * - Comparing values
 * - If/else statements for making decisions
 * - "For loops" for repeating actions
 * - Arrays for holding multiple values
 * - Functions for creating reusable blocks of code
 *
 *
 * ### OVERVIEW ###
 *
 * This file is organized into 3 parts:
 * 1) "PART 1: Declaring our fortunes" - where we define the fortunes our
 *    generator will randomly pick from
 * 2) "PART 2: Declaring our functions" — where we define reusable blocks of
 *    code that will help us make our generator's logic easier to understand
 * 3) "PART 3: Adding interactivity to the page" — where we put it all
 *    together and make our program select a random fortune based on the
 *    user's choice of flavor
 *
 *
 * #### TABLE OF CONTENTS ####
 *
 * 1. PART 1: Declaring our fortunes
 *    - 01. Using arrays to store our fortunes
 * 2. PART 2: Declaring our functions
 *    - 02. Using functions to organize our code
 *    - 03. Getting a random number between two values
 *    - 04. Getting the list of fortunes for a given flavor
 * 3. PART 3: Adding interactivity to the page
 *    - 05. Selecting page elements with document.querySelector
 *    - 06. Listening for events with event listeners
 *    - 07. Modifying the page content with innerHTML
 *
 *
 * #### EXTRA CREDIT ####
 *
 * As you make your way through, you'll find a few [[EXTRA CREDIT]] callouts
 * scattered around this guide. These optional exercises are there to help you
 * learn even more useful tricks!
 *
 * Here's one for you to come back to:
 *
 * [[EXTRA EXTRA CREDIT]]: After you've poked around this code, it's time
 * to add your own flavor of fortune cookie. If you need inspiration, you can
 * use your favorite characters, quotes, or even random words.
 *
 * Remember: when it comes to programming, a bit of practice goes a long way—the
 * challenge (and, sometimes, confusion) is part of the fun!
 **/
```

</details>

### The Preamble

Principles I extracted:

- **Active, narrative voice:** Don't describe what the code is, actively (and
  cheerfully) explain what it does.
- **Explain why, not just what:** Explain the role code in the larger picture.
  Make it relevant to what the reader cares about.

#### Old

> ```
> To add complex interactivity to our web pages we must use the JavaScript
> language. The code in this file is the one that randomly selects the
> fortune that is displayed on the page after you click the button.
> ```

Things I notice:

- What is "complex interactivity"? What makes it complex? Does it mean it's hard
  to do?
- "The code in this file is the one that randomly selects" => Makes the action
  feel delayed. The code is your friend! You're excited to see it at work!

#### New

> ```
> While CSS gives our sites their visual flair, JavaScript is the language
> that brings our fortune generator to life. The code in this file reacts to
> clicks on the "Get a fortune!" button, randomly selects one from the chosen
> flavor, and displays it on the page.
> ```

Things changed:

- "While CSS gives our sites their visual flair" => Helps qualify the CSS vs JS
  boundary
- "JavaScript is the language that brings our fortune generator to life" makes
  it feel more wondrous and magical
- "The code in this file is the one that randomly selects" => "The code in this
  file reacts to clicks", to personify the code

Extra things I considered changing:

- "The code in this file" => "The code you're about to learn", to make the
  reader feel part of the action

### Prerequisites #1

Principles I extracted:

- **Write _to_ the audience:** Address the reader directly, set clear
  expectations, and anticipate questions they may have. Talk about different
  ways they might approach the material.
- **Call to adventure:** You're telling the tale of a valiant hero that is about
  to go embark on a trecherous journey, and your language should reflect that.
  Note that this doesn't mean that itself JavaScript is treacherous: it's just what
  Boba-tan tells herself to psych herself up.
- **Group related content, don't change "subject":** Paragraphs and sections
  often serve specific purposes. Don't let unrelated notes slip in: move them
  around, or reframe them so they match their surroundings.
- **Remind them they cannot fuck up:** People will be worried about fucking up
  and irreversely damaging something. If you can, reassure them!

#### Old

> ```
> ### PRE-REQUISITES ###
>
> This guide is best tackled with some familiarity with basic
> programming concepts, like variables, if statements, and loops. While
> we'll go over some of these concepts, you might want to use your
> favorite search engine to look up things you're not familiar with. For
> beginners that learn well by doing, we hope that fiddling with this
> program will help you build a mental model of how programming works in
> practice!
>
> Some concepts that you'll encounter during this tutorial and
> you might want to read more about (either before or after it),
> include:
> ...
> ```

Things I notice:

- "This guide is best tackled with some familiarity" => overly formal, impersonal
- "While we'll go over some of these concepts, you might want to use" => why so
  tentative? be more decisive
- "For beginners that learn well by doing," => Feels like switching to a different
  topic. Why is this in pre-requisites? Also, what if someone doesn't identify
  with the word beginner? Does this not apply anymore?
- "we hope that fiddling with this program" => we do not hope! We _know_!

#### New

> ```
> #### USING THIS GUIDE ####
>
> As you journey through this program, you can follow the path from
> start to finish, or skip around to what piques your interest. For
> those who learn best by doing, fiddling with the code as you go will
> help build a mental model of how JavaScript works in practice.
> Remember: you can always download this file again (or use Git!) to
> start from scratch.
>
> If the comments feel overwhelming or in the way, you can use the
> uncommented version of this file to follow along the code.
>
> If you haven't explored programming yet, you can skim the guide to
> see what's possible, and what you should learn on the way to your
> goals.
>
> ### PRE-REQUISITES ###
>
> This guide assumes you're acquainted with the building blocks of
> programming, like variables, if statements, and loops. While we'll
> give you some refreshers, make sure to use your favorite search
> engine to look up terms you're not familiar with!
>
> Concepts you might want to read more about on your own (either
> before, during, or after) include:
> ```

Things changed:

- Straight up made a new section. It came natural as I was thinking about what
  the sentence that felt out of place was trying to do. I actually wrote
  these parts separately in various sections, and then realized they were all in
  the wrong place and belonged together.
- Added a callout for "beginners" (without using the word). "Haven't explored
  programming" is less ambiguous, and keeps the adventurer feeling. We should also
  be honest that this is going to be _a lot_, but not deter those who might want
  to try. Framing it as "check it out and see what comes up" feels a good
  compromise.

Other stuff I might change:

- I still feel iffy about "you can use", "you can skim", but I'm keeping myself
  from fiddling further.

### Prerequisites #2

I feel strongly about this one, so it gets its own place:

- **Add concise explanations to lists:** when presenting lists of concepts or
  terms, add a very brief description to each item, to help people understand
  what it is and why it's there. This provides context and helps learners feel
  less lost.

#### Old (list of prerequisites)

> ```
> - String values
> - For loops
> - Functions
> ```

What I notice:

- People might have seen "strings", but not know their name
- Functions and for loops may feel scarier than they are without an explanation

#### New (list of prerequisites)

> ```
> - Strings—that is, "how programmers write text"
> - "For loops" for repeating actions
> - Functions for creating reusable blocks of code
> ```

### Extra Credits Section

- **Frame challenges as fun, approachable, and within the person's reach:** When
  a task feels overwhelming, try thinking about what could make it easier for
  them and where they're likely to get stuck. Try getting them "out of their own
  heads".
- **Normalize struggling with code, and encourage a growth mindset:** Where you can,
  offer suggestions on how to tackle a task, and remind people it's ok to struggle
  or come back to it later.

#### Old

> ```
> #### EXTRA CREDIT ####
>
> [[EXTRA EXTRA CREDIT]]: Try adding another type of fortune!
> ```

This was simply underspecified to start with.

#### New

> ```
> As you make your way through, you'll find a few [[EXTRA CREDIT]]
> callouts scattered around this guide. These are optional exercises to
> help you learn even more useful tricks!
>
> Here's one for you to come back to:
>
> [[EXTRA EXTRA CREDIT]]: After you've poked around this code,
> it's time to add your own flavor of fortune cookie. If you need
> inspiration, you can use your favorite characters, quotes, or even
> random words.
>
> Remember: when it comes to programming, a bit of practice goes a long
> way—the challenge (and, sometimes, confusion) is part of the fun!
> ```

Important bits:

- "scattered around this guide" => Makes it fun to find them
- "to help you learn even more useful tricks!" => Explain why you'd want to
  bother with them
- "After you've poked around this code," => Trying not to imply one has
  to have understood it. People might understand from poking around, so
  we shouldn't stop them.
- "If you need inspiration, you can use your favorite" => I'm anticipating
  people overthinking what should go in the fortunes rather than just
  putting something there.
- "the challenge (and, sometimes, confusion) is part of the fun!" Keep
  normalizing confusion. People will never escape it.

### Extra Credits Section: The Return

The above is what I ended up with, but I had a previous review I worked
up from. From that I got:

- **Keep it casual:** Not _too_ casual, obviously. Try embodying "the
  fun (and slightly over-the-top) teacher people look back to fondly."
- **Create a sense of dynamism:** You're gooooing somewhere! You're doing
  things, poking around, messing shit up! You're a menace and no one can
  stop you.
- **Confident, action-oriented language:** Covered a bit before, but again:
  project confidence! You don't try, you succeed! (note: TBF, i'm not sure
  I always keep this)

#### Even Before!

This was already with Ms Boba's review, before being subjected again to her whims:

> Throughout this guide, you will find some [[EXTRA CREDIT]] sections. These
> optional exercises are interesting challenges that will help you learn
> even more fun (and useful) tools!
>
> Here's one for you to come back to:
>
> [[EXTRA EXTRA CREDIT]]: After you got a sense of how this program works, try
> adding a new flavor of fortune cookie. You can use your favorite fandom,
> quotes, or even just some random words. Remember: when it comes to
> programming, a bit of practice goes a long way—the challenge (and, sometimes,
> confusion) is part of the fun!

What I notice:

- "Throughout this guide, you will find some [[EXTRA CREDIT]] sections." => kinda
  boring?
- "These optional exercises are interesting challenges..." => Convoluted sentence
  that feels like it could be streamlined.
- "After you got a sense of how this program works," this sounded weird, but
  again I was trying hard to not imply people had understood it all.
- "You can use your favorite fandom," => I ended up with "if you're feeling stuck",
  which qualified why i was saying this
- "Remember: when it comes to..." => Moved it to its own line. This goes back to
  making sure a paragraph sticks to its purpose. In this case, the encouragement
  works well on its own, and doesn't add unnecessary cruft for someone reading the
  challenge.
