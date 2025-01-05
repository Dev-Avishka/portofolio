export const parsePostFile = (text) => {
    const lines = text.split("\n");
    const parsedPost = { title: "", description: "", content: [] };
  
    lines.forEach((line) => {
      if (line.startsWith("$")) {
        parsedPost.title = line.substring(1).trim();
      } else if (line.startsWith("%")) {
        parsedPost.description = line.substring(1).trim();
      } else if (line.startsWith("!")) {
        const headingLevel = line.match(/!/g).length;
        parsedPost.content.push({ type: `h${headingLevel}`, text: line.replace(/!+/g, "").trim() });
      } else if (line.startsWith("@")) {
        parsedPost.content.push({ type: "image", src: line.substring(1).trim() });
      } else if (line.startsWith("&")) {
        parsedPost.content.push({ type: "center", text: line.replace(/&/g, "").trim() });
      } else if (line.startsWith("#")) {
        parsedPost.content.push({ type: "line" });
      } else if (line.trim()) {
        parsedPost.content.push({ type: "paragraph", text: line.trim() });
      }
    });
  
    return parsedPost;
  };
  