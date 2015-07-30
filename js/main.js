NProgress.configure({ showSpinner: false });
NProgress.start();

var shouldLog = true;
var log = console.log;

console.log = function(){
    if(shouldLog){
        log.apply(this, arguments);
    }
}

function members(res){
    var data = res.data;
    for(var i=0;i<data.length;i++){
        var url     = data[i].avatar_url;
        var name    = data[i].login;

        var profile = data[i].html_url;
        $("#members").append('<a href='+profile+' target=_blank> <img alt='+name+' src='+url+'/>');
    }
    $("#members").justifiedGallery({
        "lastRow"   : "justify",
        "randomize" : true
    }).on('jg.complete', function (e) {
        NProgress.done();
    });
    console.log(data, "members");
}

function projects(res){
    var data = res.data;
    for(var i=0;i<data.length;i++){
        var url = data[i].html_url;
        var name= data[i].name;
        var created = data[i].created_at;
        var forks   = data[i].forks_count;
        var o_issues= data[i].open_issues_count;
        o_issues = o_issues > 9 ? o_issues:'0'+o_issues;
        forks = forks > 9 ? forks:'0'+forks;
        $("#projects ul").append('<li class=clear><a href='+url+' target=_blank>'+name+' <span class=forks>forks:'+forks+'</span><span class=oissues> open issues: '+o_issues+' | &nbsp; </span><'+'/a><'+'/li>');
    }
    console.log(data, "projects");
}

function appendScript(src){
    var script = document.createElement('script');
    script.src=src;
    document.getElementsByTagName('head')[0].appendChild(script);
}

appendScript("https://api.github.com/orgs/delta/members?callback=members");
appendScript("https://api.github.com/orgs/delta/repos?callback=projects");

