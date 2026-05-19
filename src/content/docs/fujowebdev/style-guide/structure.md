---
title: Article Guidelines
sidebar:
  order: 3
---

## Article Function

All articles should follow three key principles:

<ol type="a">
  <li><a href="#a-answer-one-key-question">Answer one key question</a></li>
  <li><a href="#b-less-is-more-be-precise-concise-and-factual">Less is more: be precise, concise, and factual</a></li>
  <li><a href="#c-every-part-of-the-article-should-add-value">Every part of the article should add value</a></li>
</ol>

### a. Answer one key question

For example: “What is NPM?” Or, “Why use JS?”

When you’re writing an article, always circle back to your main question, and ask yourself if what you’re writing is building on the answer or if it’s derailing into a separate topic.

A lot of web development topics are tightly interconnected: try to balance the need to position the information within the larger picture, and not overwhelming our audience by obfuscating the path ahead.

### b. Less is more: be precise, concise, and factual

For example: Instead of “_To correctly use arrays, we must give them a name. This name will then be referred to as a variable that can be referenced in the code._” We prefer: “_To give a name to an array, we assign it to a variable._”

When you’re writing an article, try to keep a simple sentence structure. Actions and consequences should be clearly defined and follow logically in the text. Prioritize actions over descriptions, clearly stating the “_who_”, “_what_”, “_where_” and “_when_”, for step-by-step guides.

We expect our work to be used as reference material, which means our audience will come back to it when they need a reminder and will skim through to find the piece they’re missing. Make it easy by structuring things logically and avoid burying important information in large paragraphs.

### c. Every part of the article should add value

Not only the words you use, but the formatting you choose should be looked at from this angle. Ask yourself, “_what is the value added by…?_” when it comes to adding sections or asides.

We must balance the casual tone of our overall communication with the volume of information we’re providing, and make sure we’re not burying our readers on either too much detail or too much chatter.

In general, think of our articles as your response when a friend asks you a technical question: Yes, you want to make sure you don’t come across as pedantic or overwhelming, so you keep the friendly tone, but you should respect your friend and answer as clearly as you can.

## Article Structure

Every article is built from four parts:

1. [Title](#1-title)
2. [Intro Section](#2-intro-section)
3. [Article Sections](#3-article-sections)
4. [Outro Section](#4-outro-section)

### 1. Title

It should be clear and descriptive. Think about the question the article is answering, and how to make it searchable and easily identifiable by the reader.

### 2. Intro Section

- _Quick introduction to the article topic:_ a couple of sentences that help the reader understand whether they’re interested in the subject at all.

- _“After reading this article, you’ll know”:_ a list of bullet points explaining the major topics the article covers, each linking to the specific section where the topic is presented. These will often correspond to section titles, but can use different language if needed to be descriptive.

- _Prerequisites:_ let the reader know if they need specific knowledge before tackling this article. If we have articles covering this knowledge, make sure to link to them.

### 3. Article Sections

- Use descriptive section titles. It’s ok to be a bit funny, if things remain clear in context (e.g. “`The nuclear exit option`”, “`Forcing TypeScript to Shut Up`”)

- Use subsections generously. Think about where a confused friend could use a reference to a specific subsection!

- Show practical examples whenever you can. For example, by showing a sample of commands and outputs that illustrate the topic in practice. See [Choosing commands and examples](#choosing-commands-and-examples) for how to pick them.

- Use callout boxes/asides to flag information that doesn’t belong in the main flow. See [Callout boxes](#callout-boxes) for the full reference.

### 4. Outro Section

(Note: we don’t really have this now, but we should.)

- _A short summary_ of what the reader can now do thanks to what they learned.

- _Suggestions for next steps:_ could be other articles (“`Now that you know how to open a terminal, you can learn how to run programs or navigate your filesystem`”), or an invitation to try things out (“`Now try building your own NodeJS programs`”).

- If relevant, a call to action to check out our paid offerings (like the Git zine).

## Extras

### Choosing commands and examples

When you choose a command, make sure that its level is appropriate to the current level of the audience (e.g. they might not know what “changing a port” means).

Good commands depend on the article and its positioning in the surrounding content ecosystem, but they generally tend to be basic, of broad usefulness, and easy to understand (e.g. `ls` in terminal, or `npm install`).

Rule of thumb for choosing commands or examples:

1. Do they already know it? Is this something they’re likely to want to do often? IF NOT,

2. Do we expect them to learn about it soon? Would it be useful for them to learn this at this stage? IF NOT,

3. Can we explain in simple words why something would be useful to them, even if they don’t have the full context or appreciation of the topic?

### Callout boxes

Use callout boxes/asides for information that supports the main flow without belonging in it. Each type has a specific purpose.

A callout box can also include a collapsed section for further explanations that are not necessary and might be overwhelming to the casual reader. The callout box should still include a broad overview of the topic to help the reader determine whether they want to read further. The collapsed elements should have descriptive titles so readers know whether to open them!

#### `:::note`

Information that is helpful to know but that isn’t solving an immediate problem. Might be minor clarifications that enhance understanding without being critical, alternative approaches, or interesting background.

_Examples include_: historical reasons for design choices, alternative tools, gentle reminders of past concepts. This should be short and help contextualize information, but not derail the article.

:::note[Does NPM really stand for Node Package Manager?]

Actually, no: [it was known as NPM before Node Package Manager](https://en.wikipedia.org/wiki/Npm), so it’s a backronym.

But it’s a good mnemonic, so we’ll continue spreading lies on purpose.

:::

#### `:::tip`

Best practices, clever shortcuts, _great_ advice, or links to related guides. These are positive suggestions that will help people work smarter, get over anxieties, or learn more about the topic.

_Examples include_: common keyboard shortcuts, optional (but useful) features, “this is hard for experts too”, links to deeper explanations of related topics.

:::tip[Help! I can’t memorize the commands!]

Command-line programs often have documentation (books or websites) you can use as a reference for their commands. Most even have an internal help menu which provides a built-in way to jog your memory as needed.

**Remember: no one remembers every command for every command-line program they use!**

:::

#### `:::caution`

A common pitfall, error, or unexpected behavior that might lead to frustration (bugs, wasted time…) but not cause irrecoverable loss or security/privacy risks.

_Examples include_: this command requires absolute file paths, if this setting isn’t configured you might encounter an error.

:::caution[Error: Cannot find module!]

Seeing a scary `Error: Cannot find module […]test.js`? You may be in the wrong folder!

You can use `ls` to see the files in the current directory: if `test.js` is not there, you may have taken a wrong turn! Use `pwd` to check which directory you’re in, and `cd [path]` to change directory.

:::

#### `:::danger`

Things that can go very wrong, either in unrecoverable ways, or with significant negative consequences! Make sure that if you call out a potential pitfall, you _also_ call out the solution. Or at least _a_ solution, or how to prevent it. Do not say “Don’t do X” and leave it at that. Instead try “Don’t do X, do Y instead.”

_Examples include:_ making sure readers know about the dangers of `rm -rf`, or things that might accidentally cause privacy leaks (e.g. `git` user settings).

:::danger[A dangerous exception: `rm -rf`]

There is one command you should never run without checking the path carefully: the infamous (but very useful) `rm -rf [directory_path]`. This command erases ALL files inside `[directory_path]` without stopping to ask you for permission. It even skips the trash bin!

If you’re worried about accidentally deleting the wrong folder, you can use the normal file explorer instead of your terminal for the more dangerous file operations.

:::
