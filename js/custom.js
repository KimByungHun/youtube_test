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
    console.log(data);
})
.error(function(err){
    console.log(err);
})