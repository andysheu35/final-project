$(() => {
    setTimeout(function () {
        $(".loading-wrapper").fadeOut(500);
    }, 1000);
    $('#main').on('mouseenter', () => {

        $img = $('<img>').attr('src', './pcone/comment.png')
        $('#man').append($img)



    })
    $('#main').on('mouseleave', () => {

        $('#man').empty();


    })
    $('#main').on('click', () => {
        // 隨機產生一個1到52的數字
        $('#data').empty();
        // 產生 img 的 jQuery 物件在變數 $img

        // 產生 div 的 jQuery 物件在變數 $div
        $div = $('<div>').addClass('img-triangle2').addClass('img-things2')
        // 將 $img 插入到 $div 內
        $a = $('<a>').attr('href', `phone3.html`).attr('style', `width: 100%;height: 100%;display: block;`)

        // 將 $div 插入到網頁 id=data 的html element 裡面
        $div.append($a)
        $('#data').append($div)

    })
    $('#main').on('click', () => {
        // 隨機產生一個1到52的數字
        $('#data1').empty();
        // 產生 img 的 jQuery 物件在變數 $img

        // 產生 div 的 jQuery 物件在變數 $div
        $div = $('<div>').addClass('img-triangle3').addClass('img-things3')
        // 將 $img 插入到 $div 內
        $a = $('<a>').attr('href', `#`).attr('style', `width: 100%;height: 100%;display: block;`)

        // 將 $div 插入到網頁 id=data 的html element 裡面
        $div.append($a)
        $('#data1').append($div)

    })
    $('#data').on('click', () => {

        // 隨機產生一個1到52的數字
        $('#main').empty();
        // 產生 img 的 jQuery 物件在變數 $img

        $img = $('<img>').attr('src', './pcone/打掃.png')
        $('#main').append($img)



    })




})