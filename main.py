from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
import uvicorn
from pydantic import BaseModel
from fastapi import Request
from urllib.parse import unquote

app = FastAPI()

app.mount("/templates", StaticFiles(directory="templates"), name="templates")


templates = Jinja2Templates(directory="templates")

class DailyReport(BaseModel):
    plan: str
    risk: str
    duration: str
    send_time: str
    linke: str
    dima: str

@app.get("/")
async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/{plan}/{risk}/{duration}/{linke}/{dima}")
async def daily_report(plan: str,risk: str,duration: str,linke: str,dima: str):
    risk = unquote(risk)
    duration = unquote(duration)
    result = plan + risk + duration + linke + dima
    return {"result": result}
if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000)