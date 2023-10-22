// Only change code below this line
function urlSlug(title) {
  let split = title.trim().split(/\s/g).filter(c=>c);
  let ary = []
  split.forEach(c=>ary.push(c.toLowerCase()));
  return ary.join("-");
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");