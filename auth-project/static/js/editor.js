// ============================
// Basic Formatting
// ============================

function boldText() {
    document.execCommand("bold");
}

function italicText() {
    document.execCommand("italic");
}

function underlineText() {
    document.execCommand("underline");
}

function strikeText() {
    document.execCommand("strikeThrough");
}


// ============================
// Headings
// ============================

function heading1() {
    document.execCommand("formatBlock", false, "<h1>");
}

function heading2() {
    document.execCommand("formatBlock", false, "<h2>");
}

function heading3() {
    document.execCommand("formatBlock", false, "<h3>");
}


// ============================
// Alignment
// ============================

function alignLeft() {
    document.execCommand("justifyLeft");
}

function alignCenter() {
    document.execCommand("justifyCenter");
}

function alignRight() {
    document.execCommand("justifyRight");
}

function justifyText() {
    document.execCommand("justifyFull");
}


// ============================
// Lists
// ============================

function bulletList() {
    document.execCommand("insertUnorderedList");
}

function numberList() {
    document.execCommand("insertOrderedList");
}


// ============================
// Undo / Redo
// ============================

function undoAction() {
    document.execCommand("undo");
}

function redoAction() {
    document.execCommand("redo");
}


// ============================
// Text Color
// ============================

function textColor() {

    let color = prompt("Enter color (red, blue, #ff0000)");

    if(color){
        document.execCommand("foreColor", false, color);
    }
}


// ============================
// Highlight Color
// ============================

function highlightColor() {

    let color = prompt("Highlight Color");

    if(color){
        document.execCommand("hiliteColor", false, color);
    }
}


// ============================
// Font Size
// ============================

function fontSize() {

    let size = prompt("Font Size (1-7)");

    if(size){
        document.execCommand("fontSize", false, size);
    }
}


// ============================
// Font Family
// ============================

function fontFamily() {

    let font = prompt("Font Name");

    if(font){
        document.execCommand("fontName", false, font);
    }
}


// ============================
// Hyper Link
// ============================

function insertLink() {

    let url = prompt("Enter URL");

    if(url){
        document.execCommand("createLink", false, url);
    }
}


// ============================
// Insert Image
// ============================

function insertImage() {

    let url = prompt("Paste Image URL");

    if(url){
        document.execCommand("insertImage", false, url);
    }
}


// ============================
// Horizontal Line
// ============================

function horizontalLine() {

    document.execCommand("insertHorizontalRule");
}


// ============================
// Remove Formatting
// ============================

function clearFormatting() {

    document.execCommand("removeFormat");
}


// ============================
// Print
// ============================

function printDocument() {

    window.print();
}


// ============================
// Word Counter
// ============================

function wordCount() {

    let text = document.getElementById("editor").innerText;

    let words = text.trim().split(/\s+/);

    alert("Total Words : " + words.length);

}