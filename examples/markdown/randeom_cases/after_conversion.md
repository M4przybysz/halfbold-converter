# Header should be skipped entirely (with **bold inside** untouched)

**Reg**ular **para**graph **wi**th **pl**ain **te**xt **t**o **bo**ld, **mi**xed **wi**th <b style="color: rgb(0, 0, 0);">already bold markdown</b> **a**nd <b style="color: rgb(0, 0, 0);">also bold underscore style</b>**.**

**Para**graph **wi**th <b style="color: rgb(0, 0, 0);">already bold html</b> **a**nd <b style="color: rgb(0, 0, 0);">styled bold html</b> **mi**xed **wi**th **pl**ain **te**xt **nee**ding **bold**ing.

> Blockquote line should be skipped along with **bold inside quote**.

```javascript
// Fenced code block entirely skipped
const x = "plain text that looks boldable but isn't";
function test() { return <b style="color: rgb(0, 0, 0);">notReallyBold</b>; }
```

**Inl**ine **co**de **sho**uld **sk**ip: `const y = 5;` **b**ut **surro**unding **pl**ain **te**xt **sho**uld **bo**ld **norm**ally.

- **Li**st **it**em **wi**th **pl**ain **te**xt **t**o **bo**ld
- **Li**st **it**em **wi**th <b style="color: rgb(0, 0, 0);">already bold</b> **pa**rt
- [ ] **Ta**sk **it**em **unche**cked, **pl**ain **te**xt
- [x] **Ta**sk **it**em **chec**ked, **wi**th <b style="color: rgb(0, 0, 0);">bold</b> **pa**rt

| Table | Header | Row |
|-------|--------|-----|
| plain | **bold** | `code` |

---

**Li**nk **sho**uld **b**e **ski**pped **a**s **un**it: [click here](https://example.com) **surro**unded **b**y **pl**ain **te**xt.

**Im**age **al**so **skip**ped: ![alt text](https://example.com/img.png) **wi**th **pl**ain **te**xt **aro**und.

**Auto**link **skip**ped: <https://example.com> **pl**ain **te**xt **cont**inues **he**re.

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

**Setext**-style **hea**der **bel**ow:
**Hea**der **Te**xt **He**re
================

**Foot**note **refe**rence **i**n **text**[^1] **sho**uld **bo**ld **norm**ally **aro**und **i**t.

[^1]: Footnote line itself should be skipped.

**Mi**xed **ed**ge **ca**se: **para**graph **wi**th <b style="color: rgb(0, 0, 0);">html bold</b>**,** **th**en <b style="color: rgb(0, 0, 0);">markdown bold</b>**,** **th**en **pl**ain **te**xt, **th**en `inline code`**,** **th**en [a link](https://example.com)**,** **a**ll **i**n **o**ne **li**ne.

**Whitesp**ace-only **li**ne **be**low **(sh**ould **ski**p):
   

**Fi**nal **para**graph **wi**th **ta**bs	**a**nd    **mult**iple   **spa**ces   **bet**ween   **wo**rds   **t**o   **bo**ld   **indivi**dually.