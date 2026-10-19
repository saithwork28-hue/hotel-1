/* ===== PASTE YOUR VALUES HERE (keep the quotation marks) ===== */
const SUPABASE_URL="https://tecyopyfeillojssgvum.supabase.co",
SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlY3lvcHlmZWlsbG9qc3NndnVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIyMjI5MTcsImV4cCI6MjEwNzc5ODkxN30.6O6cHeAt2IF5rzHu78L4ZzIpC1g1UDQAUmH-RRfFLlg",
UPI_ID="saithanwar65-1@oksbi",STORE="Tasteo";
/* =============================================================== */
const sb=(window.supabase&&SUPABASE_KEY.indexOf("PASTE")!==0)?supabase.createClient(SUPABASE_URL,SUPABASE_KEY):null;
const $=i=>document.getElementById(i),inr=n=>"₹"+n;
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function getCart(){try{return JSON.parse(localStorage.getItem("tcd")||"{}")}catch(e){return{}}}
function setCart(c){try{localStorage.setItem("tcd",JSON.stringify(c));localStorage.setItem("tc",JSON.stringify(Object.fromEntries(Object.entries(c).map(([i,v])=>[i,v.q]))))}catch(e){}}
function bill(c){const s=Object.values(c).reduce((a,v)=>a+v.p*v.q,0),d=s&&s<300?40:0,g=Math.round(s*.05);return{s,d,g,t:s+d+g}}