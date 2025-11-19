import React from "react";
import {Button} from "@mui/material";
import {exportNotes} from "../api";
import {downloadBlob} from "../utils/export";
export default function ExportButton({text,format="txt"}){
  const handle=async()=>{
    const r=await exportNotes(text,format);
    const blob=new Blob([r.data],{type:r.headers['content-type']});
    downloadBlob(blob, format==="pdf"?"notes.pdf":"notes.txt");
  };
  return <Button variant="outlined" onClick={handle}>Export {format.toUpperCase()}</Button>;
}
