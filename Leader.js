var loadData = function(){
      var url = 'Leaders.php';
      $.getJSON(url, function(data) {
        $('#Leaderboard').css("height","60%")
        $('#Leaders').empty().append('<ul style="position: absolute; margin: 0px; padding: 0px; top: 0px; list-style-type:none; width:100%">');
        $.each(data, function(index, data) {
           $('#Leaders>ul').append("<li style='margin: 0px; margin-top:5% ; padding: 0px; height: 20%; width:100%'>&nbsp; #"+data.rank+" &nbsp;&nbsp;"+data.name+"<span class='myNumber' name='n1' style='float:right;'> "+data.points+" &nbsp;</span></li>");
        });
          $('#Leaders').append('</ul>');
   });
}
var loadData2 = function(){
      var url = 'Game.php';
      $.getJSON(url, function(data) {
        $('#points').empty().append(data.points);
        $('#level').empty().append(data.level);
        $('#ranking').empty().append(data.rank);
        $('#levelUsers').empty().append(data.users);
        $('#titlediv>div>h3>center').empty().append(data.title);
        $('#game3').empty().load(data.qnlink);
      });
}
var loadData3 = function(){
      var url = 'commenter.php';
      $.getJSON(url, function(data) {
        $('#levelsel').empty().append('<a>LEVEL '+data.level+'</a>');
      });
}
