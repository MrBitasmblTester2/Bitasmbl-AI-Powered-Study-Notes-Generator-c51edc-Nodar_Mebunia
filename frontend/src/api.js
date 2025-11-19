import axios from "axios";
export function exportNotes(text,format="txt"){
  return axios.post('/api/export',{text},{params:{format},responseType:'blob'});
}
