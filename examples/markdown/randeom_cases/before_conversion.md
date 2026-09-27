# Header should be skipped entirely (with **bold inside** untouched)

Regular paragraph with plain text to bold, mixed with **already bold markdown** and __also bold underscore style__.

Paragraph with <b>already bold html</b> and <b style="color: red;">styled bold html</b> mixed with plain text needing bolding.

> Blockquote line should be skipped along with **bold inside quote**.

```javascript
// Fenced code block entirely skipped
const x = "plain text that looks boldable but isn't";
function test() { return **notReallyBold**; }
```

Inline code should skip: `const y = 5;` but surrounding plain text should bold normally.

- List item with plain text to bold
- List item with **already bold** part
- [ ] Task item unchecked, plain text
- [x] Task item checked, with **bold** part

| Table | Header | Row |
|-------|--------|-----|
| plain | **bold** | `code` |

---

Link should be skipped as unit: [click here](https://example.com) surrounded by plain text.

Image also skipped: ![alt text](https://example.com/img.png) with plain text around.

Autolink skipped: <https://example.com> plain text continues here.

<script>
// entire script tag content skipped
var boldable = "should not be touched";
</script>

<style>
.fake-bold { font-weight: **not-a-real-property**; }
</style>

<pre>
Preformatted text
should NOT be bolded
even with plain words here
</pre>

<h3>HTML header tag, should also be skipped like markdown headers</h3>

Setext-style header below:
Header Text Here
================

Footnote reference in text[^1] should bold normally around it.

[^1]: Footnote line itself should be skipped.

Mixed edge case: paragraph with <b>html bold</b>, then **markdown bold**, then plain text, then `inline code`, then [a link](https://example.com), all in one line.

Whitespace-only line below (should skip):
   

Final paragraph with tabs	and    multiple   spaces   between   words   to   bold   individually.