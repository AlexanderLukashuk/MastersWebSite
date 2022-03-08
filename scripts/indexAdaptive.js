$(window).on('resize', function () {
    if ($(window).width() < 805) 
    {
        $(".page-help").css({
            "background-size": "336px 800px"
        });
    }
    else if ($(window).width() < 1400)
    {
        $(".page-help").css({
            "background-size": "536px 800px"
        });
        
        $(".main__title").css({
            "width": "300px"
        });

        // else
        // {
        //     $(".page-help").css({
        //         "background-size": "536px 800px"
        //     });
        // }
    }
    else if ($(window).width() > 1400)
    {
        $(".page-help").css({
            "background-size": "736px 800px"
        });

        $(".main__title").css({
            "width": "484px"
        });
    }
});