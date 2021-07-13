$(document).ready(function () {
    hoverItem();
    var slide = $("#js--slideBox");
    var item = $(".slide li.item");
    var lengthItem = item.length;
    var linkSlide = $("#js--linkItem");
    var color = $("#js--color");
    var nganhNghe = []
    for (let i = 0; i < lengthItem; i++) {
        nganhNghe.push($(".content:eq(" + i + ") h1").html());
    }
    for (let i = 1; i <= lengthItem; i++) {
        linkSlide.append('<li class="item-link link-' + i + '"></li>')
    }


    function checkLinkSlide() {
        let obj = $(".slide li.item.in.active");
        if (obj.length > 0) {
            let vtriLinnkSlide = $(".slide li.item.in.active").get(0).classList[1].slice(5);
            $(".item-link").removeClass("act");
            $("#js--linkItem .item-link:nth-child(" + vtriLinnkSlide + ")").addClass("act");
        }
    }
    checkLinkSlide();


    var local = [60, 30, 0, 30, 60];
    var local2 = [120, 90, 90, 120];


    for (let i = 1; i <= lengthItem; i++) {
        let b = y = 0;
        if (i <= 3) {
            b = 50 - Math.abs(50 * Math.sin((local[i - 1] / 180) * Math.PI));
        }
        else {
            b = 50 + Math.abs(50 * Math.sin((local[i - 1] / 180) * Math.PI));
        }
        y = 50 - Math.sqrt(2500 - ((b - 50) * (b - 50)));
        item.eq(i - 1).css({ "top": b + "%", "left": y + "%" });
    }


    slide.prepend('<li class="item item-4 out"></li><li class="item item-5 out"></li>').append('<li class="item item-1 out"></li><li class="item item-2 out"></li>');
    var outSlide = $("li.item.out");


    for (let i = 1; i <= 4; i++) {
        let b = y = 0;
        if (i <= 2) {
            b = 50 - Math.abs(50 * Math.sin((local2[i - 1] / 180) * Math.PI));
        }
        else {
            b = 50 + Math.abs(50 * Math.sin((local2[i - 1] / 180) * Math.PI));
        }
        y = 50 + Math.sqrt(2500 - ((b - 50) * (b - 50)));
        outSlide.eq(i - 1).css({ "top": b + "%", "left": y + "%" });
    }

    var imgIt = $(".it-img");
    function locateRotate(ro) {
        imgIt.addClass("move-out");
        setTimeout(() => {
            imgIt.addClass("d-none");
            var actNum = +$(".slide li.item.in").eq(2).get(0).classList[1].slice(5) - 1;
            imgIt.eq(actNum).removeClass("d-none");
        }, 300)
        setTimeout(() => {
            $(".it-img").eq(+$(".slide li.item.in").eq(2).get(0).classList[1].slice(5) - 1).removeClass("move-out")
        }, 500)
        if (ro < 0) {
            let len = Math.abs(ro);
            let out = $(".slide li.item.out");
            for (let i = out.length - 1; i >= out.length - len; i--) {
                out.eq(i).remove();
            }
            for (let i = 0; i < len; i++) {
                let cut = $(".slide li.item.in").eq(4 - i).get(0).classList[1].slice(5);
                if (len <= 1) {
                    cut = $(".slide li.item.in").eq(4 - i - 1).get(0).classList[1].slice(5);
                }
                slide.prepend('<li class="item item-' + cut + ' out">');
                vUp = vUp + 30;
                if (vUp >= 360) {
                    vUp = vUp - 360
                }
                vDown = vDown - 30;
                if (vDown < 0) {
                    vDown = 360 + vDown
                }
                let b = 0;
                let y = 0;
                if (vUp < 180) {
                    if (vUp < 90) {
                        b = 50 - Math.abs(50 * Math.sin((vUp / 180) * Math.PI));
                        y = 100 - (50 + Math.sqrt(2500 - ((b - 50) * (b - 50))));
                    } else {
                        b = 50 - Math.abs(50 * Math.sin((vUp / 180) * Math.PI));
                        y = 50 + Math.sqrt(2500 - ((b - 50) * (b - 50)));
                    }

                } else {
                    if (vUp > 270) {
                        b = 100 - (50 - Math.abs(50 * Math.sin((vUp / 180) * Math.PI)));
                        y = 50 - Math.sqrt(2500 - ((b - 50) * (b - 50)));
                    } else {
                        b = 50 + Math.abs(50 * Math.sin((vUp / 180) * Math.PI));
                        y = 50 + Math.sqrt(2500 - ((b - 50) * (b - 50)));
                    }
                }

                $("li.item.out").eq(0).css({ "top": b + "%", "left": y + "%" });
            }
        }
        if (ro > 0) {
            let len = ro;
            let out = $(".slide li.item.out");
            for (let i = 0; i < len; i++) {
                out.eq(i).remove();
            }
            for (let i = 0; i < len; i++) {
                let cut = $(".slide li.item.in").eq(i).get(0).classList[1].slice(5);
                if (len <= 1) { cut = $(".slide li.item.in").eq(i + 1).get(0).classList[1].slice(5); }
                slide.append('<li class="item item-' + cut + ' out">');

                vDown = vDown + 30;
                if (vDown >= 360) {
                    vDown = vDown - 360
                }
                vUp = vUp - 30;
                if (vUp < 0) {
                    vUp = 360 + vUp
                }
                let b = 0;
                let y = 0;
                if (vDown < 180) {
                    if (vDown < 90) {
                        b = 50 + Math.abs(50 * Math.sin((vDown / 180) * Math.PI));
                        y = 100 - (50 + Math.sqrt(2500 - ((b - 50) * (b - 50))));
                    } else {
                        b = 50 + Math.abs(50 * Math.sin((vDown / 180) * Math.PI));
                        y = 50 + Math.sqrt(2500 - ((b - 50) * (b - 50)));
                    }

                } else {
                    if (vDown > 270) {
                        b = 50 - Math.abs(50 * Math.sin((vDown / 180) * Math.PI));
                        y = 50 - Math.sqrt(2500 - ((b - 50) * (b - 50)));
                    } else {
                        b = 50 - Math.abs(50 * Math.sin((vDown / 180) * Math.PI));
                        y = 50 + Math.sqrt(2500 - ((b - 50) * (b - 50)));
                    }
                }
                $("li.item.out:last-child").css({ "top": b + "%", "left": y + "%" });
            }
        }
    }


    var vUp = 120;
    var vDown = 120;

    // add evnet
    $(".slide li.item.in").click(function (e) {
        if (!inAni) {
            inAni = true;
            roll(e.target)
        }
    });

    var inAni = false;

    // fs nhaanj self
    function roll(self) {
        let a = $(".slide li.item.in").index($(".active"));
        let remove = "cl-" + +$(".slide li.item.in.active").get(0).classList[1].slice(5);
        $(".slide li.item").removeClass("active");
        $(self).addClass("active");
        let vtri = $(".slide li.item.in").index(self);
        let ro = vtri - a;
        let c = +slide.get(0).style.transform.slice(7, -4);
        cleanList(ro, c);
        locateRotate(ro);
        checkLinkSlide();
        lastAni(remove);
        // console.log("vUp " + vUp + "   ,VvDown  " + vDown + "     ro " + ro);
    }


    function cleanList(ro, c) {
        $("p.it").css("display", "")
        color.removeClass("out").addClass("in");
        setTimeout(() => {
            slide.css("transform", "rotate(" + (c + (30 * ro)) + "deg)");
        }, 300);
        $(".slide li.item").removeClass("in out").addClass("out");
        let active = $(".slide li.item").index($(".active"));
        for (let i = active - 2; i <= active + 2; i++) {
            $(".slide li.item").eq(i).addClass("in").removeClass("out");
        }
    }

    // ddaay
    function lastAni(remove) {
        resetContent();
        setTimeout(() => {
            let add = "cl-" + +$(".slide li.item.in.active").get(0).classList[1].slice(5);
            color.removeClass(remove).addClass(add);
            setTimeout(() => { color.removeClass("in").addClass("out"); }, 300)
            setTimeout(() => { color.removeClass("out") }, 500);
        }, 300);
        content();
        changeText();
        changeColor();
        $(".slide li.item").off();
        $(".slide li.item.in").click(function (e) {
            if (!inAni) {
                inAni = true;
                roll(e.target)
            }
        });
        hoverItem();
        setTimeout(() => {
            inAni = false
        }, 500)
    }


    var lengthIn = $(".slide li.item.in").length;
    function changeText() {
        for (let i = 0; i < lengthIn; i++) {
            let num = +$(".slide li.item.in").eq(i).get(0).classList[1].slice(5) - 1;
            $("p.it").eq(i).html(nganhNghe[num])
        }
    }


    var bgColor = $(".js--bg-cl");
    var lineColor = $("main.home .round--onhand div.box");
    function changeColor() {
        let color = $(".slide li.item.in.active").css("backgroundColor");
        bgColor.css("background-color", color);
        lineColor.removeClass().addClass("box cl-" + $(".slide li.item.in.active").get(0).classList[1].slice(5))
    }

    function upp() {
        let remove = "cl-" + +$(".slide li.item.in.active").get(0).classList[1].slice(5);
        $(".slide li.item").removeClass("active");
        $(".slide li.item.in").eq(1).addClass("active");
        let ro = - 1;
        let c = +slide.get(0).style.transform.slice(7, -4);
        cleanList(ro, c);
        locateRotate(ro);
        checkLinkSlide();
        lastAni(remove);
        // console.log("vUp " + vUp + "   ,VvDown  " + vDown + "     ro " + ro);
    }


    $(".js--btnUp").click(function () {
        if (!inAni) {
            inAni = true;
            upp()
        }
    })


    function downn() {
        let remove = "cl-" + +$(".slide li.item.in.active").get(0).classList[1].slice(5);
        $(".slide li.item").removeClass("active");
        $(".slide li.item.in").eq(3).addClass("active");
        let ro = 1;
        let c = +slide.get(0).style.transform.slice(7, -4);
        cleanList(ro, c);
        locateRotate(ro);
        checkLinkSlide();
        lastAni(remove);
        // console.log("vUp " + vUp + "   ,VvDown  " + vDown + "     ro " + ro);
    }


    $(".js--btnDown").click(function () {
        if (!inAni) {
            inAni = true;
            downn()
        }
    })


    function hoverItem() {
        $(".slide li.item.in").hover(function () {
            // console.log($(".slide li.item.in").index($(this)))
            $("p.it").eq($(".slide li.item.in").index($(this))).css("opacity", "1").addClass("show")
        }, function () {
            $("p.it").css("opacity", "").removeClass("show")
        })
    }


    hoverItem()
    var closeBtn = $("#js--close-menu");
    var menu = $("nav.home");
    function closeMenu() {
        closeBtn.click(function () {
            menu.removeClass("act-menu")
        })
    }


    var boxContent = $(".home .content");
    function content() {
        boxContent.removeClass("act-content");
        setTimeout(function () {
            boxContent.addClass('d-none')
        }, 500);
        setTimeout(function () {
            boxContent.eq(+$(".slide li.item.in.active").get(0).classList[1].slice(5) - 1).removeClass("d-none").addClass("act-content")
        }, 500)
    }


    var actBtn = $("#js-act-menu");
    function actMenu() {
        actBtn.click(function () {
            menu.addClass("act-menu")
        })
    }


    actMenu();


    closeMenu();


    function resetContent() {
        $("#js-link, div.hand").removeClass("move-out");
        color.removeClass("move-out");
        actBtn.removeClass("d-none");
        $(".round--onhand div.js--bg-cl").addClass("d-none");
        back.addClass("d-none").removeClass("atc-back");
        $("div.content").removeClass("act-deco step-3");
        $("div.content .sapo").addClass("d-none").css({
            "opacity": "",
            "top": ""
        });
        $("div.content .btn").removeClass("move-down");
        $(".round--onhand div.js--bg-cl").addClass("move-out");
        setTimeout(() => {
            $("#js--bg-cl").removeClass("move-out");
            $(".round--onhand div.js--bg-cl").removeClass("d-none").addClass("move-out");
            $("div.round--onhand").removeClass("full");
        }, 500);
    }


    var boxLink = $("#js-link");
    var onHand = $(".round--onhand");
    var hand = $("div.hand");
    var back = $("#js--back");
    for (let i = 0; i <= lengthItem; i++) {
        $("button.btn.btn-" + i).click(function () {
            $("div.content-" + i).addClass("act-deco step-1");
            boxLink.addClass("move-out");
            actBtn.addClass("d-none");
            $("div.content-" + i + " .sapo").removeClass("d-none").css({
                "position": "relative",
                "opacity": 0,
                "top": "10%"
            });
            $(this).addClass("move-down");
            $("#js--bg-cl").addClass("move-out")
            color.addClass("move-out");
            hand.addClass("step-1");
            setTimeout(() => {
                $("div.content-" + i).removeClass("step-1").addClass("step-2");
                onHand.addClass("full");
                hand.removeClass("step-1").addClass("move-out");
                back.addClass("atc-back");
                setTimeout(() => {
                    $("div.content-" + i + " .sapo").css({
                        "opacity": 1,
                        "top": "0"
                    });
                    setTimeout(() => {
                        $("div.content-" + i).removeClass("step-2").addClass("step-3");
                        $(".round--onhand div.js--bg-cl").removeClass("move-out");
                        $("#js--bg-cl").addClass("move-out");
                        back.removeClass("d-none");
                    }, 400)
                }, 500)
            }, 500)
        })
    }


    back.click(function () {
        resetContent()
    })
    var showVertivaleErr = false;
    function verticalCheck() {
        if (window.innerWidth > window.innerHeight) {
            return true
        } else {
            return false
        }
    }
    function checkVertival() {
        if (!verticalCheck() && window.innerWidth > 996) {
            if (!showVertivaleErr) {
                $("body").append('<div id="js--err" class="position-fixed d-flex justify-content-center align-items-center" style="font-size:5vmin;top:0;left:0;right:0;bottom:0; background-color: white; z-index: 510000">Xoay màn hình để truy cập website</div>');
                showVertivaleErr = true;
            }
        } else {
            if (showVertivaleErr) {
                $("#js--err").remove();
                showVertivaleErr = false;
            }
        }
        if (verticalCheck() && window.innerWidth < 768) {
            if (!showVertivaleErr) {
                $("body").append('<div id="js--err" class="position-fixed d-flex justify-content-center align-items-center" style="font-size:5vmin;top:0;left:0;right:0;bottom:0; background-color: white; z-index: 510000">Xoay màn hình để truy cập website</div>');
                showVertivaleErr = true;
            }
        } else {
            if (showVertivaleErr) {
                $("#js--err").remove();
                showVertivaleErr = false;
            }
        }
    }
    checkVertival()
    $(window).resize(function () {
        // console.log("run")
        checkVertival()
    })

    function swipedetect(el, callback) {

        var touchsurface = el,
            swipedir,
            startX,
            startY,
            distX,
            distY,
            threshold = 80, //required min distance traveled to be considered swipe
            restraint = 100, // maximum distance allowed at the same time in perpendicular direction
            allowedTime = 300, // maximum time allowed to travel that distance
            elapsedTime,
            startTime,
            handleswipe = callback || function (swipedir) { }

        touchsurface.addEventListener('touchstart', function (e) {
            var touchobj = e.changedTouches[0]
            swipedir = 'none'
            dist = 0
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime() // record time when finger first makes contact with surface
            e.preventDefault()
        }, false)

        touchsurface.addEventListener('touchmove', function (e) {
            e.preventDefault() // prevent scrolling when inside DIV
        }, false)

        touchsurface.addEventListener('touchend', function (e) {
            var touchobj = e.changedTouches[0]
            distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
            distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
            elapsedTime = new Date().getTime() - startTime // get time elapsed
            if (elapsedTime <= allowedTime) { // first condition for awipe met
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
                    swipedir = (distX < 0)
                }
                else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met

                }
            }
            handleswipe(swipedir)
            e.preventDefault()
        }, false)
    }

    //USAGE:

    var el = document.getElementById('js--swipe');
    swipedetect(el, function (swipedir) {
        if (swipedir) {
            if (!inAni) {
                inAni = true;
                upp()
            }
        } else {
            if (!inAni) {
                inAni = true;
                downn()
            }
        }
    });
})