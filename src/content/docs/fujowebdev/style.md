---
title: Writing Style
sidebar:
  order: 4
---

This guide is here to create a consistent style our readers can come to trust and learn from.

When writing for FujoGuide, **think of yourself as a** **knowledgeable friend**, rather than a formal instructor. You deeply want the reader to succeed, have a strong belief in their abilities, and yet relate to their present struggles—you too have been an _intimidated beginner_ once\!

## Tone and Voice

Your tone should balance credibility and approachability by being:

- \[TODO: use “you” \]

- **Practical & Instructional**

  - **Do:** Focus on the _hows_ and the necessary _whys_

  - **Do:** State prerequisites clearly, and explain how to fulfill them

  - **Do:** Highlight the value of what you’re teaching (“`a good git config will save you future pain!`”, “`Using a terminal will unlock new useful tool`”)

  - **Do:** Give accurate explanations, using consistent terminology paired with clear steps and examples

  - **Don’t:** Downplay your expertise\! You worked hard to know all you know.

  - **Don’t:** Assume previous knowledge without stating your assumptions

  - **Don’t:** Be unnecessarily pedantic—it’s ok to omit corner cases when they don’t provide value

- **Approachable & Conversational**

  - **Do:** Use contractions (like `you’ll`, `it’s`, `don’t`)

  - **Do:** Talk directly to the reader using `you/your`

  - **Do:** Use clear and direct language, with simple words and sentence structures (when possible)

  - **Do:** Use accurate terminology, explaining common jargon and acronyms.

  - **Do:** Use analogies when clear and appropriate

  - **Don’t:** Sound condescending (be _very careful_ with `obviously`, `simply`, `just`—use them to encourage, not to downvalue\!)

  - **Don’t:** Use academic or jargony terms hobbyists won’t encounter in practice (e.g. `asymptotic complexity`, `third normal form`, `merkle tree`), unless appropriate for an aside.

  - **Don’t:** Force analogies that excessively oversimply concepts without adding real value or risk coming across as “talking down”

- **Empathetic & Reassuring**

  - **Do:** Acknowledge difficulties (“`This part can be tricky…`”, “`It’s normal to struggle with…`”)

  - **Do:** Give encouragement and support (“`Take a deep breath`”, “`You got this!`”, “`It may seem hard, but you will master it`”)

  - **Do:** Demystify people’s beliefs about experts (“`Professionals are always looking stuff up…`”, “`The terminal/shell terminology is not used consistently…`”, “`Many programmers don’t know how to exit Vim`”)

- **Genuine & Empowering**:

  - **Do:** Use light humor if it fits naturally. Mildly obscure references are ok, if timeless and unobtrusive to outsiders.

  - **Do:** Think back to your personal experiences, fears and frustrations

  - **Do:** Help people dream about future possibilities their newfound knowledge will unlock

  - **Don’t:** Try too hard to be funny

  - **Don’t:** Imply there’s a unique or uniform learning path, or a single way to be an expert

## Language in Practice

This section helps us craft effective explanations that are easy to parse and absorb. These rules aren’t meant to be prescriptive, but are a starting point to craft sentences from, and a tool to review them with:

- **Language:** Stick to standard American English. Online parlance is welcome when appropriate.

- **Be clear:** Prioritize direct, unambiguous writing.

  - Use language well:

    - Prefer an active voice to be more direct, clear, and engaging—unless it makes a simple explanation convoluted\!

    - Cut unnecessary words (“`in order to => to`”)

    - Prefer strong verbs over nouns (“`perform an installation => install`”)

    - Prefer positive framing when you’re not giving an explicit warning (“`Don’t do [x] unless [y] => if [y] do [x]`”)

    - Use transition words to smooth connections between sentences and paragraphs

  - Get to the point quickly:

    - When introducing a concept, start with a straightforward definition (“`Git is a program to manage changes to your files…`”, “`Absolute file paths specify the file location starting from the root…`, “`Commands are instructions you give to your Terminal…`”)

    - When explaining how to achieve a goal, prefer stating the goal first (“`To install a new library, you can run npm add [x]`”, “`To know the directory you’re currently in, use the pwd command`”)

  - Break down complex ideas in multiple sentences and paragraphs. If a sentence is getting long, consider:

    - moving the subject or central point closer to the beginning

    - reframing it as multiple sentences

    - using bullet points to break it down into parts

- **Be concise but complete:** Make sure you cover the important parts without long-winded explanations. Respect readers’ time and attention span\!

  - The main content should prioritize information that is useful (the reader will need it to achieve their goals) and timely (is relevant to what they’re _currently_ learning)

  - If an important explanation doesn’t quite fit, consider whether it can:

    - be featured in a more appropriate place

    - grouped with other useful explanations to create a larger topic

  - Use asides to call out special cases, or to give more advanced explanations most readers can safely skip

- **Pay attention to terminology:**

  - **Be consistent:** Use the same terms throughout the article and match the rest of the site–let us know where we got this wrong ourselves\!

  - **Define key terms:** Clearly define terms and concepts when you first introduce them. Use bold to highlight the core part of the explanation to aid skimmability. Make sure the bold part reads like a sentence\!

  - **Spell out acronyms:** When you introduce an acronym, explain what it stands for. You can choose whether to use:

    - **Term (acronym):** if the full term is common or it helps initial understanding (“`A Version Control System (VCS) helps people…`”)

    - **Acronym (term):** if the acronym is frequently encountered in the wild (“`NPM (Node Package Manager) is a powerful tool that…`”)

    - **Separate Sentences:** if the expansion requires more context or you want to elaborate on its meaning (“`HTML defines the structure of your websites. Its name stands for HyperText Markup Language, highlighting its ability to…`”)

  - **Clarify confusion:** explicitly call out terms that are often mixed up (e.g. `terminal program` vs `script` vs `command`) and differences across systems (e.g. `path separators`). When the differences are not important, acknowledge that and, if needed, add further explanations in an aside.

- **\[avoid filler words\]**
