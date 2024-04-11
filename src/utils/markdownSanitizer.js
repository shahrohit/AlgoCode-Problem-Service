const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
var TurndownService = require("turndown");

const turndownService = new TurndownService();

function sanitizeMarkdown(markdownContent) {
  // 1. convert markedown to html
  const htmlContent = marked.parse(markdownContent);

  // 2. sanitize html
  const sanitizedHtmlContent = sanitizeHtmlLibrary(htmlContent, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(["img"]),
  });

  // 3. convert sanitized html to markdown
  const sanitizedMarkdownContent =
    turndownService.turndown(sanitizedHtmlContent);

  // console.log("sanitizedMarkdownContent", sanitizedMarkdownContent);
  return sanitizedMarkdownContent;
}

module.exports = sanitizeMarkdown;
