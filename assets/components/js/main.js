$(document).ready(function() {

//For User profile-content
  $('.profile-content .nav-pills > li > a').click(function(event){
      event.preventDefault();//stop browser to take action for clicked anchor

      //get displaying tab content jQuery selector
      var active_tab_selector = $('.profile-content .nav-pills > li.active > a').attr('href');

      //find actived navigation and remove 'active' css
      var actived_nav = $('.profile-content .nav-pills > li.active');
      actived_nav.removeClass('active');

      //add 'active' css into clicked navigation
      $(this).parents('li').addClass('active');

      //hide displaying tab content
      $(active_tab_selector).removeClass('active');
      $(active_tab_selector).addClass('hide');

      //show target tab content
      var target_tab_selector = $(this).attr('href');
      $(target_tab_selector).removeClass('hide');
      $(target_tab_selector).addClass('active');
  });


  //added condition to user profile
  if($('#general').hasClass('active')){
  //  will not show services and reviews if genetal tab is active
     $('#services').removeClass('active')
   $('#reviews').removeClass('active')
  }
});
