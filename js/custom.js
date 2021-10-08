// https://www.youtube.com/playlist?list=PLQM4zMb4wHCsTOtC0zyr9uxQR5Z6wlryC

$.ajax({
    url:"https://www.googleapis.com/youtube/v3/playlistItems",
    dataType : 'jsonp',
    data : {
        part : "snippet",
        key : "AIzaSyCp6pYKocpuF3qg3kV57ps78efKtfH1Y1o",
        maxResults: 5,
        playlistId : "PLQM4zMb4wHCsTOtC0zyr9uxQR5Z6wlryC"

    }
})
.success(function(data){
    // console.log(data);

    let items = data.items;
    console.log(items);

    //영상갯수만큼 반복
    $(items).each(function(index, data){


        $("#vidGallery")
            .append(
                $("<article>")
                    .append(
                        $("<a>").attr({href : data.snippet.resourceId.videoId})
                        .append(
                            $("<img>").attr({src: data.snippet.thumbnails.high.url})
                        ),
                        $("<div class='con'>")
                            .append(
                                $("<h2>").text(data.snippet.title),
                                $("<p>").text(data.snippet.description),
                                $("<span>").text(data.snippet.publishedAt)
                            )
                    )
            )
    })
})
.error(function(err){
    console.log(err);
})