function slugify(title) {
    const titleWords = title.toLowerCase().split(" ");
    return titleWords.join("-");
}
