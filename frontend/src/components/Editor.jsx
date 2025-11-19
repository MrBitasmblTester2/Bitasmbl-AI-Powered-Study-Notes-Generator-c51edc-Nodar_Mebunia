import React from "react";
import {TextField} from "@mui/material";
export default function Editor({content,onChange}){
  return <TextField label="Edit notes" multiline fullWidth rows={8} value={content} onChange={e=>onChange(e.target.value)} />;
}
