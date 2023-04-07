

   $(function(){
    let icon = document.getElementById('m-glass')
    let search_box = document.querySelector('.search-box')

    $('#m-glass').on('click', function(){
        $('.search-box').classList('show')
    })

    $(window).on('load', function(){
        $('#preloader').fadeout();
    })
    

   })
