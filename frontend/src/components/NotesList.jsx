import React from "react";
import {Box, Chip, Typography} from "@mui/material";
export default function NotesList({notes,keywords}){
  let html = notes || "";
  keywords.forEach(k=>{ const re=new RegExp("\\b"+k+"\\b","gi"); html=html.replace(re,`<mark>${k}</mark>`);});
  return <Box><Typography variant="h6">Notes</Typography><div dangerouslySetInnerHTML={{__html:html}} />
    <Box mt={2}>{keywords.map(k=> <Chip key={k} label={k} />)}</Box></Box>;
}
