$(document).ready(function() {
  var request = $.ajax({
    type: "GET",
    url: "https://drupal-meetup.lndo.site/node/rest/articles?_format=json&page=2",
    dataType: "json",
    success: function(response) {
      $.each(response, function(i) {
        console.log(response[i]);
        $('#article-list').append('<div class="item"><img alt="' + response[i].title + '" title="' + response[i].title + '" src="' + response[i].field_image + '" /><span class="title">' + response[i].title + '</span><a title="' + response[i].title + '" target="_blank" href="' + response[i].view_node + '">View More</a></div>');
      });
    }
  });
});
