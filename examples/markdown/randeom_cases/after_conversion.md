# H1 Header with **bold** and `code`
## H2 Header with <b>html bold</b>
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header
**###**#### **N**ot **a** **hea**der **(**7 **has**hes)
**#NoS**pace **n**ot **a** **hea**der
   ### Header with 3 leading spaces

Setext H1
=========

Setext H2
---------

## Inline formatting

**Pl**ain **te**xt **wi**th <b style="color: rgb(0, 0, 0);">bold</b>**,** <b style="color: rgb(0, 0, 0);">bold underscore</b>**,** *italic***,** _italic underscore_**,** ***bold italic*****,** ___bold italic underscore___**,** ~~strikethrough~~**,** **a**nd `inline code`**.**

**Nes**ted: *italic with <b style="color: rgb(0, 0, 0);">bold</b> inside***,** <b style="color: rgb(0, 0, 0);">bold with *italic* inside</b>**.**

**Esca**ped: **\***not italic\***,** **\***\***n**ot **bo**ld\*\***,** **\**_not italic\_**,** **\**`not code\`**,** **\**# **n**ot **hea**der.

Empty markers: **** and `` and ~~~~.

## Line breaks

Two trailing spaces break  
next line after break.

Backslash break\
next line after backslash.

## Blockquotes

> Blockquote line one
> Blockquote line two with **bold**
>No space after marker
   > Indented blockquote
> > Nested blockquote
> > > Third level

## Lists

- Dash item
* Star item
+ Plus item
-NotAList (no space)
1. Ordered one
2. Ordered two
10. Ordered ten
1) Paren style ordered
- [ ] Unchecked task
- [x] Checked task
- [X] Checked task uppercase
  - Nested item
    - Deeper nested item with **bold**
1. Ordered with
   continuation line

## Code

```
Fenced no language
# not a header
</b>not bold<b style="color: rgb(0, 0, 0);">
```

```javascript
const x = "</b>fake bold<b style="color: rgb(0, 0, 0);">";
function test(a, b) { return a && b || !a; }
```

~~~python
# tilde fence
print("hello")
~~~

    Indented code block (4 spaces)
    second line

	Tab indented code

## Horizontal rules

---
***
___
- - -
* * *

## Links and images

[Inline link](https://example.com)
[Link with title](https://example.com "Title")
[Link with **bold** text](https://example.com)
[Link with (parens)](https://example.com/a_(b))
[Reference link][ref1]
[Collapsed ref][]
[Shortcut ref]
![Image alt](https://example.com/img.png)
![Image with title](https://example.com/img.png "Title")
![Reference image][img1]
<https://example.com/autolink>
<mailto:test@example.com>
Bare URL: https://example.com and www.example.com

[ref1]: https://example.com "Reference"
[Collapsed ref]: https://example.com
[Shortcut ref]: https://example.com
[img1]: https://example.com/img.png

## Tables

| Left | Center | Right |
|:-----|:------:|------:|
| a | b | c |
| **bold** | `code` | [link](https://example.com) |
| | empty left | |

No leading pipe table:

A | B
--|--
1 | 2

## Footnotes

Text with footnote[^1] and another[^note].

[^1]: Footnote one.
[^note]: Footnote two with **bold**.

## Definition list

Term
: Definition one
: Definition two

## HTML inline tags

<b style="color: rgb(0, 0, 0);">bold</b> <strong>strong</strong> <i>italic</i> <em>em</em> <u>underline</u> <s>strike</s> <del>del</del> <ins>ins</ins> <mark>mark</mark> <small>small</small> <sub>sub</sub> <sup>sup</sup> <code>code tag</code> <kbd>kbd</kbd> <samp>samp</samp> <var>var</var> <abbr title="abbr">abbr</abbr> cite <q>quote</q> <dfn>dfn</dfn> <time datetime="2026-09-28">time</time> <span style="color: red;">span</span> <a href="https://example.com">anchor</a> <br> <br/> <wbr>

Bold with attributes: <b class="x" data-a="a&gt;b" style="color: rgb(0, 0, 0); font-family: Arial;">tricky bold</b>

Nested bold: <b style="color: rgb(0, 0, 0);">outer <b style="color: rgb(0, 0, 0);">inner</b> outer</b>

Uppercase tags: <b style="color: rgb(0, 0, 0);">BOLD</B> <CODE>CODE</CODE>

Self closing: <img src="a.png" alt="x > y" /> <hr /> <input type="text" value="a<b">

Comment: <!-- comment with <b>tag</b> inside -->

Stray angle brackets: 3 < 5 and 5 > 3 and a<b and="" c="" style="color: rgb(0, 0, 0);">d.

## HTML block tags

<div class="box">
Div content plain text
</div>

<p>Paragraph tag text</p>

<h1>HTML H1</h1>
<h2 class="x">HTML H2</h2>
<h6>HTML H6</h6>

<blockquote>HTML blockquote text</blockquote>

<ul>
<li>HTML list item one</li>
<li>HTML list item two</li>
</ul>

<ol>
<li>Ordered HTML item</li>
</ol>

<table>
<thead><tr><th>Head</th></tr></thead>
<tbody><tr><td>Cell text</td></tr></tbody>
</table>

<pre>
Preformatted   text
    keeps   spacing
</pre>

<details>
<summary>Summary text</summary>
Details content text
</details>

<section><article><header><footer><nav><aside><main>Semantic tags text</main></aside></nav></footer></header></article></section>

<figure><figcaption>Figure caption text</figcaption></figure>

<dl><dt>Term</dt><dd>Definition</dd></dl>

## HTML skipped tags

<script>
var x = "should not be bolded"; if (a < b && c > d) { alert('x'); }
</script>

<style>
.cls > p { color: red; font-weight: bold; }
</style>

<textarea>Textarea text stays</textarea>

<noscript>Noscript fallback text</noscript>

<svg width="10" height="10"><text x="0" y="10">SVG text</text></svg>

<canvas>Canvas fallback text</canvas>

<select><option>Option one</option><option>Option two</option></select>

<math><mi>x</mi><mo>=</mo><mn>1</mn></math>

<datalist id="d"><option value="One"></option></datalist>

<template><div>Template text</div></template>

<iframe src="https://example.com">Iframe fallback text</iframe>

<object data="a.swf">Object fallback text</object>

<audio controls>Audio fallback text</audio>

<video controls>Video fallback text</video>

<progress value="5" max="10">50%</progress>

<meter value="0.5">50%</meter>

<map name="m"><area shape="rect" coords="0,0,1,1" href="#"></map>

## Punctuation

Period. Comma, semicolon; colon: exclamation! question? Apostrophe's "double quotes" 'single quotes'.

Brackets: (round) [square] {curly}.

Dashes: hyphen-ated, en–dash, em—dash, minus - alone.

Ellipsis... and repeated!!! ??? ?!?! ,,, ;;; :::

Quotes at edges: "start of line and end of line".

## Special characters

@ # $ % ^ & * _ + - = < > / \ | ~ `

Email: test@example.com, price: $19.99, discount: 50%, math: a+b=c, path: /usr/bin, windows: C:\Users\name, pipe: a|b, tilde: ~home, hash: #tag, caret: x^2.

Entities: &amp; &lt; &gt; &copy; &nbsp; &#169; &#x1F600; &quot;

Unicode: café, naïve, Zażółć gęślą jaźń, 日本語のテキスト, Привет мир, emoji 😀 🎉, symbols © ® ™ € £ ¥ § ¶ † ‡ • ° ± × ÷.

Emoji shortcode: :smile: :tada:

Math-like: $x^2 + y^2 = z^2$ and $$\sum_{i=1}^{n} i$$

## Whitespace edge cases

Multiple    spaces    between    words.
Tab	between	words.
Trailing spaces at end   
   Leading spaces (3) at start
Whitespace-only line below:
   

Two blank lines below:


End of section.

## Mixed edge cases

Line with <b style="color: rgb(0, 0, 0);">html bold</b>, **markdown bold**, plain text, `inline code`, [a link](https://example.com), <https://example.com>, ![img](a.png), ~~strike~~, and <i>html italic</i> all together!

**Bold at line start** then plain text, and plain text then **bold at line end**

*Italic at start* and _italic at end_

**Bold across
two lines**

<b style="color: rgb(0, 0, 0);">HTML bold across
two lines</b>

`code with **stars** and <b style="color: rgb(0, 0, 0);">tags</b> inside`

[link with `code` inside](https://example.com)

<b style="color: rgb(0, 0, 0);">**double bold**</b> and **<b style="color: rgb(0, 0, 0);">double bold reversed</b>**

Last line without trailing newline