---
table_name: Contribution Heatmap
---
# For Journals
## Requirements

If you think your journal could benefit from having a {{ $frontmatter.table_name }}, you would have to think about the following items:

1. What will my journal's `config format` look like?
3. Will I enforce it as a mandatory part of a manuscript submission?
4. Will it be included in print or only in the PDF, or as part of the online supplementary?
5. How will your journal **style** the {{ $frontmatter.table_name }}?
5. How will I ensure the {{ $frontmatter.table_name }} is machine-readable 

> Points 3-5 are rather technical questions and hence can be considered at a later date, but they should be considered at some point

## Curated `Categories`

It would be undesirable if each journal had their own name for the same `category` concept, e.g. :
* 'programming' &  'coding'
*  'experiments' & 'labwork'
*  'manuscript', 'manuscript writing', 'writing manuscript', 'writing', 'paper writing'

As a solution, we have a listed of curated `categories` below. In the drawing up of your own journal-specific format, try to pick items from the list below, **whenever possible**. 
> In the event that you have something very specific (maybe even unique to your journal), then you are of course free to add it your [your format](/for-journals/#journal-specific-config-format). 

Keep in mind that not all the categories **have** to be part of your config. Only a subset will likely be relevant for your journal.

::: tip Do let us know!
We really like to receive feedback on items that we could add to this list! Perhaps you are the first journal in your field to adopt  a {{ $frontmatter.table_name }}, and therefore need some new `categories`. You can let us know and we will add it to the list! 
:::

**Official curated categories**
* Project Conception
* Experiments
* Simulations
* Manuscript
* Figure design
* Method development
* Scripts
* Feedback
* Resources
* Funding

## Journal-specific config format

An example can be found below:

```
# CHM V0.1
```

## Styling a {{ $frontmatter.table_name }}

The styling of a {{ $frontmatter.table_name }} is up to the journal, so that it can be made to integrate well with the design language and colour palette that the journal employs.  Font choice and colour choice are entirely up to the journal. 

In the event that you wish to change the colours of the `contribution-degrees` (i.e. the squares indicating the degree of contribution), it is recommended that a legend is added somewhere to indicate what each colour corresponds to. 


<TODO>add example images of different styled HTML versions of tables</TODO>

