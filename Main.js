function t(t){
  t.preventDefault();
  let n=document.querySelector("#inputBookTitle");
  const o=document.querySelector("#inputBookAuthor"),
  d=document.querySelector("#inputBookYear"),
  i=document.querySelector("#inputBookIsComplete"),
  c={id:+new Date,title:n.value,author:o.value,year:d.value,isComplete:i.checked};
  console.log(c),
  e.push(c),
  document.dispatchEvent(new Event("bookChanged"))
}
function n(t){
  t.preventDefault();
  const n=document.querySelector("#searchBookTitle");
  query=n.value,
  query?c(e.filter((function(e){
    return e.title.toLowerCase().includes(query.toLowerCase())
  }))):c(e)
}
function o(t){
  const n=Number(t.target.id),
  o=e.findIndex((function(e){
    return e.id===n
  }));
  if (window.confirm("Apakah buku ini sudah dibaca?")){
    -1!==o&&(e[o]={...e[o],
    isComplete:!0},
    document.dispatchEvent(new Event("bookChanged")))
  }
}
function d(t){
  const n=Number(t.target.id),
  o=e.findIndex((function(e){
    return e.id===n
  }));
  if (window.confirm("Apakah buku ini belum selesai dibaca?")){
    -1!==o&&(e[o]={...e[o],
    isComplete:!1},
    document.dispatchEvent(new Event("bookChanged")))
  }
}
function i(t){
  const n=Number(t.target.id),
  o=e.findIndex((function(e){
    return e.id===n
  }));
  if (window.confirm("Apakah anda ingin menghapus buku pada rak ini?")){
    -1!==o&&(e.splice(o,1),
    document.dispatchEvent(new Event("bookChanged")))
  }
}
function g(t){
  const n=Number(t.target.id),
  o=e.findIndex((function(e){
    return e.id===n
  }));
  if (window.confirm("Harus mengimput ulang data, Setuju ?")){
    -1!==o&&(e.splice(o,1),
    document.dispatchEvent(new Event("bookChanged")))
  }
}
function c(e){
  const t=document.querySelector("#incompleteBookshelfList"),
  n=document.querySelector("#completeBookshelfList");
  t.innerHTML="",
  n.innerHTML="";
  for(const c of e){
    const e=document.createElement("article");
    e.classList.add("book_item");
    let a=document.createElement("h2");
    a.innerText=c.title;
    const u=document.createElement("p");
    u.innerText="Penulis: "+c.author;
    const r=document.createElement("p");
    if(r.innerText="Tahun: "+c.year,
    e.appendChild(a),
    e.appendChild(u),
    e.appendChild(r),
    c.isComplete){
      const t=document.createElement("div");
      t.classList.add("action");
      const o=document.createElement("button");
      o.id=c.id,
      o.innerText="Belum Selesai dibaca",
      o.classList.add("green"),
      o.addEventListener("click",d);
      const z=document.createElement("button");
      z.id=c.id,
      z.innerText="Ubah judul",
      z.classList.add("brown"),
      z.addEventListener("click",g);  
      const a=document.createElement("button");
      a.id=c.id,
      a.innerText="Hapus buku",
      a.classList.add("red"),
      a.addEventListener("click",i),
      t.appendChild(o),
      t.appendChild(a),
      t.appendChild(z),
      e.appendChild(t),
      n.appendChild(e)
    }else{
      const n=document.createElement("div");
      n.classList.add("action");  
      const d=document.createElement("button");
      d.id=c.id,
      d.innerText="Selesai dibaca",
      d.classList.add("green"),
      d.addEventListener("click",o);
      const z=document.createElement("button");
      z.id=c.id,
      z.innerText="Ubah judul",
      z.classList.add("brown"),
      z.addEventListener("click",g); 
      const a=document.createElement("button");
      a.id=c.id,
      a.innerText="Hapus buku",
      a.classList.add("red"),
      a.addEventListener("click",i),
      n.appendChild(d),
      n.appendChild(a),
      n.appendChild(z),
      e.appendChild(n),
      t.appendChild(e)
    }
  }
}
const STORAGE_KEY = 'BOOK_APPS';
let books = [];
const checkStorage = () => {
  if(typeof(Storage) == undefined) {
    alert('Your Browser not support web storage');
    return false;
  }
  return true;
}
function a(){
  !function(e){
    localStorage.setItem("books",JSON.stringify(e))
  }(e),c(e)
}
window.addEventListener("load",(function(){
  e=JSON.parse(localStorage.getItem("books"))||[],
  c(e);
  const o=document.querySelector("#inputBook"),
  d=document.querySelector("#searchBook");
  o.addEventListener("submit",t),
  d.addEventListener("submit",n),
  document.addEventListener("bookChanged",a)
}))