var $ = jQuery
$(document).ready(function () {
  window.localStorage.setItem('wishlist', window.localStorage.getItem('wishlist') || '[]')
  JSON.parse(window.localStorage.getItem('wishlist')).forEach(function (id) {
    $('[data-id="' + id + '"]').addClass('added')
  })
  $('.addToWishlist:not(.added)').on('click', function (e) {
    var $button = $(e.target)
    var wishlist = JSON.parse(window.localStorage.getItem('wishlist'))
    $button.addClass('added')
    wishlist.push($button.data('id'))
    window.localStorage.setItem('wishlist', JSON.stringify(wishlist))
  })

  $('.addToWishlist.added').on('click', function (e) {
    var $button = $(e.target)
    var wishlist = JSON.parse(window.localStorage.getItem('wishlist'))
    $button.removeClass('added')
    wishlist.splice(wishlist.indexOf($button.data('id')), 1)
    window.localStorage.setItem('wishlist', wishlist)
  })
})
