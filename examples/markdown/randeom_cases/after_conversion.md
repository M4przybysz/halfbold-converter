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

**Pl**ain **te**xt **wi**th <b style="color: rgb(0, 0, 255);">bold</b>**,** <b style="color: rgb(0, 0, 255);">bold underscore</b>**,** *italic***,** _italic underscore_**,** ***bold italic*****,** ___bold italic underscore___**,** ~~strikethrough~~**,** **a**nd `inline code`**.**

**Nes**ted: *italic with <b style="color: rgb(0, 0, 255);">bold</b> inside***,** <b style="color: rgb(0, 0, 255);">bold with *italic* inside</b>**.**

**Esca**ped: \***n**ot **ita**lic\***,** \*\***n**ot **bo**ld\*\***,** \_**n**ot **ita**lic\_**,** \`**n**ot **co**de\`**,** \# **n**ot **hea**der.

**Em**pty **mark**ers: **** **a**nd **`**` **a**nd **~~**~~**.**

## Line breaks

**T**wo **trai**ling **spa**ces **br**eak  
**ne**xt **li**ne **af**ter **bre**ak.

**Back**slash **bre**ak\
**ne**xt **li**ne **af**ter **backs**lash.

## Blockquotes

> Blockquote line one
> Blockquote line two with **bold**
>No space after marker
   > Indented blockquote
> > Nested blockquote
> > > Third level

## Lists

- **Da**sh **it**em
* **St**ar **it**em
+ **Pl**us **it**em
**-Not**AList **(**no **spa**ce)
1. **Ord**ered **o**ne
2. **Ord**ered **t**wo
10. **Ord**ered **t**en
1) **Pa**ren **st**yle **ord**ered
- [ ] **Unch**ecked **ta**sk
- [x] **Che**cked **ta**sk
- [X] **Che**cked **ta**sk **uppe**rcase
  - **Nes**ted **it**em
    - **Dee**per **nes**ted **it**em **wi**th <b style="color: rgb(0, 0, 255);">bold</b>
1. **Ord**ered **wi**th
   **contin**uation **li**ne

## Code

```
Fenced no language
# not a header
**not bold**
```

```javascript
const x = "**fake bold**";
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
- **-** **-**
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
**Ba**re **UR**L: https://example.com **a**nd www.example.com

**[re**f1]: https://example.com **"Refe**rence"
**[Coll**apsed **re**f]: https://example.com
**[Sho**rtcut **re**f]: https://example.com
**[im**g1]: https://example.com/img.png

## Tables

| Left | Center | Right |
|:-----|:------:|------:|
| a | b | c |
| **bold** | `code` | [link](https://example.com) |
| | empty left | |

**N**o **lea**ding **pi**pe **tab**le:

A | B
--|--
1 | 2

## Footnotes

**Te**xt **wi**th **foot**note[^1] **a**nd **ano**ther[^note]**.**

[^1]: Footnote one.
[^note]: Footnote two with **bold**.

## Definition list

**Te**rm
: Definition one
: Definition two

## HTML inline tags

<b style="color: rgb(0, 0, 255);">bold</b> <strong><b>str</b>ong</strong> <i><b>ita</b>lic</i> <em><b>e</b>m</em> <u><b>unde</b>rline</u> <s><b>str</b>ike</s> <del><b>d</b>el</del> <ins><b>i</b>ns</ins> <mark><b>ma</b>rk</mark> <small><b>sm</b>all</small> <sub><b>s</b>ub</sub> <sup><b>s</b>up</sup> <code>code tag</code> <kbd><b>k</b>bd</kbd> <samp><b>sa</b>mp</samp> <var><b>v</b>ar</var> <abbr title="abbr"><b>ab</b>br</abbr> **ci**te <q><b>qu</b>ote</q> <dfn><b>d</b>fn</dfn> <time datetime="2026-09-28"><b>ti</b>me</time> <span style="color: red;"><b>sp</b>an</span> <a href="https://example.com"><b>anc</b>hor</a> <br> <br/> <wbr>

**Bo**ld **wi**th **attri**butes: <b class="x" data-a="a&gt;b" style="color: rgb(0, 0, 255); font-family: Arial;">tricky bold</b>

**Nes**ted **bo**ld: <b style="color: rgb(0, 0, 255);">outer <b style="color: rgb(0, 0, 255);">inner</b> outer</b>

**Uppe**rcase **ta**gs: <b style="color: rgb(0, 0, 255);">BOLD</B> <CODE>CODE</CODE>

**Se**lf **clos**ing: <img src="a.png" alt="x > y" /> <hr /> <input type="text" value="a<b">

**Comm**ent: <!-- comment with <b>tag</b> inside -->

## HTML block tags

<div class="box">
<b>D</b>iv <b>con</b>tent <b>pl</b>ain <b>te</b>xt
</div>

<p><b>Para</b>graph <b>t</b>ag <b>te</b>xt</p>

<h1>HTML H1</h1>
<h2 class="x">HTML H2</h2>
<h6>HTML H6</h6>

<blockquote><b>HT</b>ML <b>block</b>quote <b>te</b>xt</blockquote>

<ul>
   <li><b>HT</b>ML <b>li</b>st <b>it</b>em <b>o</b>ne</li>
   <li><b>HT</b>ML <b>li</b>st <b>it</b>em <b>t</b>wo</li>
</ul>

<ol>
   <li><b>Ord</b>ered <b>HT</b>ML <b>it</b>em</li>
</ol>

<table>
   <thead><tr><th><b>He</b>ad</th></tr></thead>
   <tbody><tr><td><b>Ce</b>ll <b>te</b>xt</td></tr></tbody>
</table>

<pre>
   Preformatted   text
    keeps   spacing
</pre>

<details>
   <summary><b>Sum</b>mary <b>te</b>xt</summary>
   <b>Det</b>ails <b>con</b>tent <b>te</b>xt
</details>

<section>
   <article>
      <header>
         <footer>
            <nav>
               <aside>
                  <main>
                     Semantic tags text
                  </main>
               </aside>
            </nav>
         </footer>
      </header>
   </article>
</section>

<figure>
   <figcaption>
      Figure caption text
   </figcaption>
</figure>

<dl>
   <dt><b>Te</b>rm</dt>
   <dd><b>Defin</b>ition</dd>
</dl>

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

**Per**iod. **Com**ma, **semic**olon; **col**on: **exclam**ation! **ques**tion? **Apostr**ophe's **"do**uble **quo**tes" **'si**ngle **quot**es'.

**Brac**kets: **(ro**und) [square] **{cur**ly}.

**Das**hes: **hyphen**-ated, **en–d**ash, **em—d**ash, **mi**nus **-** **alo**ne.

**Ellip**sis... **a**nd **repea**ted!!! **?**?? **?!**?! **,**,, **;**;; **:**::

**Quo**tes **a**t **edg**es: **"st**art **o**f **li**ne **a**nd **e**nd **o**f **lin**e".

## Special characters

**Ema**il: **test@exa**mple.com, **pri**ce: **$19**.99, **disc**ount: **50**%, **ma**th: **a+b**=c, **pa**th: **/usr**/bin, **wind**ows: **C**:\U**se**rs\n**am**e, **pi**pe: **a|**b, **til**de: **~****ho**me, **ha**sh: **#t**ag, **car**et: **x^**2.

**Enti**ties: &amp; &lt; &gt; &copy; &nbsp; &#169; &#x1F600; &quot;

**Unic**ode: **ca**fé, **naï**ve, **Zaż**ółć **gę**ślą **ja**źń, **日本語の**テキスト, **При**вет **ми**р, **em**oji **�**� **�**�, **sym**bols **©** **®** **™** **€** **£** **¥** **§** **¶** **†** **‡** **•** **°** **±** **×** **÷**.

**Em**oji **short**code: **:sm**ile: **:ta**da:

## Whitespace edge cases

**Mult**iple    **spa**ces    **bet**ween    **wor**ds.
**T**ab	**bet**ween	**wor**ds.
**Trai**ling **spa**ces **a**t **e**nd   
   **Lea**ding **spa**ces **(**3) **a**t **st**art
**Whitesp**ace-only **li**ne **bel**ow:
   

**T**wo **bl**ank **li**nes **bel**ow:


**E**nd **o**f **sect**ion.

## Mixed edge cases

**Li**ne **wi**th <b style="color: rgb(0, 0, 255);">html bold</b>**,** <b style="color: rgb(0, 0, 255);">markdown bold</b>**,** **pl**ain **te**xt, `inline code`**,** [a link](https://example.com)**,** <https://example.com>**,** ![img](a.png)**,** ~~strike~~**,** **a**nd <i><b>ht</b>ml <b>ita</b>lic</i> **a**ll **toge**ther!

<b style="color: rgb(0, 0, 255);">Bold at line start</b> **th**en **pl**ain **te**xt, **a**nd **pl**ain **te**xt **th**en <b style="color: rgb(0, 0, 255);">bold at line end</b>

*Italic at start* **a**nd _italic at end_

<b style="color: rgb(0, 0, 255);">Bold across
two lines</b>

<b style="color: rgb(0, 0, 255);">HTML bold across
two lines</b>

`code with <b style="color: rgb(0, 0, 255);">stars</b> and <b>tags</b> inside`

[link with `code` inside](https://example.com)

<b style="color: rgb(0, 0, 255);">**double bold**</b> **a**nd <b style="color: rgb(0, 0, 255);"><b>double bold reversed</b></b>

**La**st **li**ne **wit**hout **trai**ling **new**line