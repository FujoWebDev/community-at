---
title: Ao3.js
description: A guide in my new Starlight docs site.
---

<div align="center">

![AO3.js logo](./logo-transparent-small.png)

Scrapes data from [ao3.org](https://ao3.org) and beyond. Now with Types™.

</div>

## Why is this here?

Cause this is a test.

## What is `@fujocoded/ao3.js`?

**AO3.js is a Node.js library for fetching Archive of Our Own data** from your own JavaScript (or TypeScript!) server or command line tool. It provides an easy-to-use interface for retrieving information like tags, works, series, and more, from any AO3-compatible archive.

## What can `@fujocoded/ao3.js` do?

| Method                                                | Description                                | Parameters                                                                        | Return Type                                                                                                              |
| ----------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [**`getTag`**](./src/tags/index.ts#L17)               | Retrieves details for a specific AO3 tag.  | `{ tagName: string }` - Name of the tag.                                          | [`Promise<Tag>`](./types/entities.ts)                                                                                    |
| [**`getTagNameById`**](./src/tags/index.ts#L24)       | Gets tag name based on its ID.             | `{ tagId: string }` - Tag ID to look up.                                          | `Promise<string>`                                                                                                        |
| [**`getWork`**](./src/works/index.ts#L20)             | Fetches metadata for an AO3 work.          | `{ workId: string, chapterId?: string }` - The work ID, with optional chapter ID. | [`Promise<WorkSummary>`](./types/entities.ts#L20) \| [`Promise<LockedWorkSummary>`](./types/entities.ts#L45)             |
| [**`getWorkWithChapters`**](./src/works/index.ts#L53) | Fetches a work and its chapter list.       | `{ workId: string }` - The ID of the work.                                        | [`Promise<{ title: string; authors: Author[] \| Anonymous; workId: string; chapters: Chapter[] }>`](./types/entities.ts) |
| [**`getSeries`**](./src/series/index.ts#L17)          | Retrieves details for a specific series.   | `{ seriesId: string }` - The ID of the series.                                    | [`Promise<Series>`](./types/entities.ts)                                                                                 |
| [**`getUser`**](./src/users/index.ts#L15)             | Fetches profile information for a user.    | `{ username: string }` - Username of the user to fetch.                           | [`Promise<User>`](./types/entities.ts)                                                                                   |
| [**`setFetcher`**](./src/fetcher.ts#L5)               | Sets a custom fetch function for requests. | `{ fetcher: typeof fetch }` - Custom fetch function.                              | `void`                                                                                                                   |
