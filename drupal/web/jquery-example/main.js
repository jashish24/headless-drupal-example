$(document).ready(function() {
  var request = $.ajax({
    type: "GET",
    url: "https://drupal-meetup.lndo.site/node/rest/articles?_format=json&page=2",
    dataType: "json",
    success: function(response) {
      $.each(response, function(i) {
        console.log(response[i]);
        $('#article-list').append('<div class="item"><span class="title">' + response[i].title + '</span><img alt="' + response[i].title + '" title="' + response[i].title + '" src="' + response[i].field_image + '" /><span><a title="' + response[i].title + '" target="_blank" href="' + response[i].view_node + '">View More</a></span></div>');
      });
    }
  });
});
