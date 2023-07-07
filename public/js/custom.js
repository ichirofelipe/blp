$(function (){
    $(document).on('click','[data-modal]', function (){
        let target = $(this).data('target');

        $(target).addClass('show')
    })

    $(document).on('click','[data-close]', function (){
        let target = $(this).data('target');

        $(target).removeClass('show');
    })
});