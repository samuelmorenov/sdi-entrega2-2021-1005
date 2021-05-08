window.history.pushState("", "", "/cliente.html?w=chat");

var me = this;
//this.loadChat();
me.setInterval(function(){
    if(chatActive){
        me.loadChat() // this will run after every 1 seconds
    }
}, 1000);

function loadChat() {
    $.ajax({
        url: URLbase + "/chat/fromOffers/"+chat.offerId,
        type: "GET",
        data: {},
        dataType: 'json',
        headers: {"token": token},
        success: function (respuesta) {
            console.log("success");
            $("#tbody-chat").empty();
            if(respuesta == null || respuesta.length == 0){
                chatActive = false;
                $("#tbody-chat").empty();
            }else{
                messages = respuesta.messages;
                tableChat(messages);
            }
        },
        error: function (error) {
            chatActive = false;
            console.log("error");
            $("#tbody-chat").empty();
        }
    });
};

function tableChat(messages) {
    $("#tbody-chat").empty();
    let usuario = user;
    for (let i = 0; i < messages.length; i++) {
        let writerUser = messages[i].writerUser;
        let texto = messages[i].text;


        let fila = "";
        if (writerUser == usuario) {
            fila = "<td align=\"right\" style=\"background-color:#dcf8c6\">" + texto + "</td>";
        } else {
            fila = "<td>" + texto + "</td>";
        }
        $("#tbody-chat").append("<tr>" + fila + "</tr>");
    }
}

$('#button-chat').click(function () {
    var inputChat = $("#input-chat").val();
    if (inputChat == null || inputChat == "") {
        return;
    }
    var offerId = chat.offerId;

    $.ajax({
        url: URLbase + "/chat/add",
        type: "POST",
        data: {
            offerId: offerId,
            text: inputChat
        },
        dataType: 'json',
        headers: {"token": token},
        success: function (respuesta) {
            chatActive = true;
            $("#contenedor-principal").load("widgets/widget-chat.html");
        },
        error: function (error) {
            chatActive = false;
            Cookies.remove('token');
            $("#widget-login")
                .prepend("<div class='alert alert-danger'>Error de envio.</div>");
        }
    });
});