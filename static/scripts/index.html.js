console.log("inside js")


function CreateToc(){
    let $tocElement=$('#toc')
    let $idOfToc = $tocElement.attr('id');

    $('#blogContents').find('h1').each(function() {
        console.log("Found h1")
        
        var $item = $(this);
        var $id = $(this).attr('id');
        var li = $('<li/>');
        var a = $('<a/>', {text: $item.text(), href: '#' + $id, title: $item.text()});
        a.appendTo(li);
        $tocElement.append(li);

        /*
        Future work - you can think of adding a 'back' link. You need to disambiguate the link from the rest of the contents
         */
        /*
        let backtotop=$('<a/>',{text: "Back", href: '#' + $idOfToc, title: 'Top'})
        $item.after(backtotop)
        */
      });
}
function DocumentReady(){
    CreateToc()
}
$(document).ready(DocumentReady)
