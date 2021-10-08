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

        //본문 텍스트 내용이 100글자 넘어가면 말줄임표 붙이기
        let txt = data.snippet.description;
        let len = txt.length;
        if(len>200){
            txt = txt.substr(0, 100) + "..."
        }
        
        //날짜 텍스트 정리
        let date = data.snippet.publishedAt;
        date = date.split("T")[0];



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
                                $("<p>").text(txt),
                                $("<span>").text(date)
                            )
                    )
            )
    })
})
.error(function(err){
    console.log(err);
})

$("body").on("click", "#vidGallery article a", function(e){
    e.preventDefault();

    let vidId = $(this).attr("href");

    $("body")
        .append(
            $("<div class='pop'>")
                .append(
                    $("<iframe>")
                        .attr({
                            src:"https://www.youtube.com/embed/"+vidId,
                            frameborde : 0,
                            width : "100%",
                            height : 600
                        }),
                    $("<span>").text("close")
                )
        )
});

$("body").on("click", ".pop span", function(){
    $(".pop").remove();
})