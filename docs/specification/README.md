---
table_name: Contribution Heatmap
---

# Draft Specification

Welcome to the Draft Specification for the implementation of {{ $frontmatter.table_name }}. This specification exists so there is one central place where those who wish to either **use** or **implement** a {{ $frontmatter.table_name }} in their manuscripts or journals. 

::: tip
If you are not sure why you would even want to have or use a {{ $frontmatter.table_name }}, please visit the 'motivation' button in the top right
:::

There are a few aspects that the specification should balance
* Flexibility vs. Universality
* Brevity vs. Expressiveness

In addition, the {{ $frontmatter.table_name }} format should have the following:
* Easy to create (for users)
* Easy to make machine-readable
* Offer flexible styling (journals can apply their colours, fonts, etc)
* Have a shared journal-specific config format

## Contents

## Definitions 

## Machine readability

## The Raw Format

## The journal-specific config format

While having one rigid set of possible `categories` would be best for _universality_, it would be challenging to draw up such a set for the wide range of journals out there. Each journal can therefore build their own format.

While each journal can draw up their own format, they will be strongly encouraged to pick from a curated list of  `categories` in the [journal config](/for-journals/#journal-specific-config-format) section. This will avoid duplicate categories such as _programming_, _coding_ or, _machine learning_, _ai_, _artificial intelligence_.

For more details on the **journal-specific config format**, see the [For Journals](/for-journals/#curated-categories) section.

## The universal editor

In order to make it as easy as possible for authors to include a {{ $frontmatter.table_name }} in their draft manuscript, a web-tool has been built that allows users to quickly make their own {{ $frontmatter.table_name }}. 

The editor can be tried [here](https://nemoandrea.github.io/better-contributions/editor) or by clicking the **build a table** at the top right.

The editor allows for easy exporting into common formats, and requires no installation.


