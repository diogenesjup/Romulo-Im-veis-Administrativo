            // COMO FAZER A CHAMADA NO FORMULÁRIO onSubmit="return ajaxSubmit(this);"
            var ajaxSubmit = function(form) {
                // fetch where we want to submit the form to
                var url = $(form).attr('action');
                var flag = 9;

                var data = $(form).serializeArray();

                // setup the ajax request
                $.ajax({
                    url: url,
                    data: data,
                    dataType: 'json',
                    type:'POST'
                });

                swal("Obrigado!", 'Sua mensagem foi enviada com sucesso', "success");

                return false;
            }


            

          // SE O USUÁRIO FIZER UM GESTURE PARA A PARTE INFERIOR DA PÁGINA
          // VAMOS FECHAR A LAYER DO CARRO, CASO ELA ESTEJA ABERTA

          $("#swipeAviso").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {

              if(direction=="down"){

                //$(".modal-avisos .aviso").css("bottom","-300%");
                $(".modal-avisos").fadeOut(500);

              }

            }
          });
          
          $("#swipemeConfirmacao").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {

              if(direction=="down"){

                //$(".modal-confirmacao .confirmacao").css("bottom","-300%");
                $(".modal-confirmacao").fadeOut(500);

              }

            }
          });



            /* FUNÇÃO GERAL PARA EXIBIR OS AVISOS DO PÁGINA */
            function aviso(titulo,mensagem){

              console.log("%c COMEÇANDO FUNÇÃO PARA EXIBIR AVISO","background:#ff0000;color:#fff;");
              $(".modal-avisos").fadeIn(100);

              //$(".modal-avisos .aviso").css("bottom","0");


              // ALIMENTAR O HTML
              $(".modal-avisos .aviso h3").html(titulo);
              $(".modal-avisos .aviso p").html(mensagem+'<p style="padding-top:12px;padding-left:0px;"><button type="button" onclick="fecharAviso();" class="btn btn-primary">Ok</button></p>');
              
              //setTimeout("fecharAviso()",15000);


            }
            function fecharAviso(){
              
              //$(".modal-avisos .aviso").css("bottom","-300%");
              $(".modal-avisos").hide(0);

            }

            /* FUNÇÃO GERAL PARA EXIBIR CONFIRMAÇÕES DE AÇÕES */
            function confirmacao(titulo,mensagem,funcaoConfirmacao,textoConfirmacao){

              console.log("%c COMEÇANDO FUNÇÃO PARA EXIBIR AVISO","background:#ff0000;color:#fff;");
              $(".modal-confirmacao").fadeIn(100);

              //$(".modal-confirmacao .confirmacao").css("bottom","0");

              // ALIMENTAR O HTML
              $(".confirmacao h3").html(titulo);
              $(".confirmacao p").html(mensagem);

              $(".confirmacao #acaoConfirmacao").attr("onclick",funcaoConfirmacao+"; fecharConfirmacao();");
              if(textoConfirmacao!=""){
                $(".confirmacao #acaoConfirmacao").html(textoConfirmacao);
              }
              

            }
            function fecharConfirmacao(){

                 //$(".modal-confirmacao .confirmacao").css("bottom","-300%");
                 $(".modal-confirmacao").hide(0);

            }







// FORMULARIO FLUTUANTE onclick="ativarFormularioFlutuante('','')"
function ativarFormularioFlutuante(campoParaPreenchimento,labelPreenchimento){

   $(".input-flutuante-acessibilidade").fadeIn(500);
   //$(".barra-navegacao").hide(0);

   $("#fieldInputFlutuante").val($(campoParaPreenchimento).val());

   localStorage.setItem("campoParaPreenchimento",campoParaPreenchimento);

   $("#fieldInputFlutuante").focus();
   $('.input-flutuante-acessibilidade label').html(labelPreenchimento);

}

function validarFormularioFlutuante(event){

    event.preventDefault();

    var fieldInputFlutuante = $("#fieldInputFlutuante").val();
    
    $(".input-flutuante-acessibilidade").fadeOut(500);
    //$(".barra-navegacao").show(0);

    $(localStorage.getItem("campoParaPreenchimento")).val(fieldInputFlutuante);

}

// GARANTIR O FECHAMENTO DO CAMPO QUANDO A TELA VOLTAR AO NORMAL

$(document).ready(function() {
  var _originalSize = $(window).width() + $(window).height()
  $(window).resize(function() {
    if ($(window).width() + $(window).height() == _originalSize) {
      console.log("keyboard active "+_originalSize);
      $(".input-flutuante-acessibilidade").fadeOut(500);
      //$(".barra-navegacao").show(0);
    }
  });
});
     

      


     
     // PREVIEW DOS ARQUIVOS ENVIADOS VIA UPLOAD
     function showPreviewArquivos(input){

          console.log("QUANTIDADE DE IMAGENS: "+input.files.length);

          $(".preview-minhas-imagens").html("");

          for(var i = 0;i<input.files.length;i++){
              
              if (input.files[i]) {
                  var reader = new FileReader();
                  reader.onload = function (e) {
                  //console.log(e.target.result);
                  
                  $(".preview-minhas-imagens").append(`

                      <div style="border-radius:8px;background:url('${e.target.result}') #f2f2f2 no-repeat;background-size:cover;background-position:center center;width:100px;height:100px;position:relative;display:inline-block;margin-right:7.5px;margin-bottom:7.5px;">
                         &nbsp;
                      </div>

                  `);

              };
              reader.readAsDataURL(input.files[i]);
              }
              //else {
              //    var img = input.value;
              //    //console.log(img);
              //}

          }
          
          

     }


    /* PARA CADA DRAG AND DROP VAMOS REINICIAR AS FUNÇÕES */
    function processarDrag(){
      
      console.log("CAPTURANDO O DRAG AND DROP EVENT");

        $('.blank').each(function(index) {

          toAccept = $(this)[0].dataset.accept;
          // Resize spans to correct answer
          if ($(this).hasClass('resizable')) {
            answer = $('.draggable.' + toAccept);
            width = answer[0].scrollWidth;
            width = width - ($(this).css('padding-left').replace('px', '') * 2);
            $(this).css('width', width);

            //console.log("ANALISANDO PRIMEIRO TRECHO");
          
          }
          
          
          $(this).droppable({
            accept: '.' + toAccept,
            drop: function(event, ui) {
              $(this).append(ui.draggable);
              $(this).addClass('answered');

             
              //$(ui.draggable).draggable('destroy');
              $(this).droppable("destroy");
              
              //console.log("ANALISANDO O SEGUNDO TRECHO");

            }
          }); 
        });
        
        // RESETAR OS FORMULÁRIOS COM AS URL's
        $(".campos-das-imagens").remove();

        $('.caixa-preview-imagem-carregada').each(function(index) {
             
             var id = $(this).attr("data-id");
             var url = $(this).attr("data-url");

             $("#formAddImoveis").append(`

                <input type="hidden" name="galeriaImgensImoveis[]" class="campos-das-imagens" id="galeriaImgensImoveis${id}" value="${url}" />

            `);

        });    

    }

     // CODIGOS PARA UPLOAD DE ARQUIVOS LOCAIS
     function uploadLocal(){

         console.log("ENTRAMOS!");
         //var files = $(this)[0].files;
         $(".preview-minhas-imagens").html("");

         $("#modalUploadImages").modal("hide");
         aviso("Estamos enviando...","Estamos enviando suas imagens, aguarde um pouco.");
         
         /* Efetua o Upload */
         $('#fileForm').ajaxForm({
          dataType:  'json',
          success:   processJson 
        
         }).submit();

     }

     function processJson(dados) { 
            // 'data' is the json object returned from the server 
            console.log("%c RETORNO SOBRE O ENVIO DAS IMAGENS (UPLOAD):","background:#ff0000;color:#fff;");
            console.log(dados); 
            
            if(dados.erros===null){
            
                console.log("NENHUM ERRO!");
                fecharAviso();
                aviso("Imagens enviadas com sucesso!.","As imagens foram salvas.");

                // ENVIAR AS IMAGENS PARA A SESSAO DESEJADA

                if(localStorage.getItem("destinoImagens")=="imoveis"){
                  app.views.popularImagensUpload(dados);
                }

                if(localStorage.getItem("destinoImagens")=="slides"){
                  app.views.popularImagensUpload(dados);
                }

            }else{

              fecharAviso();
              aviso("Oops! Algo deu errado","Mensagme de erro:<br> "+'<div style="margin-top:20px;" class="alert alert-warning">'+dados.erros+'</div>');
              //$(".retorno-upload").html('<div class="alert alert-danger">'+dados.erros+'</div>');              

            }

            $('#fileForm').resetForm();

        }
      // CODIGOS PARA UPLOAD DE ARQUIVOS LOCAIS



      







