// JavaScript Document

var $ = jQuery.noConflict();

$(document).ready(function(e) {
  // Clear search input values on focus
  $('input#s').attr("value", "Search")
   .on('focus', function(){
      var $this = $(this);
      if($this.val() == 'Search'){
          $this.val('');
      }
  })
  .on("blur", function(){
      var $this = $(this);
      if($this.val() == ""){
          $this.val('Search');
      }
  });
  // Find Scroll
  var distance = $('div').offset().top;
  $(window).scroll(function(e) {
    $('.site-header').removeClass('scrolled');
    $('.logo img.default').css('display', 'block');
    $('.logo img.scrolled').css('display', 'none');
    if ( $(window).scrollTop() > distance ) {
      $('.site-header').addClass('scrolled');
      $('.logo img.default').css('display', 'none');
      $('.logo img.scrolled').css('display', 'block');
      $('#subnav-area').css('height', '0').css('display', 'none');
      $('.site-header').css('top', '0');
      e.preventDefault();
    }
  });
  // Sub-menu
var subnav = $('#subnav-area ul');
subnav.each(function(index){
  $('.main-navigation span').click(function(e){
  var classes = $(this).attr('class').split(/\s+/);
  $('.main-subnav').fadeOut('slow');
    if(subnav.hasClass(classes)){
      e.preventDefault();
      $('#subnav-area').css('display', 'block');
      $('.main-subnav.'+classes).slideDown(300);
      $('.site-header').css('top', '100px');
      console.log(classes);
    }
  });
  return false;
});
  // Show slider
  $('section.hero-area').click(function(e){
    e.preventDefault();
    $('#home-slider').css({
      top: '0',
      display: 'block'
    });
    $('#layerslider img.ls-bg').addClass('nav-cursor').layerSlider('next');
    $('.ls-close').click(function(e){
      $('#home-slider').css('top', '-900px').slideUp('fast', function(){
          $(this).fadeOut('slow');
      });
       e.stopPropagation();
  });
  });
  // Mobile click menu
  $('.main-navigation').click(function(e){
    //var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    var nav = $(this).find('ul');
      nav.toggleClass('menu-open');
  });
});