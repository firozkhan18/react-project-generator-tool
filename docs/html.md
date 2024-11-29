### **In-Depth Guide to HTML (HyperText Markup Language)**

HTML (Hypertext Markup Language) is the standard language for creating web pages and web applications. It structures content on the web using a variety of elements (tags) and attributes to define the structure and layout of a page.

This guide will cover the core concepts of HTML in-depth, from basic syntax to advanced elements.

---

### **1. Basic Structure of an HTML Document**

An HTML document consists of a hierarchical structure, which is essential to organize content. The basic structure looks like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Page content goes here -->
</body>
</html>
```

#### Key Elements:
- **`<!DOCTYPE html>`**: This declaration tells the browser that the document is an HTML5 document.
- **`<html>`**: The root element that wraps the entire document.
- **`<head>`**: Contains meta-information about the HTML document (like title, metadata, links to external files such as CSS or JS).
- **`<body>`**: Contains the content that is displayed on the web page (e.g., text, images, etc.).

---

### **2. Common HTML Tags**

#### 2.1 **Text Content Tags**
These tags are used to format and display text on the page.

- **`<h1>` to `<h6>`**: Headings with `<h1>` being the largest and most important, and `<h6>` the smallest.
  
```html
<h1>This is a main heading</h1>
<h2>This is a subheading</h2>
```

- **`<p>`**: Defines a paragraph of text.
  
```html
<p>This is a paragraph.</p>
```

- **`<br>`**: Inserts a line break (self-closing tag).
  
```html
<p>First line.<br>Second line after a break.</p>
```

- **`<strong>`**: Defines bold text (semantically strong).
  
```html
<strong>This text is important and bold.</strong>
```

- **`<em>`**: Defines emphasized text (usually italicized).
  
```html
<em>This text is emphasized and italicized.</em>
```

#### 2.2 **List Tags**
Lists are used to display items in an ordered (numbered) or unordered (bulleted) manner.

- **Unordered List** (`<ul>`) with list items (`<li>`):
  
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

- **Ordered List** (`<ol>`) with list items (`<li>`):
  
```html
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
```

#### 2.3 **Anchor Tags (Links)**
The anchor tag (`<a>`) is used to create hyperlinks.

- **`<a>`**: Defines a hyperlink to another page or resource.
  
```html
<a href="https://www.example.com" target="_blank">Visit Example Website</a>
```
- **`href`**: The URL where the link points.
- **`target="_blank"`**: Opens the link in a new tab.

#### 2.4 **Image Tags**
Images are displayed using the `<img>` tag. It is a self-closing tag that does not have an end tag.

- **`<img>`**: Embeds an image on the page.
  
```html
<img src="image.jpg" alt="Description of the image" width="500" height="300">
```
- **`src`**: The source file for the image.
- **`alt`**: A short description of the image (used for accessibility and SEO).
- **`width` and `height`**: Specifies the size of the image.

---

### **3. HTML Forms**

Forms allow users to input data, which can then be sent to the server for processing.

#### 3.1 **Form Tag**

The `<form>` tag defines the form element.

```html
<form action="/submit" method="POST">
  <!-- Form elements go here -->
</form>
```
- **`action`**: The URL where the form data will be sent.
- **`method`**: The HTTP method to use (`GET` or `POST`).

#### 3.2 **Form Input Elements**
These are elements inside the form for user interaction:

- **`<input>`**: Defines various types of input fields (text, password, checkbox, etc.).
  
```html
<input type="text" id="username" name="username" placeholder="Enter your name">
<input type="password" id="password" name="password" placeholder="Enter password">
```

- **`<textarea>`**: A multi-line text input field.

```html
<textarea rows="4" cols="50" placeholder="Enter your message"></textarea>
```

- **`<button>`**: Defines a clickable button.
  
```html
<button type="submit">Submit</button>
```

- **`<select>`** and **`<option>`**: Used to create drop-down lists.
  
```html
<select name="country">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>
```

#### 3.3 **Form Attributes**

- **`name`**: The name attribute specifies the name of the form control, which will be sent to the server.
- **`placeholder`**: Provides a short hint or description inside an input field.

---

### **4. HTML Attributes**

Attributes provide additional information about an HTML element. They are written inside the opening tag.

#### 4.1 **Common Attributes**
- **`id`**: A unique identifier for the element.
  
```html
<div id="header">Header Content</div>
```

- **`class`**: Specifies one or more class names for an element (used for styling or JavaScript selection).
  
```html
<div class="container">Content</div>
```

- **`style`**: Specifies inline CSS for an element.
  
```html
<p style="color: blue;">This is a blue text.</p>
```

- **`title`**: Provides additional information when the user hovers over the element.
  
```html
<img src="icon.png" title="This is an icon">
```

- **`lang`**: Specifies the language of the document or an element.
  
```html
<html lang="en">
```

---

### **5. HTML Semantic Elements**

Semantic elements describe the type of content they contain and help with the accessibility and SEO of a webpage.

- **`<header>`**: Defines a header for a page or section.
  
```html
<header>
  <h1>Website Title</h1>
  <nav>...</nav>
</header>
```

- **`<footer>`**: Defines a footer for a page or section.
  
```html
<footer>
  <p>&copy; 2024 Your Company</p>
</footer>
```

- **`<article>`**: Represents a self-contained piece of content that can be distributed independently.
  
```html
<article>
  <h2>Article Title</h2>
  <p>Article content here...</p>
</article>
```

- **`<section>`**: Groups related content together.
  
```html
<section>
  <h2>Section Title</h2>
  <p>Section content here...</p>
</section>
```

- **`<nav>`**: Defines navigation links.
  
```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>
```

---

### **6. HTML Tables**

Tables are used to display tabular data.

```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
  </tbody>
</table>
```

#### Key Table Tags:
- **`<table>`**: Defines the table.
- **`<tr>`**: Defines a table row.
- **`<th>`**: Defines a table header.
- **`<td>`**: Defines a table data cell.

---

### **7. HTML Media Elements**

HTML provides elements to embed multimedia content like audio and video.

- **`<audio>`**: Embeds audio content.
  
```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>
```

- **`<video>`**: Embeds video content.
  
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</

video>
```

---

### **8. HTML Forms: Advanced Features**

- **Checkboxes and Radio Buttons**: These allow the user to select multiple options (checkbox) or a single option (radio button).
  
```html
<input type="checkbox" name="newsletter" value="yes"> Subscribe to newsletter
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
```

- **Date, Time, and Number Inputs**: HTML5 introduced new input types for better user experience.
  
```html
<input type="date" name="birthday">
<input type="time" name="meetingTime">
<input type="number" name="quantity">
```

---

### **Conclusion**

HTML is the backbone of web content. Whether you're creating a simple webpage or a complex web application, understanding HTML is crucial. This guide provides a foundational overview, but practice and real-world usage are essential to mastering HTML.
