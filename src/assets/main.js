$(function() {

  // your code will go here


    $.ajax({
    url: 'https://www.codeschool.com/users/1651036.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      var completedCourses = response.courses.completed;
      for(var i=0; i< completedCourses.length; i++){
        $("#badges").append('<div class="course"><h3>'+completedCourses[i].title+
        '</h3><img src="'+ completedCourses[i].badge+'"/><a href= "'+ completedCourses[i].url + 
        '"target="_blank" class="btn btn-primary">See Course</a></div>');  
      }
    }
  });

});
