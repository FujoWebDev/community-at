---
title: Articles Guidelines
sidebar:
  order: 3
---

## **Article Function**

All articles should follow three key principles:

1. They answer a key question in the web development journey. 

For example: “What is NPM?” Or, “Why use JS?”

When you’re writing an article, always circle back to your main question, and ask yourself if what you’re writing is building on the answer or if it’s derailing into a separate topic. 

A lot of web development topics are tightly interconnected: try to balance the need to position the information within the larger picture, and not overwhelming our audience by obfuscating the path ahead.

2. Less is more: you should be precise, concise and factual.

For example: Instead of “*To correctly use arrays, we must give them a name. This name will then be referred to as a variable that can be referenced in the code.*” We prefer: “*To give a name to an array, we assign it to a variable.*” 

When you’re writing an article, try to keep a simple sentence structure. Actions and consequences should be clearly defined and follow logically in the text. Prioritize actions over descriptions, clearly stating the “*who*”, “*what*”, “*where*” and “*when*”, for step-by-step guides.

We expect our work to be used as reference material, which means our audience will come back to it when they need a reminder and will skim through to find the piece they’re missing. Make it easy by structuring things logically and avoid burying important information in large paragraphs.

3. Every part of the article should add value to the whole.

Not only the words you use, but the formatting you choose should be looked at from this angle. Ask yourself, “*what is the value added by…?*” when it comes to adding sections or asides.

We must balance the casual tone of our overall communication with the volume of information we’re providing, and make sure we’re not burying our readers on either too much detail or too much chatter.

In general, think of our articles as your response when a friend asks you a technical question: Yes, you want to make sure you don’t come across as pedantic or overwhelming, so you keep the friendly tone, but you should respect your friend and answer as clearly as you can.

## **Article Structure**

1. **Title:** It should be clear and descriptive. Think about the question the article is answering, and how to make it searchable and easily identifiable by the reader.

2. **Intro Section**

* *Quick introduction to the article topic:* a couple of sentences that help the reader understand whether they’re interested in the subject at all.

* *“After reading this article, you’ll know”:* a list of bullet points explaining the major topics the article covers, each linking to the specific section where the topic is presented. These will often correspond to section titles, but can use different language if needed to be descriptive.

* *Prerequisites:* let the reader know if they need specific knowledge before tackling this article. If we have articles covering this knowledge, make sure to link to them.

3. **Article Sections**

* Use descriptive section titles. It’s ok to be a bit funny, if things remain clear in context (e.g. “`The nuclear exit option`”, “`Forcing TypeScript to Shut Up`”)

* Use subsections generously. Think about where a confused friend could use a reference to a specific subsection!

* Show practical examples whenever you can. For example, by showing a sample of commands and outputs that illustrate the topic in practice.

  * When you choose a command make sure that its level is appropriate to the current level of the audience (e.g. they might not know what “changing a port” means).

  * Good commands depend on the article and its positioning in the surrounding content ecosystem, but they generally tend to be basic, of broad usefulness, and easy to understand (e.g. `ls` in terminal, or `npm install`).

  * Rule of thumbs for choosing commands or examples:

    1. Do they already know them? Is this something they’re likely to want to do often? IF NOT,

    2. Do we expect them to learn about it soon? Would it be useful for them to learn this at this stage? IF NOT

    3. Can we explain in simple words why something would be useful to them, even if they don’t have the full context or appreciation of the topic?

* **Use callout boxes/asides for:**

  * **`::note`:** Information that is helpful to know but that isn’t solving an immediate problem. Might be minor clarifications that enhance understanding without being critical, alternative approaches, or interesting background. *Examples include*: historical reasons for design choices, alternative tools, gentle reminders of past concepts. This should be short and help contextualize information, but not derail the article.

  * **`:::tip`:** Best practices, clever shortcuts, *great* advice, or links to related guides. These are positive suggestions that will help people work smarter, get over anxieties, or learn more about the topic. *Examples include*: common keyboard shortcuts, optional (but useful) features, “this is hard for experts too”, links to deeper explanations of related topics.

  * **`:::caution`:** A common pitfall, error, or unexpected behavior that might lead to frustration (bugs, wasted time…) but not cause irrecoverable loss or security/privacy risks. *Examples include*: this command requires absolute file paths, if this setting isn’t configured you might encounter an error.

  * **`:::danger`:** things that can go very wrong, either in unrecoverable ways, or with significant negative consequences\! *Examples include:* making sure readers know about the dangers of `rm -rf`, or things that might accidentally cause privacy leaks (e.g. `git` user settings). Make sure that if you call out a potential pitfall, you *also* call out the solution. Or at least *a* solution, or how to prevent it. Do not say “Don’t do X” and leave it at that. Instead try “Don’t do X, do Y instead.”

A callout box can also include a collapsed section for further explanations that are not necessary and might be overwhelming to the casual reader. The callout box should still include a broad overview of the topic to help the reader determine whether they want to read further. The collapsed elements should have descriptive titles so readers know whether to open them\!

4. **Outro Section** (note: we don’t really have this now, but we should)

* *A short summary* of what the reader can now do thanks to what they learned.

* *Suggestions for next steps:* could be other articles (“`Now that you know how to open a terminal, you can learn how to run programs or navigate your filesystem`”), or an invitation to try things out (“`Now try building your own NodeJS programs`”).

* If relevant, a call to action to check out our paid offerings (like the Git zine).
