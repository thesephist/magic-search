// pulling in local settings
var dv_e, sh_e, qs_e, sh_content;
chrome.storage.sync.get({
    dv:true, 
    sh:true, 
    qs:true, 
    zm:true,
    shc: "stackx wiki edux"
}, function(record){
    dv_e = record.dv;
    sh_e = record.sh;
    qs_e = record.qs;
    zm_e = record.zm;
    sh_content = record.shc;
    ms_script();
});

// main loop
function ms_script(){
    
    typeHash = {
        "img": "&tbm=isch", 
        "image": "&tbm=isch", 
        "news": "&tbm=nws", 
        "vid": "&tbm=vid", 
        "book": "&tbm=bks", 
        "translate": "_tl", 
        "tl": "_tl", 
        "yt": "_yt", 
        "sch": "_sch", 
        "wiki": "_wk", 
        "amz": "_amz", 
        "map": "_maps", 
        "maps": "_maps", 
        "pdf": "_pdf", 
        "ppt": "_pdf", 
        "verbatim": "&tbs=li:1", 
        "v": "&tbs=li:1", 
        "flickr": "_flickr", 
        "wa": "_wa", 
        "quotes": "_bq", 
        "quote": "_bq", 
        "urban": "_ub", 
        "lucky": "_lucky"
    }
    
    // navigating to target websites
    function goToYT(query_string){window.location.href="https://www.youtube.com/results?search_query="+query_string;}
    function goToSch(query_string){window.location.href="https://scholar.google.com/scholar?q="+query_string;}
    function goToWiki(query_string){window.location.href="https://en.wikipedia.org/w/index.php?search="+query_string;}
    function goToKey(query_string, key){window.location.href="https://www.google.com/search?q="+query_string+key;}
    function goToAmz(query_string){query_string=query_string.replace(/\+/g, '%20');window.location.href="http://www.amazon.com/s/field-keywords="+query_string;}
    function goToTl(query_string){query_string=query_string.replace(/\+/g, '%20');window.location.href="https://translate.google.com/#auto/en/"+query_string;}
    function goToMaps(query_string){window.location.href="https://www.google.com/maps/place/"+query_string;}
    function goToPpt(query_string){window.location.href="https://www.google.com/search?q="+query_string+"+filetype:ppt";}
    function goToPdf(query_string){window.location.href="https://www.google.com/search?q="+query_string+"+filetype:pdf";}
    function goToWa(query_string){window.location.href="http://www.wolframalpha.com/input/?i="+query_string}
    function goToFl(query_string){window.location.href="https://www.flickr.com/search/?text="+query_string}
    function goToBq(query_string){window.location.href="http://www.brainyquote.com/search_results.html?q="+query_string}
    function goToUb(query_string){window.location.href="http://www.urbandictionary.com/define.php?term="+query_string}
    function goToIFL(query_string){window.location.href="http://www.google.com/search?btnI=&q="+query_string}
    var ms_url, rv_url, search_data, count, counterP;
    
    // is there a QuickSearch query present?
    function queryPresent(){
        ms_url = window.location.href;
        rv_url = ms_url.split("").reverse().join("");
        
        inc = rv_url.indexOf("=q&");
        if(inc==-1){inc=rv_url.indexOf("=q?")}
        if(inc==-1){inc=rv_url.indexOf("=q#")}
        if(inc==-1){return false}
        
        inc = ms_url.length - inc;
        
        term = ms_url.substring(inc, ms_url.length);
        term = term.split("&")[0];
        
        terml = term.split(":");
        if(terml.length==1){
            terml = term.split("%3A");
        }

        if(terml.length<2){return false}
        terml =  [terml[0], terml.splice(1).join(":")];
        terml[0] = terml[0].toLowerCase().split("+").join("");
        return terml;
    }
    
    // go to target with query
    function goToSearch(type, query){
        typeID = typeHash[type];
        if(typeID==undefined){return null}
        else if(typeID[0]=="&"){
            goToKey(query, typeID);
        }else if(typeID[0]=="_"){
            if(typeID=="_yt"){
                goToYT(query);
            }else if(typeID=="_wk"){
                goToWiki(query);
            }else if(typeID=="_sch"){
                goToSch(query);
            }else if(typeID=="_amz"){
                goToAmz(query);
            }else if(typeID=="_tl"){
                goToTl(query);
            }else if(typeID=="_maps"){
                goToMaps(query);
            }else if(typeID=="_pdf"){
                goToPdf(query);
            }else if(typeID=="_ppt"){
                goToPpt(query);
            }else if(typeID=="_wa"){
                goToWa(query);
            }else if(typeID=="_flickr"){
                goToFl(query);
            }else if(typeID=="_bq"){
                goToBq(query);
            }else if(typeID=="_ub"){
                goToUb(query);
            }else if(typeID=="_lucky"){
                goToIFL(query);
            }
        }
    }
    
    // check for query
    function mssync(){
        search_data = queryPresent();
        if(typeof(search_data)=="object"){
            if(typeHash[search_data[0]]!=undefined){
                document.write();
                goToSearch(search_data[0], search_data[1])
            }
        }
    }
    
    // when to check for query
    if(qs_e){
        mssync();
    }

    // when to enable dualview
    function dualview(){
        console.log("processing dualview");
        if(document.getElementById("rhs_block")!=null && document.getElementById("cnt")!=null){
            if(document.getElementById("rhs_block").children[1]!=undefined){
                if(document.getElementById("rhs_block").children[1].tagName.toLowerCase()=="script" || document.getElementById("rhs_block").children[1].tagName.toLowerCase()=="div"){
                    document.getElementById("cnt").setAttribute("data-msdualviewenabled", "true");}else{
                        document.getElementById("cnt").setAttribute("data-msdualviewenabled", "false");}
            }else{document.getElementById("cnt").setAttribute("data-msdualviewenabled", "true");}
        }else{document.getElementById("cnt").setAttribute("data-msdualviewenabled", "true");}
        document.getElementById('center_col').style.paddingTop=0;
    }
   
    // activate dualview
    if(dv_e){
        document.addEventListener("DOMContentLoaded", function(){
            dualview();
        });
        document.addEventListener("keydown", function(){
            clearInterval(counterP);
            counterP = setTimeout(dualview, 700);
        })
    }
    
    // activate Search Highlight
    if(sh_e){document.addEventListener("DOMContentLoaded", function(){document.body.setAttribute("data-mshighlight", sh_content);})}

    // activate Image Zoom
    if(zm_e){document.addEventListener("DOMContentLoaded", function(){document.body.setAttribute("data-mszoomenabled", zm_e)})}

};
