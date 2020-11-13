class Models{
    
    // TESTAR A DISPONIBILIDADE DA API
    testeApi(){

            // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"teste-api.php",
                  data:{token:app.token}
              
              })
              request.done(function (dados) {            

                  console.log("%c VERIFICAÇÃO DE DISPONIBILIDADE DE API","background:#ff0000;color:#fff;");
                  console.log(dados);

                  localStorage.setItem("dadosApi",JSON.stringify(dados));

              });
              request.fail(function (dados) {
                     
                   console.log("API NÃO DISPONÍVEL (apiAtiva)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }
    
    // PROC LOGIN
    procLogin(){

       $("#btnLoginEmailSenha").html("Carregando...");
       
       event.preventDefault();

       var loginUsuario = $("#loginUsuario").val();
       var loginSenha = $("#loginSenha").val();

            // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"login.php",
                  data:{token:app.token,tokenSms:app.tokenSms,loginUsuario:loginUsuario,loginSenha:loginSenha}
              
              })
              request.done(function (dados) {    

                  $("#btnLoginEmailSenha").html("Login");        

                  console.log("%c RETORNO DO LOGIN","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                     localStorage.setItem("dadosUsuario",dadosUsuario);
                     localStorage.setItem("perfilUsuario",dados.dados[0].tipo);
                     app.login(dados.id,dados.email,dadosUsuario);

                  
                  }else{
                     
                     $(".form-control").val("");
                     aviso("Oops! Login ou senha não encontrados","Verifique os dados inseridos e tente novamente!");
                     
                  }
                  
              });
              request.fail(function (dados) {

                   $("#btnLoginEmailSenha").html("Login");  
                     
                   console.log("API NÃO DISPONÍVEL (procLogin)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }

    // PROC LOGIN SMS
    procLoginSms(){

      $("#btnViewLogin").html("Carregando...");
       
       event.preventDefault();

       var loginUsuario = $("#loginUsuario").val();

            // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"token-sms-login.php",
                  data:{token:app.token,tokenSms:app.tokenSms,loginUsuario:loginUsuario}
              
              })
              request.done(function (dados) {        

                  $("#btnViewLogin").html("Próximo");    

                  console.log("%c RETORNO DO LOGIN","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                     localStorage.setItem("dadosUsuario",dadosUsuario);
                     localStorage.setItem("perfilUsuario",dados.dados[0].tipo);
                     //app.login(dados.id,dados.email,dadosUsuario);

                     app.verificarCodigoSms();
                  
                  }else{

                     $("#btnViewLogin").html("Próximo"); 

                     aviso("Número não encontrado!","Verifique se seu usuário tem permissão de admin, ou então, se o número que informou está correto.");
                     
                     //$(".form-control").val("");
                     //aviso("Oops! Login ou senha não encontrados","Verifique os dados inseridos e tente novamente!");
                     
                     // SE O CELULAR NAO ESTIVER CADASTRADO
                     // VAMOS DIRECIONAR O USUÁRIO PARA CONCLUIR O CADASTRO
                    
                     // SALVAR O CELULAR PARA O CADASTRO
                     //localStorage.setItem("celularCadastro",dados.celular);

                     //app.cadastro();

                  }
                  
              });
              request.fail(function (dados) {

                   $("#btnViewLogin").html("Próximo"); 
                     
                   console.log("API NÃO DISPONÍVEL (procLogin)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }

    // VERIFICAR O CÓDIGO SMS ENVIADO PELO USUÁRIO
    verificarCodigoSms(){

      $("#btnConfirmarCodigo").html("Processando...");

      event.preventDefault();

       var codigoSms = $("#codigoSms").val();

              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"verificar-sms.php",
                  data:{token:app.token,codigoSms:codigoSms}
              
              })
              request.done(function (dados) {         

                  $("#btnConfirmarCodigo").html("Confirmar código.");   

                  console.log("%c RETORNO DA VERIFICACAO DO CODIGO DE SMS","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                     localStorage.setItem("dadosUsuario",dadosUsuario);
                     app.login(dados.id,dados.email,dadosUsuario);
                  
                  }else{
                     
                     $(".form-control").val("");
                     aviso("Oops! Código incorreto","Verifique o código recebido e tente novamente. Se ainda tiver dificuldades, tente entrar com o e-mail e senha.");
                     
                  }
                  
              });
              request.fail(function (dados) {

                   $("#btnConfirmarCodigo").html("Confirmar código."); 
                     
                   console.log("API NÃO DISPONÍVEL (verificarCodigoSms)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }


    // PROC CADASTRO
    procCadastro(){

        $("#btnViewCadastro").html("Processando...");

        event.preventDefault();
         
        var cadastroNome = $("#cadastroNome").val();
        var cadastroEmail = $("#cadastroEmail").val();
        var cadastroSenha = $("#cadastroSenha").val();
        var cadastroCelular = $("#cadastroCelular").val();
  
                // INICIO CHAMADA AJAX
                var request = $.ajax({
  
                    method: "POST",
                    url: app.urlApi+"cadastro.php",
                    data:{token:app.token,cadastroCelular:cadastroCelular,cadastroNome:cadastroNome,cadastroEmail:cadastroEmail,cadastroSenha:cadastroSenha}
                
                })
                request.done(function (dados) {         

                    $("#btnViewCadastro").html("Cadastrar");   
  
                    console.log("%c RETORNO DO CADASTRO","background:#ff0000;color:#fff;");
                    console.log(dados);
  
                    var dadosUsuario = JSON.stringify(dados);
                    
                    if(dados.sucesso=="200"){
                       
                       localStorage.setItem("dadosUsuario",dadosUsuario);
  
                       // SE DEU TUDO CERTO, VAMOS LOGAR O USUÁRIO
                       app.login(dados.id,dados.email,dadosUsuario);
                    
                    }else{
                       
                       aviso("Oops! Esse e-mail já está cadastrado na nossa plataforma","Verifique os dados inseridos e tente novamente! Caso tenha esquecido sua senha, clique no link \"Esqueci Senha\" na tela de login.");
                    
                    }
                    
                });
                request.fail(function (dados) {

                     $("#btnViewCadastro").html("Cadastrar"); 
                       
                     console.log("API NÃO DISPONÍVEL (procCadastro)");
                     console.log(dados);
                     aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");
  
                });
                // FINAL CHAMADA AJAX
  
      }


    procResetSenha(){

              $("#btnViewResetarSenha").html("Processando...");

              event.preventDefault();
               
              var resetEmail = $("#resetEmail").val();

              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"reset-senha.php",
                  data:{token:app.token,resetEmail:resetEmail}
              
              })
              request.done(function (dados) {     

                  $("#btnViewResetarSenha").html("Resetar senha");       

                  console.log("%c RETORNO DO RESET","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                     app.viewLogin();
                     aviso("Deu certo! Senha resetada","Enviamos para o seu e-mails instruções sobre o reset de senha.");
                     
                  }else{
                     
                     aviso("Oops! E-mail não encontrado","Seu e-mail não foi localizado na plataforma. Verique as informações inseridas e tente novamente.");
                  
                  }
                  
              });
              request.fail(function (dados) {

                   $("#btnViewResetarSenha").html("Resetar senha");  
                     
                   console.log("API NÃO DISPONÍVEL (ResetDeSenha)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX


    }




    

/**
*  ------------------------------------------------------------------------------------------------
*
*
*   EDITAR ACESSO USUARIO PERFIL LOGADO
*
*
*  ------------------------------------------------------------------------------------------------
*/
    editarPerfil(){

      var idUsuario = localStorage.getItem("idUsuario");

      let xhr = new XMLHttpRequest();
       
      /* CONFIGURAÇÕES */
      //xhr.open('GET', app.urlApi+'admin-editarPerfil.php');
      xhr.open('POST', app.urlApi+'admin-editarPerfil.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;

      /*

        Então, quais são os estados possíveis de um requisição AJAX? Listaremos abaixo os estados:
        0: requisição ainda não iniciada
        1: conexão com o servidor estabelecida
        2: requisição recebida
        3: processando requisição
        4: requisição está concluída e a resposta está pronta
        O estado 4 é o que mais nos interessa, porque é nele que temos acesso à resposta enviada pelo servidor.

      */
      
      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR PERFIL");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    $(".placeholder").hide(0);
                    $(".form").fadeIn(500);

                    $("#editarPerfilNome").val(dados.dados[0].nome);
                    $("#editarPerfilEmail").val(dados.dados[0].email);
                    $("#editarPerfilCelular").val(dados.dados[0].celular);
                    $("#editarPerfilSenha").val(dados.dados[0].senha);
                    
                    // CARREGAR MASCARAS
                    app.helpers.carregarMascaras();

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }


            }else{
              
              console.log("SEM SUCESSO editarPerfil()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);


    }
    
    
    procEditarPerfil(){
        
        $("#btnEditarPerfil").html("Processando...");
        $(".form-control").attr("readonly","true");

        var editarPerfilNome = $("#editarPerfilNome").val();
        var editarPerfilEmail = $("#editarPerfilEmail").val();
        var editarPerfilCelular = $("#editarPerfilCelular").val();
        var editarPerfilSenha = $("#editarPerfilSenha").val();

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-procEditarPerfil.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&nome="+editarPerfilNome+
                     "&email="+editarPerfilEmail+
                     "&celular="+editarPerfilCelular+
                     "&senha="+editarPerfilSenha;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Deu certo!","As informações foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procEditarPerfil()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnEditarPerfil").html("Atualizar");
      $(".form-control").removeAttr("readonly");


    }







/**
*  ------------------------------------------------------------------------------------------------
*
*
*   ACESSOS ADMIN
*
*
*  ------------------------------------------------------------------------------------------------
*/
    acessosAdmin(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-acessos-admin.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS ACESSOS ADMIN:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO acessosAdmin()");
                console.log(JSON.parse(xhr.responseText));

              }

              var dados = JSON.parse(xhr.responseText);

              app.popularAcessosAdmin(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

      
    }

    procAdicionarAcessoAdmin(){

        $("#btnAddAcessoAdmin").html("Processando...");
        $(".form-control").attr("readonly","true");

        var acessoAdminNome = $("#acessoAdminNome").val();
        var acessoAdminEmail = $("#acessoAdminEmail").val();
        var acessoAdminCelular = $("#acessoAdminCelular").val();
        var acessoAdminSenha = $("#acessoAdminSenha").val();

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-add-acesso-admin.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&nome="+acessoAdminNome+
                     "&email="+acessoAdminEmail+
                     "&celular="+acessoAdminCelular+
                     "&senha="+acessoAdminSenha;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("usuário adicionado com sucesso!","O novo usuário foi cadastrado.");
              
              // VOLTAR PARA TODOS OS USUÁRIOS
              app.acessosAdmin();


            }else{
              
              console.log("SEM SUCESSO procEditarPerfil()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddAcessoAdmin").html("Adicionar");
      $(".form-control").removeAttr("readonly");



    }

    editarAcessoAdmin(id){


      var idUsuario = id;

      let xhr = new XMLHttpRequest();
       
      /* CONFIGURAÇÕES */
      //xhr.open('GET', app.urlApi+'admin-editarPerfil.php');
      xhr.open('POST', app.urlApi+'admin-editarPerfil.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;

      /*

        Então, quais são os estados possíveis de um requisição AJAX? Listaremos abaixo os estados:
        0: requisição ainda não iniciada
        1: conexão com o servidor estabelecida
        2: requisição recebida
        3: processando requisição
        4: requisição está concluída e a resposta está pronta
        O estado 4 é o que mais nos interessa, porque é nele que temos acesso à resposta enviada pelo servidor.

      */
      
      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR PERFIL DE UM USUARIO");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    $(".placeholder").hide(0);
                    $(".form").fadeIn(500);
                    
                    $("#acessoAdminEditarId").val(id);

                    $("#acessoAdminEditarNome").val(dados.dados[0].nome);
                    $("#acessoAdminEditarEmail").val(dados.dados[0].email);
                    $("#acessoAdminEditarCelular").val(dados.dados[0].celular);
                    $("#acessoAdminEditarSenha").val(dados.dados[0].senha);
                    
                    // CARREGAR MASCARAS
                    app.helpers.carregarMascaras();

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO editarAcessoAdmin()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);

    }

    procEditarAcessoAdmin(){

        $("#btnEditarAcessoAdmin").html("Processando...");
        $(".form-control").attr("readonly","true");

        var idUsuario = $("#acessoAdminEditarId").val();

        var acessoAdminEditarNome = $("#acessoAdminEditarNome").val();
        var acessoAdminEditarEmail = $("#acessoAdminEditarEmail").val();
        var acessoAdminEditarCelular = $("#acessoAdminEditarCelular").val();
        var acessoAdminEditarSenha = $("#acessoAdminEditarSenha").val();
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-procEditarPerfilAcessoAdmin.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&nome="+acessoAdminEditarNome+
                     "&email="+acessoAdminEditarEmail+
                     "&celular="+acessoAdminEditarCelular+
                     "&senha="+acessoAdminEditarSenha;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Deu certo!","As informações foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procEditarPerfil()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnEditarAcessoAdmin").html("Atualizar");
      $(".form-control").removeAttr("readonly");
       
    }

    removerAcessoAdmin(id){

      // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-remover-acesso-admin.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&id="+id;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS REMOVER ACESSO ADMIN:");
                console.log(JSON.parse(xhr.responseText));
                $("#linha"+id).fadeOut("500");
                aviso("Deu certo!","Usuário foi removido com sucesso");

              }else{
                
                console.log("SEM SUCESSO removerAcessoAdmin()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Tente novamente em alguns minutos");

              }

              
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);



    }





/**
*  ------------------------------------------------------------------------------------------------
*
*
*   CLIENTES
*
*
*  ------------------------------------------------------------------------------------------------
*/
    clientes(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-clientes.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS CLIENTES:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO clientes()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);

              app.popularClientes(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

      
    }

    adicionarClientesListaCorretores(){

       // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-lista-corretores.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS CORRETORES CLIENTES:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO adicionarClientesListaCorretores()");
                console.log(JSON.parse(xhr.responseText));

              }

              var dados = JSON.parse(xhr.responseText);

              app.popularClientesListaCorretores(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

    }

    procAdicionarClientes(){

        $("#btnAddClientes").html("Processando...");
        $(".form-control").attr("readonly","true");

        var clientesNome = $("#clientesNome").val();
        var clientesCpf = $("#clientesCpf").val();
        var clientesCnpj = $("clientesCnpj").val();
        var clientesEmail = $("#clientesEmail").val();
        var clientesCelular = $("#clientesCelular").val();
        var clientesTelefone = $("#clientesTelefone").val();
        var clientesSenha = $("#clientesSenha").val();
        var clientesEndereco = $("#clientesEndereco").val();
        var clientesBairro = $("#clientesBairro").val();
        var clientesCidade = $("#clientesCidade").val();
        var clientesEstado = $("#clientesEstado").val();
        var clientesCEP = $("#clientesCEP").val();
        var clientesCorretor = $("#clientesCorretor").val();
        var clientesObservacoes = $("#clientesObservacoes").val();

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-add-cliente.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&nome="+clientesNome+
                     "&cpf="+clientesCpf+
                     "&cnpj="+clientesCnpj+
                     "&email="+clientesEmail+
                     "&celular="+clientesCelular+
                     "&telefone="+clientesTelefone+
                     "&senha="+clientesSenha+
                     "&endereco="+clientesEndereco+
                     "&cep="+clientesCEP+
                     "&bairro="+clientesBairro+
                     "&cidade="+clientesCidade+
                     "&estado="+clientesEstado+
                     "&id_corretor="+clientesCorretor+
                     "&observacoes="+clientesObservacoes;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Cliente adicionado com sucesso!","O novo cliente foi cadastrado.");
              
              // VOLTAR PARA TODOS OS USUÁRIOS
              app.clientes();

            }else{
              
              console.log("SEM SUCESSO procAdicionarClientes()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddClientes").html("Adicionar");
      $(".form-control").removeAttr("readonly");



    }

    editarClientes(id){

      var idUsuario = id;

      let xhr = new XMLHttpRequest();
      
      // JÁ PRÉ CARREGAR A LISTA DE CORRETORES
      this.adicionarClientesListaCorretores();
       
      /* CONFIGURAÇÕES */
      //xhr.open('GET', app.urlApi+'admin-editarPerfil.php');
      xhr.open('POST', app.urlApi+'admin-editar-cliente.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;

      /*

        Então, quais são os estados possíveis de um requisição AJAX? Listaremos abaixo os estados:
        0: requisição ainda não iniciada
        1: conexão com o servidor estabelecida
        2: requisição recebida
        3: processando requisição
        4: requisição está concluída e a resposta está pronta
        O estado 4 é o que mais nos interessa, porque é nele que temos acesso à resposta enviada pelo servidor.

      */
      
      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR PERFIL DE UM USUARIO");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    $(".placeholder").hide(0);
                    $(".form").fadeIn(500);
                    
                    $("#clientesId").val(id);

                    $("#clientesNome").val(dados.dados[0].nome);
                    $("#clientesCpf").val(dados.dados[0].cpf);
                    $("#clientesCnpj").val(dados.dados[0].cnpj);
                    $("#clientesEmail").val(dados.dados[0].email);
                    $("#clientesCelular").val(dados.dados[0].celular);
                    $("#clientesTelefone").val(dados.dados[0].telefone);
                    $("#clientesSenha").val(dados.dados[0].senha);
                    $("#clientesEndereco").val(dados.dados[0].endereco);
                    $("#clientesBairro").val(dados.dados[0].bairro);
                    $("#clientesCidade").val(dados.dados[0].cidade);
                    $("#clientesEstado").val(dados.dados[0].estado);
                    $("#clientesCEP").val(dados.dados[0].cep);
                    $("#clientesCorretor").val(dados.dados[0].id_corretor);
                    $("#clientesObservacoes").val(dados.dados[0].observacoes);
                    
                    // CARREGAR MASCARAS
                    app.helpers.carregarMascaras();

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO editarClientes()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);

    }

    procEditarClientes(){

        $("#btnEditarClientes").html("Processando...");
        $(".form-control").attr("readonly","true");

        var idUsuario = $("#clientesId").val();

        var clientesNome = $("#clientesNome").val();
        var clientesCpf = $("#clientesCpf").val();
        var clientesCnpj = $("clientesCnpj").val();
        var clientesEmail = $("#clientesEmail").val();
        var clientesCelular = $("#clientesCelular").val();
        var clientesTelefone = $("#clientesTelefone").val();
        var clientesSenha = $("#clientesSenha").val();
        var clientesEndereco = $("#clientesEndereco").val();
        var clientesBairro = $("#clientesBairro").val();
        var clientesCidade = $("#clientesCidade").val();
        var clientesEstado = $("#clientesEstado").val();
        var clientesCEP = $("#clientesCEP").val();
        var clientesCorretor = $("#clientesCorretor").val();
        var clientesObservacoes = $("#clientesObservacoes").val();
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-proc-editar-clientes.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&nome="+clientesNome+
                     "&cpf="+clientesCpf+
                     "&cnpj="+clientesCnpj+
                     "&email="+clientesEmail+
                     "&celular="+clientesCelular+
                     "&telefone="+clientesTelefone+
                     "&senha="+clientesSenha+
                     "&endereco="+clientesEndereco+
                     "&cep="+clientesCEP+
                     "&bairro="+clientesBairro+
                     "&cidade="+clientesCidade+
                     "&estado="+clientesEstado+
                     "&id_corretor="+clientesCorretor+
                     "&observacoes="+clientesObservacoes;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Deu certo!","As informações foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procEditarClientes()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnEditarClientes").html("Atualizar");
      $(".form-control").removeAttr("readonly");
       
    }

    removerClientes(id){

      // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-remover-clientes.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&id="+id;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS REMOVER CLIENTE:");
                console.log(JSON.parse(xhr.responseText));
                $("#linha"+id).fadeOut("500");
                aviso("Deu certo!","Cliente foi removido com sucesso");

              }else{
                
                console.log("SEM SUCESSO removerClientes()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Tente novamente em alguns minutos");

              }

            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);


    }






/**
*  ------------------------------------------------------------------------------------------------
*
*
*   CORRETORES
*
*
*  ------------------------------------------------------------------------------------------------
*/
    corretores(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-corretores.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS CORRETORES:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO corretores()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);

              app.popularCorretores(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

      
    }

    procAdicionarCorretores(){

        $("#btnAddCorretores").html("Processando...");
        $(".form-control").attr("readonly","true");

        var clientesNome = $("#clientesNome").val();
        var clientesCpf = $("#clientesCpf").val();
        var clientesCnpj = $("clientesCnpj").val();
        var clientesEmail = $("#clientesEmail").val();
        var clientesCelular = $("#clientesCelular").val();
        var clientesTelefone = $("#clientesTelefone").val();
        var clientesSenha = $("#clientesSenha").val();
        var clientesEndereco = $("#clientesEndereco").val();
        var clientesBairro = $("#clientesBairro").val();
        var clientesCidade = $("#clientesCidade").val();
        var clientesEstado = $("#clientesEstado").val();
        var clientesCEP = $("#clientesCEP").val();
        var clientesCorretor = $("#clientesCorretor").val(); // CRECI
        var clientesObservacoes = $("#clientesObservacoes").val();

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-add-corretor.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&nome="+clientesNome+
                     "&cpf="+clientesCpf+
                     "&cnpj="+clientesCnpj+
                     "&email="+clientesEmail+
                     "&celular="+clientesCelular+
                     "&telefone="+clientesTelefone+
                     "&senha="+clientesSenha+
                     "&endereco="+clientesEndereco+
                     "&cep="+clientesCEP+
                     "&bairro="+clientesBairro+
                     "&cidade="+clientesCidade+
                     "&estado="+clientesEstado+
                     "&id_corretor="+clientesCorretor+
                     "&observacoes="+clientesObservacoes;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Corretor adicionado com sucesso!","O novo corretor foi cadastrado.");
              
              // VOLTAR PARA TODOS OS USUÁRIOS
              app.corretores();

            }else{
              
              console.log("SEM SUCESSO procAdicionarCorretor()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddCorretor").html("Adicionar");
      $(".form-control").removeAttr("readonly");



    }

    editarCorretores(id){

      var idUsuario = id;

      let xhr = new XMLHttpRequest();
       
      /* CONFIGURAÇÕES */
      //xhr.open('GET', app.urlApi+'admin-editarPerfil.php');
      xhr.open('POST', app.urlApi+'admin-editar-corretor.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;

      /*

        Então, quais são os estados possíveis de um requisição AJAX? Listaremos abaixo os estados:
        0: requisição ainda não iniciada
        1: conexão com o servidor estabelecida
        2: requisição recebida
        3: processando requisição
        4: requisição está concluída e a resposta está pronta
        O estado 4 é o que mais nos interessa, porque é nele que temos acesso à resposta enviada pelo servidor.

      */
      
      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR CORRETOR");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    $(".placeholder").hide(0);
                    $(".form").fadeIn(500);
                    
                    $("#clientesId").val(id);

                    $("#clientesNome").val(dados.dados[0].nome);
                    $("#clientesCpf").val(dados.dados[0].cpf);
                    $("#clientesCnpj").val(dados.dados[0].cnpj);
                    $("#clientesEmail").val(dados.dados[0].email);
                    $("#clientesCelular").val(dados.dados[0].celular);
                    $("#clientesTelefone").val(dados.dados[0].telefone);
                    $("#clientesSenha").val(dados.dados[0].senha);
                    $("#clientesEndereco").val(dados.dados[0].endereco);
                    $("#clientesBairro").val(dados.dados[0].bairro);
                    $("#clientesCidade").val(dados.dados[0].cidade);
                    $("#clientesEstado").val(dados.dados[0].estado);
                    $("#clientesCEP").val(dados.dados[0].cep);
                    $("#clientesCorretor").val(dados.dados[0].corretor_creci); // CRECI
                    $("#clientesObservacoes").val(dados.dados[0].observacoes);
                    
                    // CARREGAR MASCARAS
                    app.helpers.carregarMascaras();

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO editarCorretores()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);

    }

    procEditarCorretores(){

        $("#btnEditarCorretores").html("Processando...");
        $(".form-control").attr("readonly","true");

        var idUsuario = $("#clientesId").val();

        var clientesNome = $("#clientesNome").val();
        var clientesCpf = $("#clientesCpf").val();
        var clientesCnpj = $("clientesCnpj").val();
        var clientesEmail = $("#clientesEmail").val();
        var clientesCelular = $("#clientesCelular").val();
        var clientesTelefone = $("#clientesTelefone").val();
        var clientesSenha = $("#clientesSenha").val();
        var clientesEndereco = $("#clientesEndereco").val();
        var clientesBairro = $("#clientesBairro").val();
        var clientesCidade = $("#clientesCidade").val();
        var clientesEstado = $("#clientesEstado").val();
        var clientesCEP = $("#clientesCEP").val();
        var clientesCorretor = $("#clientesCorretor").val(); // CRECI
        var clientesObservacoes = $("#clientesObservacoes").val();
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-proc-editar-corretores.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&nome="+clientesNome+
                     "&cpf="+clientesCpf+
                     "&cnpj="+clientesCnpj+
                     "&email="+clientesEmail+
                     "&celular="+clientesCelular+
                     "&telefone="+clientesTelefone+
                     "&senha="+clientesSenha+
                     "&endereco="+clientesEndereco+
                     "&cep="+clientesCEP+
                     "&bairro="+clientesBairro+
                     "&cidade="+clientesCidade+
                     "&estado="+clientesEstado+
                     "&clientesCorretor="+clientesCorretor+
                     "&observacoes="+clientesObservacoes;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Deu certo!","As informações foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procEditarCorretores()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnEditarCorretores").html("Atualizar");
      $(".form-control").removeAttr("readonly");
       
    }

    removerCorretores(id){

      // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-remover-corretores.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&id="+id;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS REMOVER CORRETOR:");
                console.log(JSON.parse(xhr.responseText));
                $("#linha"+id).fadeOut("500");
                aviso("Deu certo!","Corretor foi removido com sucesso");

              }else{
                
                console.log("SEM SUCESSO removerCorretores()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Tente novamente em alguns minutos");

              }

            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);


    }






/**
*  ------------------------------------------------------------------------------------------------
*
*
*   TIPO IMOVEL
*
*
*  ------------------------------------------------------------------------------------------------
*/
    tipoImoveis(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-tipoImoveis.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS TIPO IMOVEIS:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO tipoImoveis()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);

              app.popularTipoImoveis(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

    }
    
    // CARREGAR OUTROS TIPOS DE IMÓVEIS PARA CRIAR A LISTA DE RELAÇÃO
    adicionarTipoImoveis(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-tipoImoveis.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS TIPO IMOVEIS:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO tipoImoveis()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);

              app.views.popularTipoImoveisParaLigacao(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

    }

    procAdicionarTipoImoveis(){

        $("#btnAddItem").html("Processando...");
        $(".form-control").attr("readonly","true");

        var tipoImoveisNome = $("#tipoImoveisNome").val();
        var tipoImoveisFiltro = $("#tipoImoveisFiltro").val();
        var tipoImoveisLigacao = $("#tipoImoveisLigacao").val();
        var tipoImoveisIdLigacao = $("#tipoImoveisIdLigacao").val();
        var tipoImoveisLigacaoObrigatorio = $("#tipoImoveisLigacaoObrigatorio").val();

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-add-tipoImoveis.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&tipoImoveisNome="+tipoImoveisNome+
                     "&tipoImoveisFiltro="+tipoImoveisFiltro+
                     "&tipoImoveisLigacao="+tipoImoveisLigacao+
                     "&tipoImoveisIdLigacao="+tipoImoveisIdLigacao+
                     "&tipoImoveisLigacaoObrigatorio="+tipoImoveisLigacaoObrigatorio;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Tipo de imóvel adicionado com sucesso!","O novo tipo de imóvel foi cadastrado.");
              
              // VOLTAR PARA TODOS OS USUÁRIOS
              app.tipoImoveis();

            }else{
              
              console.log("SEM SUCESSO procAdicionarTipoImoveis()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddItem").html("Adicionar");
      $(".form-control").removeAttr("readonly");



    }

    editarTipoImoveis(id){

      var idUsuario = id;

      let xhr = new XMLHttpRequest();
       
      /* CONFIGURAÇÕES */
      //xhr.open('GET', app.urlApi+'admin-editarPerfil.php');
      xhr.open('POST', app.urlApi+'admin-editar-tipoImoveis.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;

      /*

        Então, quais são os estados possíveis de um requisição AJAX? Listaremos abaixo os estados:
        0: requisição ainda não iniciada
        1: conexão com o servidor estabelecida
        2: requisição recebida
        3: processando requisição
        4: requisição está concluída e a resposta está pronta
        O estado 4 é o que mais nos interessa, porque é nele que temos acesso à resposta enviada pelo servidor.

      */
      
      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR TIPO IMÓVEL");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    $(".placeholder").hide(0);
                    $(".form").fadeIn(500);
                    
                    $("#tipoImoveisId").val(id);
                    
                    $("#tipoImoveisNome").val(dados.imovel_tipo[0].nome);
                    $("#tipoImoveisFiltro").val(dados.imovel_tipo[0].visivel_filtro);
                    
                    if(dados.imovel_tipo[0].id_ligacao!=""){
                       $("#tipoImoveisLigacao").val("sim");
                    }else{
                       $("#tipoImoveisLigacao").val("nao");
                    }
                    
                    $("#tipoImoveisIdLigacao").val(dados.imovel_tipo[0].id_ligacao);
                    $("#tipoImoveisLigacaoObrigatorio").val(dados.imovel_tipo[0].obrigatorio_ligacao);

                    console.log("DEPURAÇÃO: "+dados.imovel_tipo[0].id_ligacao,"background:#fff000;color:#000;");

                    // CARREGAR MASCARAS
                    app.helpers.carregarMascaras();

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO editarTipoImoveis()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);

    }

    procEditarTipoImoveis(){

        $("#btnEditarItem").html("Processando...");
        $(".form-control").attr("readonly","true");

        var idUsuario = $("#tipoImoveisId").val();

        var tipoImoveisNome = $("#tipoImoveisNome").val();
        var tipoImoveisFiltro = $("#tipoImoveisFiltro").val();
        var tipoImoveisLigacao = $("#tipoImoveisLigacao").val();
        var tipoImoveisIdLigacao = $("#tipoImoveisIdLigacao").val();
        var tipoImoveisLigacaoObrigatorio = $("#tipoImoveisLigacaoObrigatorio").val();
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-proc-editar-tipoImoveis.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&tipoImoveisNome="+tipoImoveisNome+
                     "&tipoImoveisFiltro="+tipoImoveisFiltro+
                     "&tipoImoveisLigacao="+tipoImoveisLigacao+
                     "&tipoImoveisIdLigacao="+tipoImoveisIdLigacao+
                     "&tipoImoveisLigacaoObrigatorio="+tipoImoveisLigacaoObrigatorio;
                     
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Deu certo!","As informações foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procEditarTipoImoveis()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnEditarItem").html("Atualizar");
      $(".form-control").removeAttr("readonly");
       
    }

    removerTipoImoveis(id){

      // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-remover-tipoImoveis.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&id="+id;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS REMOVER TIPO DE IMÓVEL:");
                console.log(JSON.parse(xhr.responseText));
                $("#linha"+id).fadeOut("500");
                aviso("Deu certo!","Tipo imóvel foi removido com sucesso");

              }else{
                
                console.log("SEM SUCESSO removerTipoImoveis()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Tente novamente em alguns minutos");

              }

            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);


    }
    
    // CAMPOS DESSE TIPO DE IMÓVEL
    CamposImoveis(idTipoImovel){

      var idUsuario = idTipoImovel;
      
      console.log("ID DO TIPO DE IMÓVEL QUE VAMOS RECUPERAR OS CAMPOS: "+idUsuario);

      let xhr = new XMLHttpRequest();
       
      /* CONFIGURAÇÕES */
      //xhr.open('GET', app.urlApi+'admin-editarPerfil.php');
      xhr.open('POST', app.urlApi+'admin-recuperar-campos-tipoImoveis.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;

      /*

        Então, quais são os estados possíveis de um requisição AJAX? Listaremos abaixo os estados:
        0: requisição ainda não iniciada
        1: conexão com o servidor estabelecida
        2: requisição recebida
        3: processando requisição
        4: requisição está concluída e a resposta está pronta
        O estado 4 é o que mais nos interessa, porque é nele que temos acesso à resposta enviada pelo servidor.

      */
      
      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR TIPO IMÓVEL");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){
                      
                      // ENVIAR OS CAMPOS PARA O CONTROLLER
                      app.appendCadastradosCamposImoveis(dados.campos);

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO CamposImoveis()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);

       

    }
    
    // SALVAR OS CAMPOS DO TIPO DE IMÓVEL
    procEditarCamposTipoImoveis(dados){

      let xhr = new XMLHttpRequest();
       
      xhr.open('POST', app.urlApi+'admin-salvar-campos-tipoImoveis.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = dados+"&token="+app.token;

      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR CAMPOS DO TIPO DE IMÓVEL");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){
                      
                      aviso("Deu certo! Campos atualizados","Os campos do tipo de imóvel foram atualizados com sucesso.");
                      
                  }else{
                    
                      aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO procEditarCamposTipoImoveis()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      xhr.send(params);
        
    }








/**
*  ------------------------------------------------------------------------------------------------
*
*
*   IMÓVEIS
*
*
*  ------------------------------------------------------------------------------------------------
*/
    imoveis(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-imoveis.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS IMOVEIS:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO imoveis()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);

              app.popularImoveis(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

    }
    
    // CARREGAR OUTROS TIPOS DE IMÓVEIS PARA CRIAR A LISTA DE RELAÇÃO
    adicionarImoveis(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-tipoImoveis.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS TIPO IMOVEIS:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO adicionarImoveis()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);
              
              // AQUI É ONDE ENVIARESMOS OS TIPOS
              app.views.popularTipoImoveisParaCadastroImoveis(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

    }

    buscarCamposTipoImoveis(idTipoImovel){
       
       // LIMPAR O HTML ANTES DE IMPRIMIR OS CAMPOS
       $("#appendCamposCadastroImoveis").html("");

       // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-busca-campos-tipo-imovel.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&idTipoImovel="+idTipoImovel;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS CAMPOS DO TIPO DE IMOVEL:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO buscarCamposTipoImoveis()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);
              
              // AQUI É ONDE ENVIAREMOS OS TIPOS
              app.views.popularCampos(dados);
             
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);


    }




    buscaCep(cep){
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('GET','https://viacep.com.br/ws/'+cep+'/json/',true);
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS BUSCA CEP:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO buscaCep()");
                console.log(JSON.parse(xhr.responseText));

              }

              var dados = JSON.parse(xhr.responseText);
              
              // AQUI É ONDE ENVIAREMOS O RETORNO DO ENDEREÇO
              app.views.popularCamposEndereco(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send();

    }


    nextRef(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-next-id.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS CAMPOS NEXT REF (ID):");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO nextRef()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);
              
              // AQUI É ONDE ENVIAREMOS OS TIPOS
              app.views.nextRef(dados);
             
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send();


    }




    procAdicionarImoveis(){

        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formAddImoveis').formSerialize();

        $("#btnAddItem").html("Processando...");
        $(".form-control").attr("readonly","true");

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-add-imoveis.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&"+dados;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Imóvel adicionado com sucesso!","O novo imóvel foi cadastrado.");

              // EXIBIR OS DADOS NO CONSOLE
              //console.log("%c PROVA REAL: ","background:#ff0000;color:#000");
              //console.log(JSON.parse(xhr.responseText));

              // VOLTAR PARA TODOS OS IMOVEIS
              app.imoveis();

            }else{
              
              console.log("SEM SUCESSO procAdicionarImoveis()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddItem").html("Adicionar");
      $(".form-control").removeAttr("readonly");


    }

    editarImoveis(id){

      var idUsuario = id;

      let xhr = new XMLHttpRequest();
       
      /* CONFIGURAÇÕES */
      //xhr.open('GET', app.urlApi+'admin-editarPerfil.php');
      xhr.open('POST', app.urlApi+'admin-editar-imoveis.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;

      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR IMÓVEL");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    $(".placeholder").hide(0);
                    $(".form").fadeIn(500);

                    app.views.popularEditarImoveis(dados);

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO editarImoveis()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);

    }

    procEditarImoveis(){

        $("#btnEditarItem").html("Processando...");
        $(".form-control").attr("readonly","true");

        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formAddImoveis').formSerialize();

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-proc-editar-imoveis.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+
                     "&"+dados;
                     
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Deu certo!","As informações foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procEditarImoveis()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnEditarItem").html("Atualizar");
      $(".form-control").removeAttr("readonly");
       
    }
    




    procAtualizarSeo(){

        $("#btnAtualizarSeoImovel").html("Processando...");
        $(".form-control").attr("readonly","true");

        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formAddImoveisSeo').formSerialize();

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-proc-editar-seo-imoveis.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+
                     "&"+dados;
                     
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Deu certo!","As informações foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procAtualizarSeo()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAtualizarSeoImovel").html("Atualizar");
      $(".form-control").removeAttr("readonly");


    }





    destacarImovelHomepage(id,acao){
        
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-proc-destacar-imovel-homepage.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+
                     "&id="+id+
                     "&acao="+acao;
                     
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Deu certo!","O destaque do imóvel foi atualizado.");
              console.log(JSON.parse(xhr.responseText));

            }else{
              
              console.log("SEM SUCESSO destacarImovelHomepage()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);
      
    }







    removerImoveis(id){

      // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-remover-imoveis.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&id="+id;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS REMOVER IMÓVEL:");
                console.log(JSON.parse(xhr.responseText));
                $("#linha"+id).fadeOut("500");
                aviso("Deu certo!","Imóvel foi removido com sucesso");

              }else{
                
                console.log("SEM SUCESSO removerImoveis()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Tente novamente em alguns minutos");

              }

            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);


    }



/**
*  ------------------------------------------------------------------------------------------------
*
*
*   CMS
*
*
*  ------------------------------------------------------------------------------------------------
*/
cmsSlides(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-cms-slides.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS CMS SLIDES:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO cmsSlides()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);

              app.popularSlides(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

}


procAdicionarSlide(){
    
        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formAddImoveis').formSerialize();

        $("#btnAddItem").html("Processando...");
        $(".form-control").attr("readonly","true");

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-add-cms-slide.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&"+dados;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Slide adicionado com sucesso!","O novo slide foi cadastrado.");

              // EXIBIR OS DADOS NO CONSOLE
              //console.log("%c PROVA REAL: ","background:#ff0000;color:#000");
              //console.log(JSON.parse(xhr.responseText));

              // VOLTAR PARA TODOS OS SLIDES
              app.cmsSlides();

            }else{
              
              console.log("SEM SUCESSO procAdicionarSlide()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddItem").html("Adicionar");
      $(".form-control").removeAttr("readonly");


}




}