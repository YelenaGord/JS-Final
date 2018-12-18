$(document).ready(function(){
  markCurrentPage('pageHighlight');
  accord('#faqs');
  externalLink();
  gallery('#galleryThumbs a', '#galleryThumbs a img', '#galleryThumbs');
  date('#sightingdate');
  autoClear();
  dragDrop();
  valid();
}); // end ready function