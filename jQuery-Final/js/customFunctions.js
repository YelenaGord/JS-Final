function markCurrentPage(className){
  var pathname = $(location).attr('pathname');
  var curPage = pathname.substring(pathname.lastIndexOf('/') + 1);
  
  $('a').each(function(){
    if(curPage == $(this).attr('href')){
      $(this).attr('class', className);
    } else if(curPage == '') {
      $('a[href="index.html"]').attr('class', className);
    }
  }); // end 'a' link loop current page
} // end fcn

function accord(pageId){
  $(pageId).accordion({
    active: false,
    collapsible: true,
    heightStyle: "content"
  });
};

function externalLink() {
  for(var links = document.links, i = 0, a; a = links[i]; i++) {
        if (a.host !== location.host) {
          a.target = '_blank';
      }
  };
};

function gallery(galleryAnchor, galleryThumbImg, galleryThumb) {
  var galleryImages = [];
  var loadThese = $(galleryAnchor);
  for (i = 0; i < loadThese.length; i++) {
    galleryImages[i] = new Image();
    galleryImages[i].src = loadThese[i];
  } // end for loop

  // shows first image at loading with caption
  var firstImagePath = $(galleryAnchor).attr('href');
  var firstImageAlt = $(galleryThumbImg).attr('alt');
  var firstImage = $('<figure id="galleryBig"><img src="' + firstImagePath + '" alt="' + firstImageAlt + '"><figcaption>' + firstImageAlt + '</figcaption></figure>');
  $(galleryThumb).after(firstImage);
  // end displayFirst

  // displays the images and its captions
  $('#gallery a').click(function (evt) {
  evt.preventDefault();
  oldImage = $('#galleryBig').children(':first');
  oldCapt = $('#galleryBig').children('figcaption');
  var imgPath = $(this).attr('href');
  var imgAlt = $(this).children(galleryThumbImg).attr('alt');
  var newImage = $('<img src="' + imgPath + '" alt="' + imgAlt + '">');
  var newCapt = $('<figcaption>' + imgAlt + '</figcaption>');
  newImage.hide();
  newCapt.hide();
  $('#galleryBig').prepend(newImage, newCapt);
  $(newImage).fadeIn();
  $(newCapt).fadeIn();
  oldImage.remove();
  oldCapt.remove();
  }); //end anonymous fcn
} //end gallery

function date(dateId){
  $(dateId).datepicker({
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    changeYear: true,
    maxDate: 0
  }); // end date picker
};

function autoClear(){
  var elements = $('input:text, textarea');
  elements.focus(function(){
    var defVal = $(this).prop('defaultValue');
    var curVal = $(this).val();
    if (defVal == curVal){
      $(this).val('');
    } // end if
  }); // end focus
  elements.blur(function(){
    var defVal = $(this).prop('defaultValue');
    if ($(this).val() == ''){
      $(this).val(defVal);
    }; // end if
  }); // end blur
}

function valid(){
  $('form').validate({
    rules: {
      full: {
        required: true,
        notDefaultText: true
      },
      first: {
        required: true,
        notDefaultText: true
      },
      last: {
        required: true,
        notDefaultText: true
      },
      email: {
        required: true,
        email: true,
        notDefaultText: true
      },
      date: 'required'
    },
    messages: {
      full: 'Please enter first and last name!',
      first: 'Please enter first name!',
      last: 'Please enter last name!',
      email: 'Please enter an email address!',
      date: 'Please pick a date!'
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element).css('color', '#f00');
    }
  }); // end validate
}

function dragDrop(){
  $('#formDuck, #formCow, #formRabbit').draggable();
  $('#formMountains, #formPond, #formSpace').droppable();
};

function dragDrop1(){
  $('#pumpkin, #fish, #tire').draggable();
  $('#car, #cauldron, #aquarium').droppable();
};
