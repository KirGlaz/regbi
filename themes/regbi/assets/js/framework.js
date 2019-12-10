//tabs
$('.tab-wrapper .tab-label').on('click', function(event) {
    event.preventDefault();
    var active = '[data-tab="'+$(this).data('tab')+'"]';
    var parent = $(this).parents('.tab-wrapper');
    parent.find('.tab-label,.tab-content').removeClass('active');
    parent.find(active).addClass('active');
});

//modals
//modals
$('.modal-link').on('click', function(event) {
    var modal = $(this).attr('href');
    $(modal).arcticmodal({
        beforeOpen: function(data, el) {
            $('.arcticmodal-overlay, .arcticmodal-container').attr('data-modal', el.attr('id'));
        }
    });
    return false;
});

var currentOffset;
function scrollFixOn() {
    currentOffset = $(window).scrollTop();
    $('.scroll-fix').addClass('no-scroll');
    $('.scroll-fix__content').css('transform','translateY(-'+ currentOffset +'px)');
    no_scroll = false;
}

function scrollFixOff() {
    $('.scroll-fix').removeClass('no-scroll');
    $('.scroll-fix__content').removeAttr('style');
    $(window).scrollTop(currentOffset);
    no_scroll = true;
}

//toggler
$('body').on('click', '.toggler',function(event) {
    event.preventDefault();
    var selector = $(this).data('toggle-selector');
    if ($(this).hasClass('toggler--simple')) {
        var toggleSpeed = $(this).data('toggle-speed');
        $(selector).toggle(toggleSpeed);
        $(this).toggleClass('is_active');
    } else {
        var toggleTo = $(this).data('toggle-to');
        $(selector).toggleClass(toggleTo);
    }
});


//lazy images
$(function() {
    lazyInit();
});

function lazyInit() {
    $('.lazy').lazy({
        afterLoad: function(element) {
            element[0].parentNode.classList.add('img-loaded');
        }
    });
}

//activate submit button when agree with terms
$('body').on('change', 'input[type="checkbox"]', function (event) {
    if ($(this).prop('checked')) {
        $(this).parents('form').find('button[type="submit"]').removeAttr('disabled');
    } else {
        $(this).parents('form').find('button[type="submit"]').attr('disabled', '');
    }
});

function getScrollBarWidth () {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild (inner);

    document.body.appendChild (outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild (outer);
    return (w1 - w2);
}

var css_large = 1440;
var css_medium = 1024;
var css_small = 720;

function get_css_width(size) {
    switch(size) {
        case 'large':
            return css_large + 1;
        case 'medium':
            return css_medium + 1;
        case 'small':
            return css_small + 1;
    }
}
const scrollBarWidth = getScrollBarWidth();

function check_width(){
    let width = body.width() + scrollBarWidth;
    if (width > css_medium) {
        return 'is_large';
    } else {
        if (width > css_small && width <= css_medium){
            return 'is_medium';
        } else {
            if (width <= css_small) {
                return 'is_small';
            }
        }
    }
}
