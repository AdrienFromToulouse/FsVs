(function () {
  'use strict';
  angular.module('fruitsandvegApp', [
    'ngRoute',
    'ngResource',
    'ngSanitize',
    'ngCookies',
    'ngAnimate'
  ]).config([
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/followus', {
        templateUrl: 'views/followus.html',
        controller: 'MainCtrl'
      }).when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'MainCtrl'
      }).when('/records', {
        templateUrl: 'views/records.html',
        controller: 'MainCtrl'
      }).otherwise({ redirectTo: '/' });
      return $locationProvider.html5Mode(false);
    }
  ]);
}.call(this));
(function () {
  'use strict';
  angular.module('fruitsandvegApp').controller('GlobalCtrl', [
    '$scope',
    '$location',
    '$anchorScroll',
    '$timeout',
    function ($scope, $location, $anchorScroll, $timeout) {
      var scrollReset;
      scrollReset = function () {
        var $headerHeight, $targetBlock;
        $targetBlock = $('.main');
        $headerHeight = $('.main-hdr-nav').height();
        return $('html, body').animate({ scrollTop: -$($targetBlock).offset().top - $headerHeight + 1 }, 800);
      };
      $scope.$on('$routeChangeSuccess', function () {
        return $timeout(scrollReset, 700);
      });
      new Image().src = 'images/cover.jpg';
      new Image().src = 'images/cover-prog.jpg';
      $scope.getClass = function (path) {
        if ($location.path() === path) {
          return 'active';
        } else {
          return '';
        }
      };
      return $scope.sendAnalytics = function (sns) {
        return ga('send', 'event', 'button', 'click', 'share-btn', sns);
      };
    }
  ]);
}.call(this));
(function () {
  'use strict';
  angular.module('fruitsandvegApp').controller('MainCtrl', [
    '$scope',
    '$http',
    '$timeout',
    function ($scope, $http, $timeout) {
      var changeHeader, isUtubeloaded, loadUtubeFeed, setHeight, tweakHdrBackground;
      isUtubeloaded = false;
      loadUtubeFeed = function () {
        if (isUtubeloaded === false) {
          isUtubeloaded = true;
          return $http.get('https://gdata.youtube.com/feeds/api/users/FRUITSandVEGGIESza/uploads?v=2&alt=jsonc').success(function (data, status) {
            var ref, src;
            src = 'http://www.youtube.com/embed/' + data.data.items[0].id + '?wmode=transparent&amp';
            if (data.data.items[0].description.length > 60) {
              data.data.items[0].description = data.data.items[0].description.substring(0, 60) + '...';
            }
            if (data.data.items[1].description.length > 60) {
              data.data.items[1].description = data.data.items[1].description.substring(0, 60) + '...';
            }
            if (data.data.items[2].description.length > 60) {
              data.data.items[2].description = data.data.items[2].description.substring(0, 60) + '...';
            }
            $('#vid1').attr('src', src);
            $('#vid1').siblings().html(data.data.items[0].description);
            ref = 'http://www.youtube.com/watch?v=' + data.data.items[0].id;
            $('#vid1').siblings().append($('</br><a class="more" style="float:right;padding: 0 0 0 10px;color:#D70032;text-decoration: none;" href=' + ref + ' target="_blank"><span class="bgrd-txt-green icon icon-see-more more"></span></a>'));
            src = 'http://www.youtube.com/embed/' + data.data.items[1].id + '?wmode=transparent&amp';
            $('#vid2').attr('src', src);
            $('#vid2').siblings().html(data.data.items[1].description);
            ref = 'http://www.youtube.com/watch?v=' + data.data.items[1].id;
            $('#vid2').siblings().append($('</br><a class="more" style="float:right;padding: 0 0 0 10px;color:#D70032;text-decoration: none;" href=' + ref + ' target="_blank"><span class="bgrd-txt-blue icon icon-see-more more"></span></a>'));
            src = 'http://www.youtube.com/embed/' + data.data.items[2].id + '?wmode=transparent&amp';
            $('#vid3').attr('src', src);
            $('#vid3').siblings().html(data.data.items[2].description);
            ref = 'http://www.youtube.com/watch?v=' + data.data.items[2].id;
            return $('#vid3').siblings().append($('</br><a class="more" style="float:right;padding: 0 0 0 10px;color:#D70032;text-decoration: none;" href=' + ref + ' target="_blank"><span class="bgrd-txt-violet icon icon-see-more more"></span></a>'));
          }).error(function (data, status) {
            return console.log('ERROR UTUBE');
          });
        }
      };
      tweakHdrBackground = function () {
        var $image, I_HEIGHT, I_WIDTH, o, ratio, ratio_x, ratio_y, slideHeight, w_biggest, windowWidth;
        I_WIDTH = 1920;
        I_HEIGHT = 665;
        windowWidth = $(window).width();
        slideHeight = $(window).height() / 100 * 90;
        ratio_x = windowWidth / I_WIDTH;
        ratio_y = slideHeight / I_HEIGHT;
        w_biggest = ratio_x > ratio_y;
        ratio = w_biggest ? ratio_x : ratio_y;
        o = {
          width: w_biggest ? windowWidth : I_WIDTH,
          height: w_biggest ? I_HEIGHT * ratio : slideHeight
        };
        $image = $('.hdr-image');
        if ($image.data('align') === 'left') {
          return o.left = -Math.abs(windowWidth - o.width) / 3;
        } else {
          o.left = -Math.abs(windowWidth - o.width) / 1.4;
          o.top = -Math.abs(slideHeight - o.height) / 2;
          $('.hdr-image-wrap').css({ height: $(window).height() / 100 * 90 });
          $('.empty').css({ height: $(window).height() / 100 * 90 });
          return $image.css(o);
        }
      };
      setHeight = function () {
        var widthBlock;
        widthBlock = $('.cell-type1').width();
        if ($(window).width() > 624) {
          $('.content-cell').height(widthBlock);
        } else {
          $('.content-cell').css('height', 'auto');
        }
        widthBlock = $('.cell-type1-full').width();
        if ($(window).width() > 624) {
          return $('.content-cell-full').height(widthBlock);
        } else {
          return $('.content-cell-full').css('height', 'auto');
        }
      };
      changeHeader = function () {
        var bodyElement;
        bodyElement = $('body');
        return window.onscroll = function () {
          var globalHeader, headerHeight, isBackground, scrollingElement, scrollingElementPosition;
          globalHeader = document.querySelector('.main-hdr-nav');
          scrollingElement = document.querySelector('.main');
          scrollingElementPosition = scrollingElement.offsetTop;
          headerHeight = globalHeader.clientHeight;
          isBackground = void 0;
          if (window.pageYOffset >= scrollingElementPosition - headerHeight) {
            globalHeader.style.backgroundColor = '#141414';
            isBackground = true;
            loadUtubeFeed();
          } else if (window.pageYOffset < scrollingElementPosition - headerHeight) {
            globalHeader.style.backgroundColor = '';
            isBackground = false;
          }
          return $(window).resize(function () {
            return scrollingElementPosition = $('.main').offset();
          });
        };
      };
      tweakHdrBackground();
      setHeight();
      changeHeader();
      $(window).on('scroll', function () {
        return $('.main-hdr-nav').removeClass('opened');
      });
      $(window).bind('resize', tweakHdrBackground);
      $(window).resize(function () {
        return setHeight();
      });
      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        return $('html').removeClass('backgroundclip');
      }
    }
  ]);
}.call(this));
(function () {
  'use strict';
  angular.module('fruitsandvegApp').controller('FollowusCtrl', [
    '$scope',
    '$http',
    '$timeout',
    function ($scope, $http, $timeout) {
    }
  ]);
}.call(this));
(function () {
  'use strict';
  angular.module('fruitsandvegApp').controller('HeaderMenuBarCtrl', [
    '$scope',
    '$timeout',
    function ($scope, $timeout) {
      return $scope.unroll = function () {
        var $hdr;
        if ($('.mob-menu-icon').css('display') === 'block') {
          $hdr = $('.main-hdr-nav');
          if ($hdr.hasClass('opened')) {
            $hdr.removeClass('opened');
          } else {
            $hdr.addClass('opened');
          }
        }
      };
    }
  ]).directive('headerMenuBar', function () {
    return {
      restrict: 'E',
      scope: false,
      templateUrl: 'views/widgets/headerMenuBar.html',
      controller: 'HeaderMenuBarCtrl'
    };
  });
}.call(this));
(function () {
  'use strict';
  angular.module('fruitsandvegApp').directive('fullpic', [
    '$document',
    '$location',
    '$parse',
    function ($document, $location, $parse) {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          var createBox, filter, global;
          filter = $('#filter');
          global = $('#global');
          createBox = function (oImg) {
            var $image, box;
            box = $('#zoomimg');
            box.empty();
            $image = $('<img alt="" src="../images' + element.attr('data-imgsrc') + '" width="' + oImg.width + '" height="' + oImg.height + '">');
            $image.appendTo(box);
            box.css('width', $(window).width() + 'px');
            box.css('margin-top', '3%');
            box.css('margin-left', '0%');
            box.addClass('visible');
            return filter.addClass('visible');
          };
          element.click(function (event) {
            var fullImg;
            event.preventDefault();
            event.stopPropagation();
            ga('send', 'event', 'picture', 'click', 'image', element.attr('data-imgsrc'));
            fullImg = new Image();
            fullImg.onload = function () {
              var heightNew, natHeight, natWidth, oImg, ratioImg, widthNew, windowHeight, windowWidth;
              natWidth = this.width;
              natHeight = this.height;
              windowWidth = $(window).width();
              windowHeight = $(window).height();
              ratioImg = this.width / this.height;
              if (ratioImg < 1) {
                if (windowWidth < 640) {
                  widthNew = windowWidth - 10;
                  heightNew = widthNew / ratioImg;
                } else {
                  heightNew = windowHeight - windowHeight / 10;
                  widthNew = ratioImg * heightNew;
                  if (heightNew > windowHeight) {
                    heightNew = windowHeight - windowHeight / 2;
                    widthNew = ratioImg * heightNew;
                  }
                }
              } else if (ratioImg > 1) {
                widthNew = windowWidth - windowWidth / 10;
                heightNew = widthNew / ratioImg;
                if (heightNew > windowHeight) {
                  heightNew = windowHeight - windowHeight / 5;
                  widthNew = ratioImg * heightNew;
                }
              } else {
                widthNew = windowWidth - windowWidth / 10;
                heightNew = widthNew;
              }
              oImg = {
                width: widthNew,
                height: heightNew
              };
              return createBox(oImg);
            };
            return fullImg.src = '../images' + element.attr('data-imgsrc');
          });
          return $(document.body).click(function () {
            var box;
            filter = $('#filter');
            box = $('#zoomimg');
            if (box.hasClass('visible')) {
              box.removeClass('visible');
              return filter.removeClass('visible');
            }
          });
        }
      };
    }
  ]);
}.call(this));
(function () {
  'use strict';
  angular.module('fruitsandvegApp').directive('istouch', [
    '$document',
    '$location',
    '$parse',
    function ($document, $location, $parse) {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          var isMobile, isTouchDevice, ua;
          ua = navigator.userAgent;
          isTouchDevice = ua.match(/ipad|ipod|iphone/i);
          if (isTouchDevice) {
            $('#global').toggleClass('touch', true);
          } else {
            $('#global').toggleClass('touch', false);
            $('.hdr-image-wrap').css('position', 'fixed');
            $('.hdr-content').css('position', 'fixed');
          }
          isMobile = ua.match(/Android|BlackBerry|IEMobile|Opera Mini/i);
          if (isMobile === null) {
            return $('html').addClass('backgroundclip');
          }
        }
      };
    }
  ]);
}.call(this));