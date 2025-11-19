from fastapi.responses import StreamingResponse, PlainTextResponse
from io import BytesIO
from reportlab.pdfgen import canvas

def make_export(text, format="txt"):
    if format.lower()=="pdf":
        buf=BytesIO()
        c=canvas.Canvas(buf)
        c.drawString(50,800,text[:1000])
        c.showPage(); c.save(); buf.seek(0)
        return StreamingResponse(buf, media_type="application/pdf", headers={"Content-Disposition":"attachment; filename=\"notes.pdf\""})
    return PlainTextResponse(text, headers={"Content-Disposition":"attachment; filename=\"notes.txt\""})
