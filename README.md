# Bitasmbl-AI-Powered-Study-Notes-Generator-c51edc-Nodar_Mebunia

## Description
Build a web application that allows students to input lectures, textbooks, or articles and automatically generate concise, structured study notes. The system uses AI summarization and keyword extraction to create easy-to-review content while maintaining readability and context.

## Tech Stack
- Material-UI
- Python
- React

## Requirements
- Allow users to input text content from lectures, articles, or textbooks
- Support exporting notes in a downloadable format (PDF or TXT)
- Provide options to edit and reorganize generated notes
- Highlight important keywords and key concepts in the generated notes
- Automatically generate summarized study notes from the input content

## Installation
Step-by-step setup guide:

1. Clone the repository (using the provided Repo Owner Username):

   git clone https://github.com/MrBitasmblTester2/Bitasmbl-AI-Powered-Study-Notes-Generator-c51edc-Nodar_Mebunia.git
   cd Bitasmbl-AI-Powered-Study-Notes-Generator-c51edc-Nodar_Mebunia

2. Frontend (React + Material-UI) setup:

   cd frontend
   npm install
   npm install @material-ui/core @material-ui/icons

   Notes:
   - These commands install project dependencies and Material-UI packages for the React frontend.

3. Backend (Python) setup:

   cd ../backend
   python3 -m venv venv

   # macOS / Linux
   source venv/bin/activate

   # Windows (PowerShell)
   # venv\Scripts\Activate.ps1

   pip install -r requirements.txt

   Notes:
   - Ensure requirements.txt in the backend directory lists the Python packages needed by the backend service.
   - If a requirements.txt is not present, create one containing the backend dependencies before running pip install.

## Usage
Start the application components below. These are common minimal usage patterns for a React frontend and a Python backend.

1. Start the backend service:

   cd backend
   source venv/bin/activate   # (or activate venv on Windows)
   python app.py

   Notes:
   - Run the Python backend entrypoint (for example app.py). Ensure the backend entrypoint file exists and starts an HTTP API server that the frontend can call.

2. Start the frontend development server:

   cd ../frontend
   npm start

   Notes:
   - Open the React frontend in a browser (typically at http://localhost:3000) and use the UI to input lecture/article/textbook content.
   - From the UI you should be able to trigger note generation, edit and reorganize notes, highlight keywords/key concepts, and export notes as PDF or TXT.

3. Exporting notes:

   - Use the provided frontend export option to download generated notes in PDF or TXT format. The frontend should implement a client-side download flow for TXT and a PDF generation flow (for example, client-side HTML-to-PDF export or a backend-provided PDF endpoint).

## Implementation Steps
1. Create repository structure with two main folders: frontend/ (React + Material-UI) and backend/ (Python service).
2. Initialize the React app in frontend/ and install Material-UI packages (@material-ui/core and @material-ui/icons).
3. Implement a responsive UI page in React that provides:
   - A multi-line text input area for users to paste or type lecture/article/textbook content.
   - Buttons to submit content for note generation, edit generated notes, reorganize sections, and export notes.
   - UI components styled using Material-UI for consistent appearance and accessibility.
4. Implement frontend state for generated notes allowing editing and drag-and-drop reordering of sections (store notes in component state or a client-side state manager).
5. Implement keyword and key concept highlighting in the frontend rendering of generated notes (apply distinct styles to keywords returned by the backend).
6. Create a Python backend service that exposes an API endpoint to receive raw text and return structured output: summarized notes, extracted keywords, and suggested sections. The backend should:
   - Accept POST requests with input text.
   - Return JSON with a summary, list of keywords/key concepts, and structured note sections.
7. Implement the AI summarization and keyword extraction component in the Python backend. This component should:
   - Accept the input text and produce a concise, structured summary while preserving context.
   - Extract important keywords and key concepts to be highlighted in the notes.
   - Return results in a predictable JSON schema consumable by the frontend.
8. Implement export functionality:
   - TXT export: build a plain-text representation of the generated notes on the frontend and trigger a file download.
   - PDF export: implement either a client-side HTML-to-PDF generation or provide a backend endpoint that returns a generated PDF file for download.
9. Wire the frontend to the backend API endpoints, handle loading states and errors, and ensure the UI supports editing and reordering of generated notes before export.
10. Test end-to-end flows: input large/small texts, generate notes, edit and reorganize, highlight keywords, and export as PDF and TXT.

## API Endpoints (Optional)
- Endpoint: /api/generate-notes
  Method: POST
  Description: Accepts raw text (lecture/article/textbook) and returns structured summarized study notes plus extracted keywords and key concepts.

- Endpoint: /api/export
  Method: POST
  Description: (Optional) Accepts finalized notes and returns a generated PDF file for download. Alternatively, PDF generation can be handled client-side.