class App {

    constructor(appId, appName, appVersion, appOs, ambiente, token, tokenSms) {

        this.appId = appId;
        this.appName = appName;
        this.appVersion = appVersion;        
        this.appOs = appOs;

        this.views = new Views();
        this.sessao = new Sessao();
        this.models = new Models();
        this.helpers = new Helpers();

        if(ambiente=="HOMOLOGACAO"){
             
            this.urlDom = "http://127.0.0.1:8080/romulo/administrativo/";
            this.urlApi = "http://127.0.0.1:8080/romulo/api/";
            this.urlCdn = "http://127.0.0.1:8080/romulo/cdn/";

        }
        if(ambiente=="PRODUCAO"){

            this.urlDom = "https://romulogestorimobiliario.com.br/novo2020/administrativo/";
            this.urlApi = "https://romulogestorimobiliario.com.br/novo2020/api/";
            this.urlCdn = "https://romulogestorimobiliario.com.br/novo2020/cdn/";

        }

        this.token = token;
        this.tokenSms = tokenSms;
        
        //  PREPARAR PAREMETROS
        $("#fileForm").attr("action",this.urlApi+"upload-imagens.php");
        $("#tokenUpload").val(token);
        
    }
    
    getVersion() {

        return this.appVersion;
    }

    getOs(){

        return this.appOs;
    }
    
    initApp(elemento){

        this.views.viewPrincipal();

        // VERIFICAR SE A API ESTÁ OK
        this.models.testeApi();

        // VERIFICAR SE O USUÁRIO ESTÄ LOGADO
        this.sessao.verificarLogado();

    }

    inicio(){

        this.views.viewPrincipal();

    }

    login(idUsuario,emailUusario,dadosUsuario){
   
        this.sessao.logarUsuario(idUsuario,emailUusario,dadosUsuario);
   
    }

    verificarCodigoSms(){

        this.views.viewCodigoSms();

    }

    procVerificarSms(){
        
       this.models.verificarCodigoSms(); 

    }
    
    procLoginSms(){

        this.models.procLoginSms();
   
    }

    procLogin(){

        this.models.procLogin();
   
    }
    
    procLogoff(){

        confirmacao("Tem certeza que deseja sair?","Você será desconectado...","app.logoff();","Sim, sair");
        
    }

    logoff(){
       
        localStorage.clear();
        app.viewLogin();

        $("header").css("opacity","0");
        location.reload();

    }

    cadastro(){
        this.views.viewCadastro();
        this.views.desativarTodosMenus();
    }

    procCadastro(){
        this.models.procCadastro();
    }


    esqueciMinhaSenha(){
        this.views.viewEsqueciMinhaSenha();
        this.views.desativarTodosMenus();
    }

    procResetSenha(){
        this.models.procResetSenha();
    }

    viewLoginEmailSenha(){
        this.views.viewLoginEmailSenha();
    }

    // CONTROLE DE ABRIR OU FECHAR O SIDEMENU
    abrirSideMenu(){
         
         if($(".sidemenu").hasClass("aberto")){
            
            $(".sidemenu").removeClass("aberto");
         
         }else{
         
            $(".sidemenu").addClass("aberto");
         
         }

    }



/**
*  ------------------------------------------------------------------------------------------------
*
*
*   EDITAR PERFIL USUARIO LOGADO
*
*
*  ------------------------------------------------------------------------------------------------
*/
    editarPerfil(){

       this.views.editarPerfil();
       this.models.editarPerfil();

    }
    procEditarPerfil(){
       
       this.models.procEditarPerfil();

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
       
       this.views.acessosAdmin();
       this.models.acessosAdmin();

    }

    popularAcessosAdmin(dados){
        
        this.views.popularAcessosAdmin(dados);

    }

    filtrotabelaAcessosAdmin(){

                  var input, filter, ul, li, a, i;
                  
                  input = document.getElementById('filtroTabelaAcessosAdmin');
                  filter = input.value.toUpperCase();
                  ul = document.getElementById("conteudoAcessosAdmin");

                  li = ul.getElementsByTagName('tr');

                  // Loop through all list items, and hide those who don't match the search query
                  for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "";
                      } else {
                          li[i].style.display = "none";
                      }
                  }
     }

    adicionarAcessoAdmin(){
         
         this.views.adicionarAcessoAdmin();

    }
    procAdicionarAcessoAdmin(){

        this.models.procAdicionarAcessoAdmin();

    }
    editarAcessoAdmin(id){
         
         console.log("VAMOS EDITAR O USUÁRIO: "+id);

         this.views.editarAcessoAdmin();
         this.models.editarAcessoAdmin(id);

    }
    procEditarAcessoAdmin(){
         
         this.models.procEditarAcessoAdmin();

    }
    perguntarRemover(id){

        confirmacao("Tem certeza que deseja remover esse usuário administrativo?",
                    "Essa ação não pode ser revertida",
                    `app.removerAcessoAdmin(${id})`,
                    "Remover");

    }
    removerAcessoAdmin(id){
        this.models.removerAcessoAdmin(id);
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
       
       this.views.clientes();
       this.models.clientes();

    }

    popularClientes(dados){
        
        this.views.popularClientes(dados);

    }

    filtrotabelaClientes(){

                  var input, filter, ul, li, a, i;
                  
                  input = document.getElementById('filtroTabelaClientes');
                  filter = input.value.toUpperCase();
                  ul = document.getElementById("conteudoClientes");

                  li = ul.getElementsByTagName('tr');

                  // Loop through all list items, and hide those who don't match the search query
                  for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "";
                      } else {
                          li[i].style.display = "none";
                      }
                  }
     }

    adicionarClientes(){
         
         this.views.adicionarClientes();
         this.models.adicionarClientesListaCorretores();

    }
    popularClientesListaCorretores(dados){

        this.views.popularClientesListaCorretores(dados);

    }
    procAdicionarClientes(){

        this.models.procAdicionarClientes();

    }
    editarClientes(id){
         
         console.log("VAMOS EDITAR O CLIENTE: "+id);

         this.views.editarClientes();
         this.models.editarClientes(id);

    }
    procEditarClientes(){
         
         this.models.procEditarClientes();

    }
    perguntarRemoverClientes(id){

        confirmacao("Tem certeza que deseja remover esse cliente?",
                    "Essa ação não pode ser revertida",
                    `app.removerClientes(${id})`,
                    "Remover");

    }
    removerClientes(id){
        this.models.removerClientes(id);
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
       
       this.views.corretores();
       this.models.corretores();

    }

    popularCorretores(dados){
        
        this.views.popularCorretores(dados);

    }

    filtrotabelaCorretores(){

                  var input, filter, ul, li, a, i;
                  
                  input = document.getElementById('filtroTabelaCorretores');
                  filter = input.value.toUpperCase();
                  ul = document.getElementById("conteudoCorretores");

                  li = ul.getElementsByTagName('tr');

                  // Loop through all list items, and hide those who don't match the search query
                  for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "";
                      } else {
                          li[i].style.display = "none";
                      }
                  }
     }

    adicionarCorretores(){
         
         this.views.adicionarCorretores();
         
    }
    
    procAdicionarCorretores(){

        this.models.procAdicionarCorretores();

    }
    editarCorretores(id){
         
         console.log("VAMOS EDITAR O CORRETOR: "+id);

         this.views.editarCorretores();
         this.models.editarCorretores(id);

    }
    procEditarCorretores(){
         
         this.models.procEditarCorretores();

    }
    perguntarRemoverCorretores(id){

        confirmacao("Tem certeza que deseja remover esse corretor?",
                    "Essa ação não pode ser revertida",
                    `app.removerCorretores(${id})`,
                    "Remover");

    }
    removerCorretores(id){
        this.models.removerCorretores(id);
    }
   








/**
*  ------------------------------------------------------------------------------------------------
*
*
*   TIPO IMÓVEL
*
*
*  ------------------------------------------------------------------------------------------------
*/
    tipoImoveis(){
       
       this.views.tipoImoveis();
       this.models.tipoImoveis();

    }

    popularTipoImoveis(dados){
        
        this.views.popularTipoImoveis(dados);

    }

    filtrotabelaTipoImoveis(){

                  var input, filter, ul, li, a, i;
                  
                  input = document.getElementById('filtroTabelaTipoImoveis');
                  filter = input.value.toUpperCase();
                  ul = document.getElementById("conteudoTipoImoveis");

                  li = ul.getElementsByTagName('tr');

                  // Loop through all list items, and hide those who don't match the search query
                  for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "";
                      } else {
                          li[i].style.display = "none";
                      }
                  }
     }

    adicionarTipoImoveis(){
         
         this.views.adicionarTipoImoveis();
         this.models.adicionarTipoImoveis();

         
    }
    
    procAdicionarTipoImoveis(){

        this.models.procAdicionarTipoImoveis();

    }
    editarTipoImoveis(id){
         
         console.log("VAMOS EDITAR O TIPO DE IMÓVEL: "+id);

         this.views.editarTipoImoveis();

         // CARREGAR LISTA DE IMÓVEIS PARA LIGACAO
         this.models.adicionarTipoImoveis();

         // CARREGAR OS DADOS JA CADASTRADOS DO TIPO DE IMÓVEL
         this.models.editarTipoImoveis(id);

    }
    procEditarTipoImoveis(){
         
         this.models.procEditarTipoImoveis();

    }
    perguntarRemoverTipoImoveis(id){

        confirmacao("Tem certeza que deseja remover esse tipo de imóvel?",
                    "Essa ação não pode ser revertida. Os imóveis atribuidos a esse tipo de imóvel, poderão ficar indisponíveis para edição ou visualização. Talvez, seja recomendável editar esses imóveis primeiro antes de remover o tipo de imóvel.",
                    `app.removerTipoImoveis(${id})`,
                    "Remover");

    }
    removerTipoImoveis(id){
        this.models.removerTipoImoveis(id);
    }
   


   CamposImoveis(idTipoImovel,nomeTipoImovel){

       this.views.CamposImoveis(idTipoImovel,nomeTipoImovel);
       this.models.CamposImoveis(idTipoImovel);
        

    }

    appendNewCamposImoveis(){
        
        this.views.appendNewCamposImoveis();

    }

    appendCadastradosCamposImoveis(campos){
       
       // ENVIAR OS CAMPOS PARA A VIEW
       this.views.appendCadastradosCamposImoveis(campos);

    }

    procEditarCamposTipoImoveis(){
        
        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formCamposTipoImoveis').formSerialize();
        
        this.models.procEditarCamposTipoImoveis(dados);

    }


/**
*  ------------------------------------------------------------------------------------------------
*
*
*   IMOVEIS
*
*
*  ------------------------------------------------------------------------------------------------
*/
    imoveis(){
           
           this.views.imoveis();
           this.models.imoveis();

    }

    popularImoveis(dados){
        
        this.views.popularImoveis(dados);

    }

    destacarImovelHomepage(seletor){

      var id = $(seletor).attr("data-id");
      console.log("ESSE É O ID QUE VAMOS DESTACAR NA HOMEPAGE: "+id);

      if($(seletor).is(":checked")){
         console.log("CAMPO SELECIONADO");
      }else{
         console.log("CAMPO NÃO ESTÁ SELECIONADO");
      }
        
    }

    filtrotabelaImoveis(){

                  var input, filter, ul, li, a, i;
                  
                  input = document.getElementById('filtroTabelaImoveis');
                  filter = input.value.toUpperCase();
                  ul = document.getElementById("conteudoImoveis");

                  li = ul.getElementsByTagName('tr');

                  // Loop through all list items, and hide those who don't match the search query
                  for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "";
                      } else {
                          li[i].style.display = "none";
                      }
                  }
     }

    adicionarImoveis(){
         
         this.views.adicionarImoveis();
         this.models.adicionarImoveis();

         
    }

    buscarCamposImoveis(tipoImovel){

      console.log("VAMOS BUSCAR OS CAMPOS DO TIPO DE IMÓVEL: "+tipoImovel);

      this.models.buscarCamposTipoImoveis(tipoImovel);

    }

    buscaCep(seletor){
      
      var cep = seletor.value;

      this.models.buscaCep(cep);

    }
    
    procAdicionarImoveis(){

        this.models.procAdicionarImoveis();

    }
    editarImoveis(id){
         
         console.log("VAMOS EDITAR O IMÓVEL: "+id);

         this.views.editarImoveis();

         // CARREGAR OS DADOS JA CADASTRADOS DO TIPO DE IMÓVEL
         this.models.editarImoveis(id);

    }
    procEditarImoveis(){
         
         this.models.procEditarImoveis();

    }
    perguntarRemoverImoveis(id){

        confirmacao("Tem certeza que deseja remover esse imóvel?",
                    "Essa ação não pode ser revertida.",
                    `app.removerImoveis(${id})`,
                    "Remover");

    }
    removerImoveis(id){
        this.models.removerImoveis(id);
    }

    procAtualizarSeo(){
      this.models.procAtualizarSeo();
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

    cms(){
       
       this.views.cms();

    }

/**
*  ------------------------------------------------------------------------------------------------
*
*
*   OUTROS CONTROLLERS
*
*
*  ------------------------------------------------------------------------------------------------
*/

    defineDestinyImages(tipo){

        // IMOVEIS
        if(tipo==1){
          localStorage.setItem("destinoImagens","imoveis");
        }

    }


    view2(){
        this.views.view2();
        this.views.ativarMenuDois();
    }

    view3(){
        this.views.view3();
        this.views.ativarMenuTres();
    }

    viewLogin(){
        this.views.viewLogin();
        this.views.desativarTodosMenus();
        $("header").addClass("nao-logado");
    }

    viewUploadFoto(){
        this.views.viewUploadFoto();
        this.views.desativarTodosMenus();
    }

}


class Sessao{
    
	constructor(){
	      
	     this.logado = "nao-logado";
	     this.bdLogado = localStorage.getItem("bdLogado");
	     this.idUsuario = localStorage.getItem("idUsuario");
	     this.emailUsuario = localStorage.getItem("emailUsuario");
	     this.dadosUsuario = localStorage.getItem("dadosUsuario");

	}
    
    logarUsuario(idUsuario,emailUusario,dadosUsuario){
    	this.logado = "logado";
    	this.idUsuario = idUsuario;
    	this.dadosUsuario = dadosUsuario;
    	localStorage.setItem("bdLogado","logado");
        localStorage.setItem("idUsuario",this.idUsuario);

        // REMOVER A CLASSE QUE IMPEDE QUE O RODAPÉ SEJA ADICIONADO AO CALCULO DA ALTURA
        $("header").removeClass("nao-logado");
        
        // DIRECIONAR O USUÁRIO PARA O INÍCIO
    	app.inicio();
    }

    verificarLogado(){
      
	      if(this.bdLogado!="logado"){
	      	app.viewLogin();
	      	
	      }

    }

    deslogarUusario(){
    	this.logado = "nao-logado";
    	localStorage.setItem("bdLogado","nao-logado");
    	localStorage.clear();
    }

}