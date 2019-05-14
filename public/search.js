function search() {
    var options = $("#search option:selected");
    $.post("/search", {
        "_id": options.val()
    }, function(data) {
        if (data != null) {
            let html = "";
            $('#bookList').empty();
            for (let i = 0; i < data.length; i++) {
                html += "<li><a href= \"/booksProfile/" + data[i]["_id"] + "\"" + ">" + data[i]["Title"] + "</a ></li>";
            }
            $('#bookList').html(html);
        }
    })
}