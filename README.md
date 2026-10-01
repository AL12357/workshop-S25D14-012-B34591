# Campus Create Workshop Registration

## Student Details

- Name:Mawejje Alesha
- Student number: B34591

## Project Description

Campus Create is a responsive, browser-based workshop registration form for a fictional student creative-workshop program. It lets a visitor select from HTML Essentials, CSS Studio, and JavaScript Lab, then enter contact details, choose a preferred session date, and reserve between one and four seats.

The project demonstrates front-end form design and client-side validation using semantic HTML, CSS, and vanilla JavaScript. It checks required fields, email and optional telephone/portfolio formats, a date that is not in the past, the seat-count range, a minimum-length practice password, matching password confirmation, and agreement to use invented details. When the form is valid, the page displays a registration preview and identifies the booking as individual or group based on the number of seats. Invalid submissions receive browser validation feedback and an on-page message.

The layout adapts to smaller screens and includes labels, input hints, keyboard-focus styling, and live status feedback. This is a classroom demonstration only: it has no server, database, or payment workflow, and it does not submit or store registration information. Use invented details, especially for the practice password.

## Project Files

- `index.html` contains the page structure and registration form.
- `styles.css` contains the visual styling and responsive layout.
- `app.js` populates the workshop options, sets the earliest selectable date, validates form input, and creates the preview message.

## Requirements

- A modern web browser with JavaScript enabled.
- No package installation or build step is required.
- Optional: Python 3, if you want to serve the files locally instead of opening the HTML file directly.

## Run the Project

### Option 1: Open the page directly

1. Download or clone the project folder.
2. Open `index.html` in a modern browser.
3. Fill in the form using invented details and select **Preview registration**.

### Option 2: Use a local web server

From the project directory, run:

```powershell
py -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser. Stop the server with `Ctrl+C` in the terminal.

## Using the Form

1. Enter a name and email address.
2. Optionally enter a telephone number (9–15 digits) and a complete portfolio URL.
3. Choose a workshop, a date that is today or later, and between one and four seats.
4. Enter a practice password of at least 10 characters and confirm it. Do not use a real password.
5. Check the agreement to use invented details, then select **Preview registration**.

The preview is generated in the browser and is not saved or sent anywhere.