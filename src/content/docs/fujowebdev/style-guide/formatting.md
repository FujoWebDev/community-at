---
title: Content Formatting
sidebar:
  order: 5
---

Our content is designed for _skimmability_: as you write it, imagine you’re only reading bits and pieces of it as you go in search of the sections most relevant to what you’re trying to do.

### General Formatting

- **Paragraphs:** Keep them short and (ideally) focused on one idea. Be generous with them\!

- **Bold:** Use bold to highlight the main big idea in a series of paragraphs, or other crucial concepts. Try to highlight the content so it reads like a full sentence. For example: “As one of the most popular Version Control Systems, **Git helps you never lose track of changes to your code**, no matter how long it’s been since you last worked on it\!”

  - How much of the sentence to highlight is a bit of an art\! Do your best to imagine what _you_ would want to see pop out of the page as you skim through it\!

  - Make sure not to bold too often in a row, as it can get overwhelming and lose effectiveness.

- **Emphasis:** We use _emphasis/italics_ to:

  - Stress important points in sentences, e.g. pay _very close_ attention to the path you give to the `rm` command.

  - Use emphasis to highlight technical terms that aren’t code commands (e.g. In coding, it’s often useful to use _relative paths_ for files and directories). This is inconsistent, and up for debate whether we should make this a standard advice.

  - Group together longer titles without using “” (e.g. This articles are designed as companions to _FujoGuide Issue 1: Local Version Control with Git_, which you can buy…)

- **Linking:** use links generously, and make sure you’re linking descriptive text (not “`click here`” but “`find the official documentation here`”). You should link to:

  - Relevant articles from elsewhere on `learn.fujoweb.dev`, especially for prerequisites, terms definitions, or deeper knowledge

  - Authoritative external sources (e.g. `MDN`, official tool docs)

  - If we don’t have a guide, we might try to find a good substitute on the web. However, these links tend to rot.

- **Lists:** Use lists generously, as they help with skimmability. You should:

  - Use numbered lists for items in sequence (e.g. we’ll learn 1\) how to do A 2\) how to do B…)

  - Use bullet point lists for key takeaways or items not in a sequence (like this list\!)

  - Use [**Steps**](https://starlight.astro.build/components/steps/) for sequences of instructions

### Code Formatting

- **Inline Code:** We use inline code to highlight:

  - Commands (e.g. `git commit -m “your message”`)

  - File names (`index.html`), paths `~/my_site/`, keyboard shortcuts (`ctrl + k`) or tool names (`vim`, `zsh`)

- **Code blocks:** Code blocks are an essential part of our guides, as they help people see how things work _in practice_ and help break the flow of the text (and aid in skimmability). You should:

  - Make sure to explain what the code does and why it’s there

  - Provide both input and output (unless confusing). You can omit part of the output if it helps the user focus on what you want to see. Similarly, you can make some output lighter to de-emphasize it.

  - Use the code block captions to call out any particular element of the example you want the user to notice

### Other Formatting

- **Images:** Use images to show non-code results, UIs, or examples of programs in action. You can annotate if needed, but be mindful that it makes them harder to edit later.

  - If you cannot provide ALT text yourself, let us know: we’ll get someone to write it for you.

  - Use captions to help the reader understand what they’re looking at and what matters about it.

- **Diagrams:** [We use Excalidraw for diagrams](https://excalidraw.com/). Make sure you download the `.excalidraw` file and not just the PNG.

- **Tabs:** When a command differs across programs or Operating Systems, you can use [Tabs](https://starlight.astro.build/components/tabs/) to provide alternative versions of commands or explanations.

- **More components:** we can easily use [all components from Starlight](https://starlight.astro.build/components/steps/). If you think a specific functionality not covered by these would help, you can ask Ms Boba whether it can be provided.
