---
title: Articles Structure
sidebar:
  order: 3
---

Most articles benefits from the following flow:

1. **Title:** clear and descriptive

2. **Intro Section**

   1. _Quick introduction to the article topic:_ a couple of sentences that help the reader understand whether they’re interested in the subject at all.

   2. _“After reading this article, you’ll know”:_ a list of bullet points explaining the major topics the article covers, each linking to the specific section where the topic is presented. These will often correspond to section titles, but can use different language if needed to be descriptive.

   3. _Prerequisites:_ let the reader know if they need specific knowledge before tackling this article. If we have articles covering this knowledge, make sure to link to them.

3. **Article Sections**

   1. Use descriptive section titles. It’s ok to be a bit funny, if things remain clear in context (e.g. “`The nuclear exit option`”, “`Forcing TypeScript to Shut Up`”)

   2. Use subsections generously. Think about where a confused friend could use a reference to a specific subsection\!

   3. Show practical examples whenever you can. For example, by showing a sample of commands and outputs that illustrate the topic in practice.

      1. When you choose a command make sure that its level is appropriate to the current level of the audience (e.g. they might not know what “changing a port” means).

      2. Good commands depend on the article and its positioning in the surrounding content ecosystem, but they generally tend to be basic, of broad usefulness, and easy to understand (e.g. `ls` in terminal, or `npm install`).

      3. Rule of thumbs for choosing commands or examples:

         1. Do they already know them? Is this something they’re likely to want to do often? IF NOT,

         2. Do we expect them to learn about it soon? Would it be useful for them to learn this at this stage? IF NOT

         3. Can we explain in simple words why something would be useful to them, even if they don’t have the full context or appreciation of the topic?

   4. **Use callout boxes/asides for:** _(note**:** we aren’t always using these right in our current material)_

      1. **`:::note`:** Information that is helpful to know but that isn’t solving an immediate problem. Might be minor clarifications that enhance understanding without being critical, alternative approaches, or interesting background. _Examples include_: historical reasons for design choices, alternative tools, gentle reminders of past concepts.

      2. **`:::tip`:** Best practices, clever shortcuts, _great_ advice, or links to related guides. These are positive suggestions that will help people work smarter, get over anxieties, or learn more about the topic. _Examples include_: common keyboard shortcuts, optional (but useful) features, “this is hard for experts too”, links to deeper explanations of related topics.

      3. **`:::caution`:** A common pitfall, error, or unexpected behavior that might lead to frustration (bugs, wasted time...) but not cause irrecoverable loss or security/privacy risks. _Examples include_: this command requires absolute file paths, if this setting isn’t configured you might encounter an error.

      4. **`:::danger`:** things that can go very wrong, either in unrecoverable ways, or with significant negative consequences\! _Examples include:_ making sure readers know about the dangers of `rm -rf`, or things that might accidentally cause privacy leaks (e.g. `git` user settings).

      A callout box can also include a collapsed section for further explanations that are not necessary and might be overwhelming to the casual reader. The callout box should still include a broad overview of the topic to help the reader determine whether they want to read further. The collapsed elements should have descriptive titles so readers know whether to open them\!

4. **Outro Section** (note: we don’t really have this now, but we should)

   1. _A short summary_ of what the reader can now do thanks to what they learned.

   2. _Suggestions for next steps:_ could be other articles (“`Now that you know how to open a terminal, you can learn how to run programs or navigate your filesystem`”), or an invitation to try things out (“`Now try building your own NodeJS programs`”).

   3. If relevant, a call to action to check out our paid offerings (like the Git zine).
