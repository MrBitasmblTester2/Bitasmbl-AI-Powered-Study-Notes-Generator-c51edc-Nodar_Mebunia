import React, {useState} from "react";
import {Container, TextField, Button, Typography} from "@mui/material";
import axios from "axios";
import Editor from "./components/Editor";
import NotesList from "./components/NotesList";
export default function App(){
  const [text,setText]=useState("");
  const [summary,setSummary]=useState("");
  const [keywords,setKeywords]=useState([]);
  async function handleSummarize(){
    const r=await axios.post('/api/summarize',{text});
    setSummary(r.data.summary);
    setKeywords(r.data.keywords||[]);
  }
  return (
    <Container>
      <Typography variant="h4">AI Study Notes Generator</Typography>
      <TextField label="Paste lecture or article" multiline fullWidth rows={6} value={text} onChange={e=>setText(e.target.value)} />
      <Button variant="contained" onClick={handleSummarize}>Generate Notes</Button>
      <Editor content={summary} onChange={setSummary} />
      <NotesList notes={summary} keywords={keywords} />
    </Container>
  );
}
