$(() => {
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
    setTimeout(function () {
        $(".loading-wrapper").fadeOut(500);
    }, 1000);
    $('#main').on('click', () => {
        $('#main').empty();
        $('#data').empty();
        $form = $('<form>').addClass('form')
        $div = $('<div>').addClass('form-group')
        $label = $('<label>').attr('for', `exampleInputEmail1`).attr('style', `COLOR:#d38a5a;
        FONT-SIZE: xx-large;`).text("電子信箱")
        $input = $('<input>').attr('type', `email`).attr('id', `exampleInputEmail1`).addClass('form-control').attr('aria-describedby', `emailHelp`)
        $div.append($label)
        $div.append($input)
        $form.append($div)
        $div1 = $('<div>').addClass('form-group')
        $label1 = $('<label>').attr('for', `exampleInputPassword1`).attr('style', `COLOR:#d38a5a;
        FONT-SIZE: xx-large;`).text("連絡電話")
        $input1 = $('<input>').attr('type', `password`).attr('id', `exampleInputPassword1`).addClass('form-control').attr('aria-describedby', `emailHelp`)
        $div1.append($label1)
        $div1.append($input1)
        $form.append($div1)
        $div2 = $('<div>').addClass('form-group').addClass('form-check')
        $label2 = $('<label>').attr('for', `exampleCheck1`).text("我不是機器人").addClass('form-check-label').attr('style', `color: red;
            font-size: x-large;`)
        $input2 = $('<input>').attr('type', `checkbox`).attr('id', `exampleCheck1`).addClass('form-check-input').attr('style', `margin-left: 5px;`)
        $div2.append($label2)
        $div2.append($input2)
        $button = $('<button>').text("Submit").addClass('btn btn-primary').attr('data-target', `#exampleModal`).attr('type', `button`).attr('data-toggle', `modal`)
        $form.append($div2)
        $form.append($button)
        $('#data').append($form)
        $img = $('<img>').attr('src', './pcone/松鼠抽獎.png')
        $('#main').append($img)

    })

    // $('#1').on('mouseenter', () => {

    //     $img = $('<img>').attr('src', './pcone/comment.png')
    //     $('#1').append($img)



    // })
    // $('#main').on('mouseleave', () => {

    //     $('#man').empty();


    // })
    // $('#main').on('click', () => {
    //     // 隨機產生一個1到52的數字
    //     $('#data').empty();
    //     // 產生 img 的 jQuery 物件在變數 $img

    //     // 產生 div 的 jQuery 物件在變數 $div
    //     $div = $('<div>').addClass('img-triangle2').addClass('img-things2')
    //     // 將 $img 插入到 $div 內
    //     $a = $('<a>').attr('href', `phone3.html`).attr('style', `width: 100%;height: 100%;display: block;`)

    //     // 將 $div 插入到網頁 id=data 的html element 裡面
    //     $div.append($a)
    //     $('#data').append($div)

    // })
    // $('#main').on('click', () => {
    //     // 隨機產生一個1到52的數字
    //     $('#data1').empty();
    //     // 產生 img 的 jQuery 物件在變數 $img

    //     // 產生 div 的 jQuery 物件在變數 $div
    //     $div = $('<div>').addClass('img-triangle3').addClass('img-things3')
    //     // 將 $img 插入到 $div 內
    //     $a = $('<a>').attr('href', `#`).attr('style', `width: 100%;height: 100%;display: block;`)

    //     // 將 $div 插入到網頁 id=data 的html element 裡面
    //     $div.append($a)
    //     $('#data1').append($div)

    // })
    // $('#data').on('click', () => {

    //     // 隨機產生一個1到52的數字
    //     $('#main').empty();
    //     // 產生 img 的 jQuery 物件在變數 $img

    //     $img = $('<img>').attr('src', './pcone/打掃.png')
    //     $('#main').append($img)



    // })




})