function forum(input) {
    let [banned, text] = [input.pop().split(' '), input.join('$$$')];
    let pattern = /<code>.*?<\/code>|#([a-zA-Z][a-zA-Z0-9_-]+[a-zA-Z0-9]+)\b/g;
    let match;

    while (match = pattern.exec(text)) {
        if (!/<code>/g.test(match)) {
            if (banned.filter(a => a == match[1]).length > 0) {
                text = text.replace(match[0], '*'.repeat(match[1].length));
            } else {
                text = text.replace(match[0], `<a href="/users/profile/show/${match[1]}">${match[1]}</a>`);
            }
        }
    }

    console.log(text.replace(/\$\$\$/g, '\n'));
}
forum([
    "#RoYaL: I'm not sure what you mean,",
    "but I am confident that I've written",
    "everything correctly. Ask #iordan_93",
    "and #pesho if you don't believe me",
    "<code>",
    "#trying to print stuff",
    "print(\"yoo\")",
    "</code>",
    "pesho gosho"]);