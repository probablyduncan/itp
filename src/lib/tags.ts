const tagMap = new Map<string, string>();
tagMap.set("website", "green");
tagMap.set("microblog", "green");
tagMap.set("program", "green");
tagMap.set("writing", "blue");
tagMap.set("story", "blue");
tagMap.set("dissertation", "blue");
tagMap.set("essay", "blue");
tagMap.set("photobook", "red");
tagMap.set("photography", "red");
tagMap.set("film", "cadetblue");
tagMap.set("short film", "cadetblue");
tagMap.set("wikipedia", "darkgray");
tagMap.set("speaking", "orange");
tagMap.set("doodles", "indianred");

const otherColors = [
    "indianred", "cornflowerblue", "tomato"
]

export function getTagColor(tag: string) {
    tag = tag.toLowerCase();
    if (tagMap.has(tag)) {
        return tagMap.get(tag);
    }

    const [color] = otherColors.splice(Math.floor(Math.random() * otherColors.length), 1);
    console.log(color)
    tagMap.set(tag, color);
    return color;
}