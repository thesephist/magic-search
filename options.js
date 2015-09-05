function e(id){return document.getElementById(id)}
var button=e("submitter");

function syncD(string){
    if(string.indexOf("wiki")>-1){e('sh-wiki').checked=true}
    if(string.indexOf("stackx")>-1){e('sh-stack').checked=true}
    if(string.indexOf("edux")>-1){e('sh-govedu').checked=true}
}

function syncE(){
    shc = ""
    if(e('sh-wiki').checked){shc+="wiki "}
    if(e('sh-govedu').checked){shc+="edux "}
    if(e('sh-stack').checked){shc+="stackx "}
    return shc;
}

function restore(){
    chrome.storage.sync.get({
      dv: true,
      qs: true,
      sh: true,
      shc: "wiki stackx edux",
    }, function(record){
        e('dv-enable').checked = record.dv;
        e('qs-enable').checked = record.qs;
        e('sh-enable').checked = record.sh;
        syncD(record.shc);
    });
}

function save(){
    dv_enable=e('dv-enable').checked;
    qs_enable=e('qs-enable').checked;
    sh_enable=e('sh-enable').checked;
    sh_content=syncE();

    chrome.storage.sync.set({
        dv: dv_enable,
        qs: qs_enable,
        sh: sh_enable,
        shc: sh_content
    }, showSaved);
}

function showSaved(){
    button.innerHTML="SAVED";
    setTimeout(function(){
        button.innerHTML="SAVE";
    }, 1200);
}

document.addEventListener('DOMContentLoaded', restore);
button.addEventListener('click', save);
