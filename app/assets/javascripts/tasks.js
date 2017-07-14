// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// $(function() {
// $(document).ready(function() {
// $.ready(function() {
// turbo links
$(document).on('turbolinks:load', function() {
  console.log('document ready');
  $('#task_name').focus();

  console.log($('.modal-footer .btn-primary'));

    $('.modal-footer .btn-primary').click(function() {
      // console.log('click');
      // console.log($('.modal-body form'));
      $('.modal-body form').submit();
    });
});
