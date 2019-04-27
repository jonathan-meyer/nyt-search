function nyt(search, num_record, start_year, end_year, cb) {
    $.ajax({
        type: "GET",
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=XzLFRQAdZMAZxwxWlpdB4EGL4vlFAYQC"
    }).then(function(data) {
        var docs = data.response.docs;


        cb(docs);
    });
}


$(function(){
    $("#search").on("click", function(){
        console.log("click");
        nyt("", 1, null, null, function(resp){
            console.log(resp)

            for( var x =0; x < resp.length; x++ )
            {
               var doc = resp[x];
               var row = $("<div>").addClass('row');
               var title = $("<div class='col'>").text("Title");
               var value =  $("<div class='col'>").text(doc.headline.main);

               row.append(title, value);

               $("#table").append(row)
            }
        })
    });
});


