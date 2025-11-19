from fastapi import FastAPI
from pydantic import BaseModel
from app.summarizer import summarize_and_keywords
from app.exporter import make_export
app = FastAPI()
class InText(BaseModel):
    text: str
@app.post("/api/summarize")
def summarize(body: InText):
    summary, keywords = summarize_and_keywords(body.text)
    return {"summary": summary, "keywords": keywords}
@app.post("/api/export")
def export(body: InText, format: str = "txt"):
    return make_export(body.text, format)
