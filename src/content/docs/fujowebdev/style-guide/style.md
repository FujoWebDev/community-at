---
title: Writing Style
sidebar:
  order: 4
---

This guide is here to create a consistent style our readers can come to trust and learn from. At all times, we must balance technical knowledge with the casual, friendly banter of hobby spaces.

When writing for FujoGuide, **think of yourself as a knowledgeable friend**, rather than a formal instructor. You are deeply invested in the reader’s success, have a strong belief in their abilities, and yet relate to their present struggles—you too have been an *intimidated beginner* once\!

## Tone and Voice

Your tone should balance credibility and approachability by being:

<ul class="jump-list">
  <li><a href="#practical--instructional">Practical & Instructional</a></li>
  <li><a href="#approachable--conversational">Approachable & Conversational</a></li>
  <li><a href="#empathetic--reassuring">Empathetic & Reassuring</a></li>
  <li><a href="#genuine--empowering">Genuine & Empowering</a></li>
</ul>

### Practical & Instructional

* Set clear expectations for the reader and stick to what you’ve outlined.  
* Keep steps simple: one action per step.  
* Action and consequences should be clearly labeled and follow logically.  
* Write with the expectation that your reader is following along with your instructions, so don’t lead them to a metaphorical cliff without warning clearly that the risk is there

:::do
* Focus on the *hows* and the necessary *whys.*
* State prerequisites clearly and explain how to fulfill them.
* Highlight the value of what you’re sharing (“a good git config will save you future pain!”, “Using a terminal will unlock new useful tools!”).
* Give accurate explanations.
* Use consistent terminology.
* Provide clear steps and examples.
* Call out potential traps and warn appropriately before giving the instruction.
* Keep warnings and other callouts relevant: it’s okay to give a heads up for the next step, but a warning for seven steps ahead might get lost and not be as effective.
:::

:::dont
* Downplay your expertise.
* Assume previous knowledge without stating your assumptions clearly.
* Be unnecessarily pedantic: it’s okay to omit corner cases when they don’t provide value.
* Give open-ended instructions that could lead them to a trap.
* Skip steps: assume your reader is doing what you’re telling them for the first time ever.
:::

### Approachable & Conversational

* Your reader should feel spoken to, not lectured at.  
* The occasional meme or inside joke to break the tension is welcome, as long as it doesn’t derail the flow of information.  
* Keep the wording simple and accessible.  
* Don't be afraid of teaching people technical jargon when appropriate, but make sure to define it clearly in approachable terms.

:::do
* Talk directly to the reader using you/your.
* Use contractions like you’ll, it’s, don’t.
* Use clear, direct language with simple words and sentence structures.
* Use accurate terminology, and introduce acronyms the first time you use them.
:::

:::dont
* Sound condescending — be *very* careful with obviously, simply, just. Use them to encourage, not to devalue.
* Use academic or jargon terms that hobbyists won’t encounter in practice, unless appropriate for an aside.
* Force analogies that oversimplify concepts without adding real value.
* Come across as “talking down” to the audience.
:::

### Empathetic & Reassuring

* Remember, friends helping friends is the goal.  
* Our audience comes to us for help, trusting that we won’t judge them for struggling, and we’ll do our best to answer in a way they can understand.  
* Our goal is to empower our audience to use this knowledge in their own projects.

:::do
* Acknowledge difficulties (“this part can be tricky”, “it’s normal to struggle with this”).
* Give encouragement and support (“take a deep breath”, “you got this!”).
* Demystify beliefs about experts (“professionals are always looking up stuff”, “many programmers don’t know how to exit Vim”).
* Encourage mastery by showing what readers will be able to do with their new skills.
:::

:::dont
* Omit potential roadblocks or downplay their impact.
* Point out problems without offering solutions or at least pointing to external sources to resolve it.
* Catastrophize: be clear and precise about the possible challenges or mistakes that readers can make, and offer specific actions to prevent them.
:::

### Genuine & Empowering

* There’s no single right way of doing things: what we offer is a specific option.  
* Our ulterior motive is to unlock coding as a path for self-expression, not to dictate what that self-expression should look like.  
* Avoid hierarchical speech: we’re all peers helping each other.  
* We do this because we *genuinely* love technology and the possibilities it unlocks, and want our friends to love it and use it too.

:::do
* Use light humor if it fits naturally.
* Use references that are timeless and don’t alienate outsiders.
* Help people dream about future possibilities their new knowledge will unlock.
* Draw on your own past experiences, fears, and frustrations to bring human warmth to the content.
:::

:::dont
* Try too hard to be funny.
* Imply there’s a unique or uniform learning path.
* Imply there’s a single way to be an expert.
* Make the reader feel left out because they don’t get a reference.
:::

## Language Conventions

The following conventions help us craft effective explanations that are easy to parse and absorb. These rules aren’t meant to be prescriptive, but are a starting point to craft sentences from, and a tool to review them with:

### Language Standard

* Stick to standard American English.
* Online parlance is welcome when appropriate.
* Be mindful of slang that can be misconstrued as aggressive, negative or hurtful.
* Use inclusive, neutral language.
* Avoid making readers feel ostracized because they don’t understand the references or jokes.
* Hate speech has no place in our work.
* Do not make people or categories of people the butt of the joke.

### Language Clarity

* Prioritize direct, unambiguous writing.
* Use language well:
  * Prefer an active voice to be more direct, clear, and engaging—unless it makes a simple explanation convoluted!
  * Cut unnecessary words (“`in order to => to`”)
  * Prefer strong verbs over nouns (“`perform an installation => install`”)
  * Prefer positive framing when you’re not giving an explicit warning (“`Don’t do [x] unless [y] => if [y] do [x]`”)
  * Use transition words to smooth connections between sentences and paragraphs.
* Get to the point quickly:
  * When introducing a concept, start with a straightforward definition (“`Git is a program to manage changes to your files…`”, “`Absolute file paths specify the file location starting from the root…`, “`Commands are instructions you give to your Terminal…`”)
  * When explaining how to achieve a goal, prefer stating the goal first (“`To install a new library, you can run npm add [x]`”, “`To know the directory you’re currently in, use the pwd command`”)
* Break down complex ideas in multiple sentences and paragraphs. If a sentence is getting long, consider:
  * moving the subject or central point closer to the beginning
  * reframing it as multiple sentences
  * using bullet points to break it down into parts

### Economy of Language

* Make sure you cover the important parts without long-winded explanations. Respect readers’ time and attention span!
* The main content should prioritize information that is useful (the reader will need it to achieve their goals) and timely (is relevant to what they’re *currently* learning)
* If an important explanation doesn’t quite fit, consider whether it can:
  * be featured in a more appropriate place
  * grouped with other useful explanations to create a larger topic
* Use asides to call out special cases, or to give more advanced explanations most readers can safely skip

### Purposeful Language

* **Be consistent:** Use the same terms throughout the article and match the rest of the site–let us know where we got this wrong ourselves!
* **Define key terms:** Clearly define terms and concepts when you first introduce them. Use bold to highlight the core part of the explanation to aid skimmability. Make sure the bold part reads like a sentence!
* **Spell out acronyms:** When you introduce an acronym, explain what it stands for. You can choose whether to use:
  * **Term (acronym):** if the full term is common or it helps initial understanding (“`A Version Control System (VCS) helps people…`”)
  * **Acronym (term):** if the acronym is frequently encountered in the wild (“`NPM (Node Package Manager) is a powerful tool that…`”)
  * **Separate Sentences:** if the expansion requires more context or you want to elaborate on its meaning (“`HTML defines the structure of your websites. Its name stands for HyperText Markup Language, highlighting its ability to…`”)
* **Clarify confusion:** explicitly call out terms that are often mixed up (e.g. `terminal program` vs `script` vs `command`) and differences across systems (e.g. `path separators`). When the differences are not important, acknowledge that and, if needed, add further explanations in an aside.
* **Avoid filler words:** Remove words that do not add value or clarity to the sentence. If you can say it in five words, don’t say it in ten.
