class Views{
    
	constructor(){
	      
	     this._content = $("section#content"); 
       this._sidemenu = $(".sidemenu");

	     this._allMenus = $("footer * a");
	     this._menu1 = $("footer .menu-1 a");
	     this._menu2 = $("footer .menu-2 a");
	     this._menu3 = $("footer .menu-3 a");

       this.header = $("header");
       this.footer = $("footer");

       this.carregandoTabela = `

            <tr class="carregandoTabela">
               <td style="position:relative;display:block;text-align:center;padding: 40px;padding-bottom: 70px;">
             
                  <p>
                     <img src="assets/images/loading.gif" alt="Carregando" style="width:24px;" />
                  </p>
                  <p style="font-size:13px;">
                     Carregando
                  </p>
              
               </td>
            </tr>

       `;

	}

	animarTransicao(){
		new WOW().init();
	}
  
    viewPrincipal(){

        if(localStorage.getItem("bdLogado")=="logado"){
            
            $("header").css("opacity","1");
            this._content.removeClass("nao-logado");

            $(".sidemenu nav ul li").removeClass("ativo");
            $("#menuAdminDashboard").addClass("ativo");

            // ALIMENTAR O HEADER
            $("header").html(`
                 
                 <div class="container">
                        <div class="row">

                        <!-- LOGO -->
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 logo">
                            <h1>
                                <a href="javascript:void(0)" onclick="app.abrirSideMenu();" title="Menu" class="toggle-menu">
                                    <i class="fa fa-bars"></i>
                                </a>
                                Administrativo
                            </h1>
                        </div>
                        <!-- LOGO -->
                        
                        <!-- MENU -->
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 menu">
                            
                        </div>
                        <!-- MENU -->

                        <!-- ACTIONS -->
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 actions text-right">
                            
                            <div class="foto-perfil" onclick="app.editarPerfil();" style="background:url('assets/images/perfil.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                <a href="javascript:void(0)" title="Editar Perfil">
                                    &nbsp;
                                </a>
                            </div>

                        </div>
                        <!-- ACTIONS -->

                    </div>
                    </div>

            `);

            // ALIMENTAR O SIDEMENU

            // MENUS ADMINS
            if(localStorage.getItem("perfilUsuario")=="admin"){

                    this._sidemenu.html(`

                       <nav>
                            <ul>
                                
                                <li id="menuAdminDashboard" class="ativo"><a href="javascript:void(0)" onclick="app.inicio();app.abrirSideMenu();" title="Início">Início</a></li>

                                <li id="menuClientes"><a href="javascript:void(0)" onclick="app.clientes();app.abrirSideMenu();" title="Clientes/Proprietários">Clientes/Proprietários</a></li>

                                <li id="menuCorretores"><a href="javascript:void(0)" onclick="app.corretores();app.abrirSideMenu();" title="Corretores">Corretores</a></li>
                                
                                <li id="menuTipoImoveis"><a href="javascript:void(0)" onclick="app.tipoImoveis();app.abrirSideMenu();" title="Tipo de Imóveis">Tipo de Imóveis</a></li>

                                <li id="menuImoveis"><a href="javascript:void(0)" onclick="app.imoveis();app.abrirSideMenu();" title="Imóveis">Imóveis</a></li>

                                <li id="menuAdminAcessoAdmin"><a href="javascript:void(0)" onclick="app.acessosAdmin();app.abrirSideMenu();" title="Acesso Admin">Acessos Admin</a></li>

                                


                                <li><a href="javascript:void(0)" onclick="app.procLogoff(); app.abrirSideMenu();" title="Sair">Sair</a></li>

                                <li style="text-align: left;border:none;margin-top: 50px;">
                                    <a href="javascript:void(0)" onclick="app.abrirSideMenu();" style="color: #747474" title="Fechar menu"><i class="fa fa-times"></i> Fechar menu</a>
                                </li>

                            </ul>
                        </nav>

                   `);

            }
            // FINAL MENUS ADMINS
            


            this._content.html(`

              <div class="container">
            
                   <div class="row view-principal" view-name="view-principal">
                      <div class="col-12 wow fadeInUp">
                         <h1>Imóveis</h1>
                         <p>Imóveis mais acessados na plataforma</p>
                         

                         <!-- EMPTY STATE -->
                        <div class="linear-background">
                            <div class="inter-draw"></div>
                            <div class="inter-crop"></div>
                            <div class="inter-right--top"></div>
                            <div class="inter-right--bottom"></div>
                        </div>
                        <div class="linear-background">
                            <div class="inter-draw"></div>
                            <div class="inter-crop"></div>
                            <div class="inter-right--top"></div>
                            <div class="inter-right--bottom"></div>
                        </div>
                        <div class="linear-background">
                            <div class="inter-draw"></div>
                            <div class="inter-crop"></div>
                            <div class="inter-right--top"></div>
                            <div class="inter-right--bottom"></div>
                        </div>
                        <!-- EMPTY STATE -->


                      </div>
                   </div>

              </div>
            
            `);

            this.animarTransicao();

            $("footer").fadeIn();

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

       $(".sidemenu nav ul li").removeClass("ativo");
       
       this._content.html(`
               
               <div class="container">
               
                 <div class="row view-editarPerfil" view-name="view-editarPerfil">

                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Editar seus dados</h4>

                                    <div class="placeholder">

                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->

                                    </div>

                                    <div class="form">
                                         
                                         <form method="post" action="javascript:void(0)" onsubmit="app.procEditarPerfil(event)">
                                            
                                            <div class="form-group">
                                               <label>Nome</label>
                                               <input type="text" class="form-control" id="editarPerfilNome" placeholder="Seu nome" required />
                                            </div>

                                            <div class="form-group">
                                               <label>E-mail</label>
                                               <input type="email" class="form-control" id="editarPerfilEmail" placeholder="E-mail de acesso" required />
                                            </div>

                                            <div class="form-group">
                                               <label>Celular</label>
                                               <input type="text" class="form-control" id="editarPerfilCelular" placeholder="DDD + número" required />
                                            </div>

                                            <div class="form-group">
                                               <label>Senha de acesso</label>
                                               <input type="password" class="form-control" id="editarPerfilSenha" placeholder="Senha de acesso" required />
                                            </div>

                                            <div class="form-group">
                                               <button type="submit" class="btn btn-primary" id="btnEditarPerfil">Atualizar</button>
                                            </div>

                                         </form>

                                    </div>

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

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

           $(".sidemenu nav ul li").removeClass("ativo");
           $("#menuAdminAcessoAdmin").addClass("ativo");

      

           this._content.html(`
            
              <div class="container">
                 
                   <div class="row view-acessosAdmin" view-name="view-acessosAdmin">
                       <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                           
                           <!-- TÍTULOS DA PÁGINAS --> 
                           <h4>Acessos administrativo</h4>
                           <p>Usuários com acesso administrativo podem fazer qualquer tipo de alteração na plataforma</p>
                           <p>&nbsp;</p>
                           <!-- TÍTULOS DA PÁGINAS -->
                           
                           <div class="row">
                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 offset-xl-7 offset-lg-7 offset-md-7 offset-sm-7" style="padding-right:0px;">
                                     
                                     <a href="javascript:void(0)" style="float: right;" onclick="app.adicionarAcessoAdmin()" class="btn btn-primary" title="Adicionar novo usuário administrativo">
                                       <i class="fa fa-plus"></i> Adicionar
                                    </a>

                                     <!-- BUSCA AVULSA -->
                                     <div class="busca-avulsa">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                   <span class="input-group-text">
                                                      <i class="fa fa-search" aria-hidden="true"></i>
                                                   </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Faça uma pesquisa" onkeyup="app.filtrotabelaAcessosAdmin();" id="filtroTabelaAcessosAdmin">
                                            </div>
                                     </div>
                                     <!-- BUSCA AVULSA -->

                                    
                              </div>
                           </div>
                           <div class="table-responsive">
                               
                               <table class="table table-striped">
                                   <thead>
                                      <th>#</th>
                                      <th>Nome</th>
                                      <th>E-mail</th>
                                      <th>Celular</th>
                                      <th>Senha</th>
                                      <th>Ações</th>
                                   </thead>

                                   <tbody id="conteudoAcessosAdmin">
                                      ${this.carregandoTabela}
                                   </tbody>

                               </table>

                           </div>
                           
                           <div class="text-right">
                              <a href="javascript:void(0)" onclick="app.adicionarAcessoAdmin()" class="btn btn-primary" title="Adicionar novo usuário administrativo">
                                 <i class="fa fa-plus"></i> Adicionar
                              </a>
                              
                           </div>


                       </div>
                   </div>

              </div>

        `);

        this.animarTransicao();
      

    }
    popularAcessosAdmin(dados){

         
         if(dados.sucesso=="200"){

             $(".carregandoTabela").hide(0);

             if(dados.dados.length==0){

                aviso("Sem informações para mostrar","Nenhum usuário administrativo cadastrado");
             
             }
         
             $("#conteudoAcessosAdmin").html(`
                  
                   ${dados.dados.map((n) => {
                         
                          return `
                            <tr id="linha${n.id}">
                              <td>${n.id}</td>
                              <td>${n.nome}</td>
                              <td>${n.email}</td>
                              <td>${n.celular}</td>
                              <td>${n.senha}</td>
                              <td>
                                  
                                  <a href="javascript:void(0)" onclick="app.perguntarRemover(${n.id})" class="btn btn-warning btn-sm" title="Apagar">
                                    <i class="fa fa-trash"></i>
                                  </a>

                                  <a href="javascript:void(0)" onclick="app.editarAcessoAdmin(${n.id})" class="btn btn-primary btn-sm" title="Editar">
                                     <i class="fa fa-pencil"></i>
                                  </a>

                              </td>
                            </tr>
                          `

                    }).join('')}


             `);

         }else{

          aviso("Oops! Algo deu errado","Não conseguimos recuperar as informações, tente novamente em alguns minutos.");
         
         }

    }
    adicionarAcessoAdmin(){


      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-adicionarAcessoAdmin" view-name="view-adicionarAcessoAdmin">

                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Adicionar usuário com acesso administrativo</h4>

                                         <form method="post" action="javascript:void(0)" onsubmit="app.procAdicionarAcessoAdmin(event)">
                                            
                                            <div class="form-group">
                                               <label>Nome</label>
                                               <input type="text" class="form-control" id="acessoAdminNome" placeholder="Nome do usuário" required />
                                            </div>

                                            <div class="form-group">
                                               <label>E-mail</label>
                                               <input type="email" class="form-control" id="acessoAdminEmail" placeholder="E-mail de acesso" required />
                                            </div>

                                            <div class="form-group">
                                               <label>Celular</label>
                                               <input type="text" class="form-control" id="acessoAdminCelular" placeholder="DDD + número" required />
                                            </div>

                                            <div class="form-group">
                                               <label>Senha de acesso</label>
                                               <input type="password" class="form-control" id="acessoAdminSenha" placeholder="Senha de acesso" required />
                                            </div>

                                            <div class="form-group">
                                               <button type="submit" class="btn btn-primary" id="btnAddAcessoAdmin">Adicionar</button>
                                               
                                            </div>

                                         </form>

                                  
                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

        app.helpers.carregarMascaras();

    }
    editarAcessoAdmin(){

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-editarPerfil" view-name="view-editarPerfil">

                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Editar dados do usuário Acesso Administrativo</h4>

                                    <div class="placeholder">

                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->

                                    </div>

                                    <div class="form">
                                         
                                         <form method="post" action="javascript:void(0)" onsubmit="app.procEditarAcessoAdmin(event)">

                                            <input type="hidden" name="id" id="acessoAdminEditarId" value="" />
                                            
                                            <div class="form-group">
                                               <label>Nome</label>
                                               <input type="text" class="form-control" id="acessoAdminEditarNome" placeholder="Nome do usuário" required />
                                            </div>

                                            <div class="form-group">
                                               <label>E-mail</label>
                                               <input type="email" class="form-control" id="acessoAdminEditarEmail" placeholder="E-mail de acesso" required />
                                            </div>

                                            <div class="form-group">
                                               <label>Celular</label>
                                               <input type="text" class="form-control" id="acessoAdminEditarCelular" placeholder="DDD + número" required />
                                            </div>

                                            <div class="form-group">
                                               <label>Senha de acesso</label>
                                               <input type="password" class="form-control" id="acessoAdminEditarSenha" placeholder="Senha de acesso" required />
                                            </div>

                                            <div class="form-group">
                                               <button type="submit" class="btn btn-primary" id="btnEditarAcessoAdmin">Atualizar</button>
                                               
                                            </div>

                                         </form>

                                    </div>

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

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

           $(".sidemenu nav ul li").removeClass("ativo");
           $("#menuClientes").addClass("ativo");

           this._content.html(`
            
              <div class="container">
                 
                   <div class="row view-acessosAdmin" view-name="view-acessosAdmin">
                       <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                           
                           <!-- TÍTULOS DA PÁGINAS --> 
                           <h4>Clientes/Proprietários</h4>
                           <p>Clientes cadastrados na plataforma</p>
                           <p>&nbsp;</p>
                           <!-- TÍTULOS DA PÁGINAS -->
                           
                           <div class="row">
                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 offset-xl-7 offset-lg-7 offset-md-7 offset-sm-7" style="padding-right:0px;">
                                     
                                     <a href="javascript:void(0)" style="float: right;" onclick="app.adicionarClientes()" class="btn btn-primary" title="Adicionar novo cliente">
                                       <i class="fa fa-plus"></i> Adicionar
                                    </a>

                                     <!-- BUSCA AVULSA -->
                                     <div class="busca-avulsa">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                   <span class="input-group-text">
                                                      <i class="fa fa-search" aria-hidden="true"></i>
                                                   </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Faça uma pesquisa" onkeyup="app.filtrotabelaClientes();" id="filtroTabelaClientes">
                                            </div>
                                     </div>
                                     <!-- BUSCA AVULSA -->

                                    
                              </div>
                           </div>
                           <div class="table-responsive">
                               
                               <table class="table table-striped">
                                   <thead>
                                      <th>#</th>
                                      <th>Nome</th>
                                      <th>E-mail</th>
                                      <th>Telefones</th>
                                      <th>Senha</th>
                                      <th>Endereço</th>
                                      <th>Corretor</th>
                                      <th style="width:125px;">Ações</th>
                                   </thead>

                                   <tbody id="conteudoClientes">
                                      ${this.carregandoTabela}
                                   </tbody>

                               </table>

                           </div>
                           
                           <div class="text-right">
                              <a href="javascript:void(0)" onclick="app.adicionarClientes()" class="btn btn-primary" title="Adicionar novo cliente">
                                 <i class="fa fa-plus"></i> Adicionar
                              </a>
                              
                           </div>


                       </div>
                   </div>

              </div>

        `);

        this.animarTransicao();
      

    }
    popularClientes(dados){

         
         if(dados.sucesso=="200"){

             $(".carregandoTabela").hide(0);

             if(dados.clientes.length==0){

                aviso("Sem informações para mostrar","Nenhum cliente cadastrado");
             
             }
         
             $("#conteudoClientes").html(`
                  
                   ${dados.clientes.map((n) => {

                      if(n.nome_corretor===null || n.nome_corretor === undefined){
                        n.nome_corretor = "N/A";
                        n.corretor_creci = "";
                      }
                         
                          return `
                            <tr id="linha${n.id}">
                              <td>${n.id}</td>
                              <td>${n.nome}</td>
                              <td>${n.email}</td>
                              <td>
                                Celular: ${n.celular}<br>
                                Telefone: ${n.telefone}
                              </td>
                              <td>${n.senha}</td>
                              <td>
                                ${n.endereco} <br>
                                Bairro: ${n.bairro} <br>
                                Cidade: ${n.cidade} <br>
                                Estado: ${n.estado} <br>
                                CEP: ${n.cep}
                              </td>
                              <td>${n.nome_corretor} (${n.corretor_creci})</td>
                              <td style="width:125px;">
                                  
                                  <a href="javascript:void(0)" onclick="app.perguntarRemoverClientes(${n.id})" class="btn btn-warning btn-sm" title="Apagar">
                                    <i class="fa fa-trash"></i>
                                  </a>

                                  <a href="javascript:void(0)" onclick="app.editarClientes(${n.id})" class="btn btn-primary btn-sm" title="Editar">
                                     <i class="fa fa-pencil"></i>
                                  </a>

                                  <a href="javascript:void(0)" class="btn btn-primary btn-sm" title="Imóveis desse cliente/proprietário">
                                     <i class="fa fa-home"></i>
                                  </a>

                              </td>
                            </tr>
                          `

                    }).join('')}


             `);

         }else{

          aviso("Oops! Algo deu errado","Não conseguimos recuperar as informações, tente novamente em alguns minutos.");
         
         }

    }
    adicionarClientes(corretores){


      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-adicionarClientes" view-name="view-adicionarClientes">

                      <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Adicionar Cliente</h4>

                                         <form method="post" action="javascript:void(0)" onsubmit="app.procAdicionarClientes(event)">
                                            

                                            <div class="row">
                                              <div class="col-xl-6 col-lg-6 col-12">

                                                <div class="form-group">
                                                   <label>Nome</label>
                                                   <input type="text" class="form-control" id="clientesNome" placeholder="Nome completo do cliente" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>CPF</label>
                                                   <input type="text" class="form-control" id="clientesCpf" placeholder="CPF" required />
                                                </div>
                                                <div class="form-group">
                                                   <label>CNPJ</label>
                                                   <input type="text" class="form-control" id="clientesCnpj" placeholder="CNPJ"  />
                                                </div>

                                                <div class="form-group">
                                                   <label>E-mail</label>
                                                   <input type="email" class="form-control" id="clientesEmail" placeholder="E-mail de contato do cliente" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Celular</label>
                                                   <input type="text" class="form-control" id="clientesCelular" placeholder="DDD + número" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Telefone</label>
                                                   <input type="text" class="form-control" id="clientesTelefone" placeholder="DDD + número" />
                                                </div>


                                                <div class="form-group">
                                                   <label>Senha de acesso</label>
                                                   <input type="password" class="form-control" id="clientesSenha" placeholder="Senha de acesso" required />
                                                </div>

                                            </div>

                                            <div class="col-xl-6 col-lg-6 col-12">


                                                <div class="form-group">
                                                   <label>Endereço</label>
                                                   <input type="text" class="form-control" id="clientesEndereco" placeholder="Endereço" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Bairro</label>
                                                   <input type="text" class="form-control" id="clientesBairro" placeholder="Bairro" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Cidade</label>
                                                   <input type="text" class="form-control" id="clientesCidade" placeholder="Cidade" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Estado</label>
                                                   <select class="form-control" id="clientesEstado">
                                                      <option value="">Selecione um estado</option>
                                                      <option value="AC">Acre</option>
                                                      <option value="AL">Alagoas</option>
                                                      <option value="AP">Amapá</option>
                                                      <option value="AM">Amazonas</option>
                                                      <option value="BA">Bahia</option>
                                                      <option value="CE">Ceará</option>
                                                      <option value="DF">Distrito Federal</option>
                                                      <option value="ES">Espírito Santo</option>
                                                      <option value="GO">Goiás</option>
                                                      <option value="MA">Maranhão</option>
                                                      <option value="MT">Mato Grosso</option>
                                                      <option value="MS">Mato Grosso do Sul</option>
                                                      <option value="MG">Minas Gerais</option>
                                                      <option value="PA">Pará</option>
                                                      <option value="PB">Paraíba</option>
                                                      <option value="PR">Paraná</option>
                                                      <option value="PE">Pernambuco</option>
                                                      <option value="PI">Piauí</option>
                                                      <option value="RJ">Rio de Janeiro</option>
                                                      <option value="RN">Rio Grande do Norte</option>
                                                      <option value="RS">Rio Grande do Sul</option>
                                                      <option value="RO">Rondônia</option>
                                                      <option value="RR">Roraima</option>
                                                      <option value="SC">Santa Catarina</option>
                                                      <option value="SP">São Paulo</option>
                                                      <option value="SE">Sergipe</option>
                                                      <option value="TO">Tocantins</option>
                                                      <option value="EX">Estrangeiro</option>
                                                   </select>
                                                </div>

                                                <div class="form-group">
                                                   <label>CEP</label>
                                                   <input type="text" class="form-control" id="clientesCEP" placeholder="Número do CEP" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Corretor</label>
                                                   <select class="form-control" id="clientesCorretor">
                                                     <option value="">Nenhum corretor</option>
                                                   </select>
                                                </div>

                                                <div class="form-group">
                                                   <label>Observações</label>
                                                   <textarea class="form-control" id="clientesObservacoes" placeholder="Digite observações nesse campo" rows="7"></textarea>
                                                </div>

                                                <div class="form-group text-right">
                                                 <button type="submit" class="btn btn-primary" id="btnAddClientes">Adicionar</button>
                                              </div>


                                            </div>
                                         </div>

                                            

                                            

                                         </form>

                                  
                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

        app.helpers.carregarMascaras();

    }


    popularClientesListaCorretores(dados){

       $("#clientesCorretor").append(`

            ${dados.corretores.map((n) => {
                  return `
                      <option value="${n.id}">${n.nome}</option>
                  `
            }).join('')}

      `);

    }


    editarClientes(){

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-editarClientes" view-name="view-editarClientes">

                      <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Editar dados do cliente</h4>

                                    <div class="placeholder">

                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->

                                    </div>

                                    <div class="form">
                                         
                                         <form method="post" action="javascript:void(0)" onsubmit="app.procEditarClientes(event)">
                                            
                                            <input type="hidden" id="clientesId" value="" />

                                            <div class="row">
                                              <div class="col-xl-6 col-lg-6 col-12">

                                                  <div class="form-group">
                                                     <label>Nome</label>
                                                     <input type="text" class="form-control" id="clientesNome" placeholder="Nome completo do cliente" required />
                                                  </div>

                                                  <div class="form-group">
                                                     <label>CPF</label>
                                                     <input type="text" class="form-control" id="clientesCpf" placeholder="CPF" required />
                                                  </div>

                                                  <div class="form-group">
                                                     <label>CNPJ</label>
                                                     <input type="text" class="form-control" id="clientesCnpj" placeholder="CNPJ"  />
                                                  </div>

                                                  <div class="form-group">
                                                     <label>E-mail</label>
                                                     <input type="email" class="form-control" id="clientesEmail" placeholder="E-mail de contato do cliente" required />
                                                  </div>

                                                  <div class="form-group">
                                                     <label>Celular</label>
                                                     <input type="text" class="form-control" id="clientesCelular" placeholder="DDD + número" required />
                                                  </div>

                                                  <div class="form-group">
                                                     <label>Telefone</label>
                                                     <input type="text" class="form-control" id="clientesTelefone" placeholder="DDD + número" />
                                                  </div>


                                                  <div class="form-group">
                                                     <label>Senha de acesso</label>
                                                     <input type="password" class="form-control" id="clientesSenha" placeholder="Senha de acesso" required />
                                                  </div>
                                            

                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-12">

                                                    <div class="form-group">
                                                       <label>Endereço</label>
                                                       <input type="text" class="form-control" id="clientesEndereco" placeholder="Endereço" required />
                                                    </div>

                                                    <div class="form-group">
                                                       <label>Bairro</label>
                                                       <input type="text" class="form-control" id="clientesBairro" placeholder="Bairro" required />
                                                    </div>

                                                    <div class="form-group">
                                                       <label>Cidade</label>
                                                       <input type="text" class="form-control" id="clientesCidade" placeholder="Cidade" required />
                                                    </div>

                                                    <div class="form-group">
                                                       <label>Estado</label>
                                                       <select class="form-control" id="clientesEstado">
                                                          <option value="">Selecione um estado</option>
                                                          <option value="AC">Acre</option>
                                                          <option value="AL">Alagoas</option>
                                                          <option value="AP">Amapá</option>
                                                          <option value="AM">Amazonas</option>
                                                          <option value="BA">Bahia</option>
                                                          <option value="CE">Ceará</option>
                                                          <option value="DF">Distrito Federal</option>
                                                          <option value="ES">Espírito Santo</option>
                                                          <option value="GO">Goiás</option>
                                                          <option value="MA">Maranhão</option>
                                                          <option value="MT">Mato Grosso</option>
                                                          <option value="MS">Mato Grosso do Sul</option>
                                                          <option value="MG">Minas Gerais</option>
                                                          <option value="PA">Pará</option>
                                                          <option value="PB">Paraíba</option>
                                                          <option value="PR">Paraná</option>
                                                          <option value="PE">Pernambuco</option>
                                                          <option value="PI">Piauí</option>
                                                          <option value="RJ">Rio de Janeiro</option>
                                                          <option value="RN">Rio Grande do Norte</option>
                                                          <option value="RS">Rio Grande do Sul</option>
                                                          <option value="RO">Rondônia</option>
                                                          <option value="RR">Roraima</option>
                                                          <option value="SC">Santa Catarina</option>
                                                          <option value="SP">São Paulo</option>
                                                          <option value="SE">Sergipe</option>
                                                          <option value="TO">Tocantins</option>
                                                          <option value="EX">Estrangeiro</option>
                                                       </select>
                                                    </div>

                                                    <div class="form-group">
                                                       <label>CEP</label>
                                                       <input type="text" class="form-control" id="clientesCEP" placeholder="Número do cep" required />
                                                    </div>

                                                    <div class="form-group">
                                                       <label>Corretor</label>
                                                       <select class="form-control" id="clientesCorretor">
                                                         <option value="">Nenhum corretor</option>
                                                       </select>
                                                    </div>

                                                    <div class="form-group">
                                                       <label>Observações</label>
                                                       <textarea class="form-control" id="clientesObservacoes" placeholder="Digite observações nesse campo" rows="7"></textarea>
                                                    </div>

                                                    <div class="form-group">
                                                       <button type="submit" class="btn btn-primary" id="btnEditarClientes">Atualizar</button>
                                                    </div>

                                              </div>
                                            </div>


                                         </form>

                                    </div>

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();
        app.helpers.carregarMascaras();

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

           $(".sidemenu nav ul li").removeClass("ativo");
           $("#menuCorretores").addClass("ativo");

           this._content.html(`
            
              <div class="container">
                 
                   <div class="row view-acessosAdmin" view-name="view-acessosAdmin">
                       <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                           
                           <!-- TÍTULOS DA PÁGINAS --> 
                           <h4>Corretores</h4>
                           <p>Corretores cadastrados na plataforma</p>
                           <p>&nbsp;</p>
                           <!-- TÍTULOS DA PÁGINAS -->
                           
                           <div class="row">
                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 offset-xl-7 offset-lg-7 offset-md-7 offset-sm-7" style="padding-right:0px;">
                                     
                                     <a href="javascript:void(0)" style="float: right;" onclick="app.adicionarCorretores()" class="btn btn-primary" title="Adicionar novo corretor">
                                       <i class="fa fa-plus"></i> Adicionar
                                     </a>

                                     <!-- BUSCA AVULSA -->
                                     <div class="busca-avulsa">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                   <span class="input-group-text">
                                                      <i class="fa fa-search" aria-hidden="true"></i>
                                                   </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Faça uma pesquisa" onkeyup="app.filtrotabelaCorretores();" id="filtroTabelaCorretores">
                                            </div>
                                     </div>
                                     <!-- BUSCA AVULSA -->
                                     
                              </div>
                           </div>
                           <div class="table-responsive">
                               
                               <table class="table table-striped">
                                   <thead>
                                      <th>#</th>
                                      <th>Nome</th>
                                      <th>E-mail</th>
                                      <th>Telefones</th>
                                      <th>Senha</th>
                                      <th>Endereço</th>
                                      <th>CRECI</th>
                                      <th style="width:175px;">Ações</th>
                                   </thead>

                                   <tbody id="conteudoCorretores">
                                      ${this.carregandoTabela}
                                   </tbody>

                               </table>

                           </div>
                           
                           <div class="text-right">
                              <a href="javascript:void(0)" onclick="app.adicionarCorretores()" class="btn btn-primary" title="Adicionar novo corretor">
                                 <i class="fa fa-plus"></i> Adicionar
                              </a>
                              
                           </div>


                       </div>
                   </div>

              </div>

        `);

        this.animarTransicao();
      

    }
    popularCorretores(dados){

         if(dados.sucesso=="200"){

             $(".carregandoTabela").hide(0);

             if(dados.corretores.length==0){

                aviso("Sem informações para mostrar","Nenhum corretor cadastrado");
             
             }
         
             $("#conteudoCorretores").html(`
                  
                   ${dados.corretores.map((n) => {

                          return `
                            <tr id="linha${n.id}">
                              <td>${n.id}</td>
                              <td>${n.nome}</td>
                              <td>${n.email}</td>
                              <td>
                                Celular: ${n.celular}<br>
                                Telefone: ${n.telefone}
                              </td>
                              <td>${n.senha}</td>
                              <td>
                                ${n.endereco} <br>
                                Bairro: ${n.bairro} <br>
                                Cidade: ${n.cidade} <br>
                                Estado: ${n.estado} <br>
                                CEP: ${n.cep}
                              </td>
                              <td>${n.corretor_creci}</td>
                              <td style="width:175px;">
                                  
                                  <a href="javascript:void(0)" onclick="app.perguntarRemoverCorretores(${n.id})" class="btn btn-warning btn-sm" title="Apagar">
                                    <i class="fa fa-trash"></i>
                                  </a>

                                  <a href="javascript:void(0)" onclick="app.editarCorretores(${n.id})" class="btn btn-primary btn-sm" title="Editar">
                                     <i class="fa fa-pencil"></i>
                                  </a>

                                  <a href="javascript:void(0)" class="btn btn-primary btn-sm" title="Imóveis desse corretor">
                                     <i class="fa fa-home"></i>
                                  </a>

                                  <a href="javascript:void(0)" class="btn btn-primary btn-sm" title="Clientes desse corretor">
                                     <i class="fa fa-users"></i>
                                  </a>

                              </td>
                            </tr>
                          `

                    }).join('')}


             `);

         }else{

          aviso("Oops! Algo deu errado","Não conseguimos recuperar as informações, tente novamente em alguns minutos.");
         
         }

    }
    adicionarCorretores(corretores){

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-adicionarCorretores" view-name="view-adicionarCorretores">

                      <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Adicionar Corretor</h4>

                                         <form method="post" action="javascript:void(0)" onsubmit="app.procAdicionarCorretores(event)">
                                            

                                            <div class="row">
                                              <div class="col-xl-6 col-lg-6 col-12">

                                                <div class="form-group">
                                                   <label>Nome</label>
                                                   <input type="text" class="form-control" id="clientesNome" placeholder="Nome completo do corretor" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>CPF</label>
                                                   <input type="text" class="form-control" id="clientesCpf" placeholder="CPF" required />
                                                </div>
                                                <div class="form-group">
                                                   <label>CNPJ</label>
                                                   <input type="text" class="form-control" id="clientesCnpj" placeholder="CNPJ"  />
                                                </div>

                                                <div class="form-group">
                                                   <label>E-mail</label>
                                                   <input type="email" class="form-control" id="clientesEmail" placeholder="E-mail de contato do corretor" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Celular</label>
                                                   <input type="text" class="form-control" id="clientesCelular" placeholder="DDD + número" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Telefone</label>
                                                   <input type="text" class="form-control" id="clientesTelefone" placeholder="DDD + número" />
                                                </div>


                                                <div class="form-group">
                                                   <label>Senha de acesso</label>
                                                   <input type="password" class="form-control" id="clientesSenha" placeholder="Senha de acesso" required />
                                                </div>

                                            </div>

                                            <div class="col-xl-6 col-lg-6 col-12">


                                                <div class="form-group">
                                                   <label>Endereço</label>
                                                   <input type="text" class="form-control" id="clientesEndereco" placeholder="Endereço" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Bairro</label>
                                                   <input type="text" class="form-control" id="clientesBairro" placeholder="Bairro" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Cidade</label>
                                                   <input type="text" class="form-control" id="clientesCidade" placeholder="Cidade" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Estado</label>
                                                   <select class="form-control" id="clientesEstado">
                                                      <option value="">Selecione um estado</option>
                                                      <option value="AC">Acre</option>
                                                      <option value="AL">Alagoas</option>
                                                      <option value="AP">Amapá</option>
                                                      <option value="AM">Amazonas</option>
                                                      <option value="BA">Bahia</option>
                                                      <option value="CE">Ceará</option>
                                                      <option value="DF">Distrito Federal</option>
                                                      <option value="ES">Espírito Santo</option>
                                                      <option value="GO">Goiás</option>
                                                      <option value="MA">Maranhão</option>
                                                      <option value="MT">Mato Grosso</option>
                                                      <option value="MS">Mato Grosso do Sul</option>
                                                      <option value="MG">Minas Gerais</option>
                                                      <option value="PA">Pará</option>
                                                      <option value="PB">Paraíba</option>
                                                      <option value="PR">Paraná</option>
                                                      <option value="PE">Pernambuco</option>
                                                      <option value="PI">Piauí</option>
                                                      <option value="RJ">Rio de Janeiro</option>
                                                      <option value="RN">Rio Grande do Norte</option>
                                                      <option value="RS">Rio Grande do Sul</option>
                                                      <option value="RO">Rondônia</option>
                                                      <option value="RR">Roraima</option>
                                                      <option value="SC">Santa Catarina</option>
                                                      <option value="SP">São Paulo</option>
                                                      <option value="SE">Sergipe</option>
                                                      <option value="TO">Tocantins</option>
                                                      <option value="EX">Estrangeiro</option>
                                                   </select>
                                                </div>

                                                <div class="form-group">
                                                   <label>CEP</label>
                                                   <input type="text" class="form-control" id="clientesCEP" placeholder="Número do CEP" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>CRECI</label>
                                                   <input type="text" class="form-control" id="clientesCorretor" placeholder="Número do CRECI" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Observações</label>
                                                   <textarea class="form-control" id="clientesObservacoes" placeholder="Digite observações nesse campo" rows="7"></textarea>
                                                </div>

                                                <div class="form-group text-right">
                                                 <button type="submit" class="btn btn-primary" id="btnAddCorretores">Adicionar</button>
                                              </div>


                                            </div>
                                         </div>

                                            

                                            

                                         </form>

                                  
                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

        app.helpers.carregarMascaras();

    }




    editarCorretores(){

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-editarCorretores" view-name="view-editarCorretores">

                      <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Editar dados do corretor</h4>

                                    <div class="placeholder">

                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->

                                    </div>

                                    <div class="form">
                                         
                                         <form method="post" action="javascript:void(0)" onsubmit="app.procEditarCorretores(event)">
                                            
                                            <input type="hidden" id="clientesId" value="" />

                                            <div class="row">
                                              <div class="col-xl-6 col-lg-6 col-12">

                                                  <div class="form-group">
                                                     <label>Nome</label>
                                                     <input type="text" class="form-control" id="clientesNome" placeholder="Nome completo do corretor" required />
                                                  </div>

                                                  <div class="form-group">
                                                     <label>CPF</label>
                                                     <input type="text" class="form-control" id="clientesCpf" placeholder="CPF" required />
                                                  </div>

                                                  <div class="form-group">
                                                     <label>CNPJ</label>
                                                     <input type="text" class="form-control" id="clientesCnpj" placeholder="CNPJ"  />
                                                  </div>

                                                  <div class="form-group">
                                                     <label>E-mail</label>
                                                     <input type="email" class="form-control" id="clientesEmail" placeholder="E-mail de contato do corretor" required />
                                                  </div>

                                                  <div class="form-group">
                                                     <label>Celular</label>
                                                     <input type="text" class="form-control" id="clientesCelular" placeholder="DDD + número" required />
                                                  </div>

                                                  <div class="form-group">
                                                     <label>Telefone</label>
                                                     <input type="text" class="form-control" id="clientesTelefone" placeholder="DDD + número" />
                                                  </div>


                                                  <div class="form-group">
                                                     <label>Senha de acesso</label>
                                                     <input type="password" class="form-control" id="clientesSenha" placeholder="Senha de acesso" required />
                                                  </div>
                                            

                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-12">

                                                    <div class="form-group">
                                                       <label>Endereço</label>
                                                       <input type="text" class="form-control" id="clientesEndereco" placeholder="Endereço" required />
                                                    </div>

                                                    <div class="form-group">
                                                       <label>Bairro</label>
                                                       <input type="text" class="form-control" id="clientesBairro" placeholder="Bairro" required />
                                                    </div>

                                                    <div class="form-group">
                                                       <label>Cidade</label>
                                                       <input type="text" class="form-control" id="clientesCidade" placeholder="Cidade" required />
                                                    </div>

                                                    <div class="form-group">
                                                       <label>Estado</label>
                                                       <select class="form-control" id="clientesEstado">
                                                          <option value="">Selecione um estado</option>
                                                          <option value="AC">Acre</option>
                                                          <option value="AL">Alagoas</option>
                                                          <option value="AP">Amapá</option>
                                                          <option value="AM">Amazonas</option>
                                                          <option value="BA">Bahia</option>
                                                          <option value="CE">Ceará</option>
                                                          <option value="DF">Distrito Federal</option>
                                                          <option value="ES">Espírito Santo</option>
                                                          <option value="GO">Goiás</option>
                                                          <option value="MA">Maranhão</option>
                                                          <option value="MT">Mato Grosso</option>
                                                          <option value="MS">Mato Grosso do Sul</option>
                                                          <option value="MG">Minas Gerais</option>
                                                          <option value="PA">Pará</option>
                                                          <option value="PB">Paraíba</option>
                                                          <option value="PR">Paraná</option>
                                                          <option value="PE">Pernambuco</option>
                                                          <option value="PI">Piauí</option>
                                                          <option value="RJ">Rio de Janeiro</option>
                                                          <option value="RN">Rio Grande do Norte</option>
                                                          <option value="RS">Rio Grande do Sul</option>
                                                          <option value="RO">Rondônia</option>
                                                          <option value="RR">Roraima</option>
                                                          <option value="SC">Santa Catarina</option>
                                                          <option value="SP">São Paulo</option>
                                                          <option value="SE">Sergipe</option>
                                                          <option value="TO">Tocantins</option>
                                                          <option value="EX">Estrangeiro</option>
                                                       </select>
                                                    </div>

                                                    <div class="form-group">
                                                       <label>CEP</label>
                                                       <input type="text" class="form-control" id="clientesCEP" placeholder="Número do cep" required />
                                                    </div>

                                                    <div class="form-group">
                                                       <label>CRECI</label>
                                                       <input type="text" class="form-control" id="clientesCorretor" placeholder="Número do CRECI" required />
                                                    </div>

                                                    <div class="form-group">
                                                       <label>Observações</label>
                                                       <textarea class="form-control" id="clientesObservacoes" placeholder="Digite observações nesse campo" rows="7"></textarea>
                                                    </div>

                                                    <div class="form-group">
                                                       <button type="submit" class="btn btn-primary" id="btnEditarCorretores">Atualizar</button>
                                                    </div>

                                              </div>
                                            </div>


                                         </form>

                                    </div>

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();
        app.helpers.carregarMascaras();

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

           $(".sidemenu nav ul li").removeClass("ativo");
           $("#menuTipoImoveis").addClass("ativo");

           this._content.html(`
            
              <div class="container">
                 
                   <div class="row view-acessosAdmin" view-name="view-acessosAdmin">
                       <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                           
                           <!-- TÍTULOS DA PÁGINAS --> 
                           <h4>Tipo de Imóveis</h4>
                           <p>Tipo de imóveis disponíveis na plataforma</p>
                           <p>&nbsp;</p>
                           <!-- TÍTULOS DA PÁGINAS -->
                           
                           <div class="row">
                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 offset-xl-7 offset-lg-7 offset-md-7 offset-sm-7" style="padding-right:0px;">
                                     
                                     <a href="javascript:void(0)" style="float: right;" onclick="app.adicionarTipoImoveis()" class="btn btn-primary" title="Adicionar novo tipo de imóvel">
                                       <i class="fa fa-plus"></i> Adicionar
                                     </a>

                                     <!-- BUSCA AVULSA -->
                                     <div class="busca-avulsa">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                   <span class="input-group-text">
                                                      <i class="fa fa-search" aria-hidden="true"></i>
                                                   </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Faça uma pesquisa" onkeyup="app.filtrotabelaTipoImoveis();" id="filtroTabelaTipoImoveis">
                                            </div>
                                     </div>
                                     <!-- BUSCA AVULSA -->
                                     
                              </div>
                           </div>
                           <div class="table-responsive">
                               
                               <table class="table table-striped">
                                   <thead>
                                      <th>#</th>
                                      <th>Nome</th>
                                      <th style="width:175px;">Ações</th>
                                   </thead>

                                   <tbody id="conteudoTipoImoveis">
                                      ${this.carregandoTabela}
                                   </tbody>

                               </table>

                           </div>
                           
                           <div class="text-right">
                              <a href="javascript:void(0)" onclick="app.adicionarTipoImoveis()" class="btn btn-primary" title="Adicionar novo tipo de imóvel">
                                 <i class="fa fa-plus"></i> Adicionar
                              </a>
                              
                           </div>


                       </div>
                   </div>

              </div>

        `);

        this.animarTransicao();
      

    }
    popularTipoImoveis(dados){

         if(dados.sucesso=="200"){

             $(".carregandoTabela").hide(0);

             if(dados.imovel_tipo.length==0){

                aviso("Sem informações para mostrar","Nenhum tipo de imóvel cadastrado");
             
             }
         
             $("#conteudoTipoImoveis").html(`
                  
                   ${dados.imovel_tipo.map((n) => {

                          return `
                            <tr id="linha${n.id}">
                              <td>${n.id}</td>
                              <td>${n.nome}</td>
                              <td style="width:175px;">
                                  
                                  <a href="javascript:void(0)" onclick="app.perguntarRemoverTipoImoveis(${n.id})" class="btn btn-warning btn-sm" title="Apagar">
                                    <i class="fa fa-trash"></i>
                                  </a>

                                  <a href="javascript:void(0)" onclick="app.editarTipoImoveis(${n.id})" class="btn btn-primary btn-sm" title="Editar">
                                     <i class="fa fa-pencil"></i>
                                  </a>

                                  <a href="javascript:void(0)" onclick="app.CamposImoveis(${n.id},'${n.nome}')" class="btn btn-primary btn-sm" title="Campos desse tipo de imóvel">
                                     <i class="fa fa-database"></i> campos
                                  </a>

                              </td>
                            </tr>
                          `

                    }).join('')}


             `);

         }else{

          aviso("Oops! Algo deu errado","Não conseguimos recuperar as informações, tente novamente em alguns minutos.");
         
         }

    }
    adicionarTipoImoveis(tipoImoveis){

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-adicionarTipoImoveis" view-name="view-adicionarTipoImoveis">

                      <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Adicionar tipo de Imóvel</h4>

                                         <form method="post" action="javascript:void(0)" onsubmit="app.procAdicionarTipoImoveis(event)">
                                            
                                            <div class="row">
                                              <div class="col-xl-6 col-lg-6 col-12">

                                                <div class="form-group">
                                                   <label>Nome do tipo de imóvel</label>
                                                   <input type="text" class="form-control" id="tipoImoveisNome" placeholder="Nome do tipo de imóvel" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Visivel nos filtros?</label>
                                                   <select class="form-control" name="tipoImoveisFiltro" id="tipoImoveisFiltro">
                                                       <option value="nao">Não</option>
                                                       <option value="sim">Sim</option>
                                                   </select>
                                                </div>

                                                <div class="form-group">
                                                   <label>Ligação com outro tipo de imóvel?</label>
                                                   <select class="form-control" name="tipoImoveisLigacao" id="tipoImoveisLigacao">
                                                       <option value="nao">Não</option>
                                                       <option value="sim">Sim</option>
                                                   </select>
                                                </div>

                                                <div class="form-group">
                                                   <label>Tipo imóvel ligação</label>
                                                   <select class="form-control" name="tipoImoveisIdLigacao" id="tipoImoveisIdLigacao">
                                                       <option value="">Selecione se aplicável</option>
                                                   </select>
                                                </div>

                                                <div class="form-group">
                                                    <label>Ligação é obrigatória?</label>
                                                    <select class="form-control" name="tipoImoveisLigacaoObrigatorio" id="tipoImoveisLigacaoObrigatorio">
                                                       <option value="">Selecione se aplicável</option>
                                                       <option value="nao">Não</option>
                                                       <option value="sim">Sim</option>
                                                   </select>
                                                </div>

                                                <div class="form-group text-right">
                                                 <button type="submit" class="btn btn-primary" id="btnAddItem">Adicionar</button>
                                               </div>

                                                

                                            </div>

                                        
                                         </div>
    

                                         </form>

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

        app.helpers.carregarMascaras();

    }
    

    popularTipoImoveisParaLigacao(tipoImoveis){

        $("#tipoImoveisIdLigacao").append(`
                  
                   ${tipoImoveis.imovel_tipo.map((n) => {
                         
                          return `
                            <option value="${n.id}">${n.nome}</option>
                          `

                    }).join('')}

             `);

    }



    editarTipoImoveis(){

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-editarTipoImoveis" view-name="view-editarTipoImoveis">

                      <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Editar dados do tipo de imóvel</h4>

                                    <div class="placeholder">

                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->

                                    </div>

                                    <div class="form">
                                         
                                         <form method="post" action="javascript:void(0)" onsubmit="app.procEditarTipoImoveis(event)">
                                            
                                            <input type="hidden" id="tipoImoveisId" value="" />

                                            <div class="row">
                                              <div class="col-xl-6 col-lg-6 col-12">

                                                  <div class="form-group">
                                                   <label>Nome do tipo de imóvel</label>
                                                   <input type="text" class="form-control" id="tipoImoveisNome" placeholder="Nome do tipo de imóvel" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Visivel nos filtros?</label>
                                                   <select class="form-control" name="tipoImoveisFiltro" id="tipoImoveisFiltro">
                                                       <option value="nao">Não</option>
                                                       <option value="sim">Sim</option>
                                                   </select>
                                                </div>

                                                <div class="form-group">
                                                   <label>Ligação com outro tipo de imóvel?</label>
                                                   <select class="form-control" name="tipoImoveisLigacao" id="tipoImoveisLigacao">
                                                       <option value="nao">Não</option>
                                                       <option value="sim">Sim</option>
                                                   </select>
                                                </div>

                                                <div class="form-group">
                                                   <label>Tipo imóvel ligação</label>
                                                   <select class="form-control" name="tipoImoveisIdLigacao" id="tipoImoveisIdLigacao">
                                                       <option value="">Selecione se aplicável</option>
                                                   </select>
                                                </div>

                                                <div class="form-group">
                                                    <label>Ligação é obrigatória?</label>
                                                    <select class="form-control" name="tipoImoveisLigacaoObrigatorio" id="tipoImoveisLigacaoObrigatorio">
                                                       <option value="">Selecione se aplicável</option>
                                                       <option value="nao">Não</option>
                                                       <option value="sim">Sim</option>
                                                   </select>
                                                </div>

                                                <div class="form-group text-right">
                                                 <button type="submit" class="btn btn-primary" id="btnEditarItem">Editar</button>
                                               </div>
                                            

                                            </div>
                                            
                                            </div>


                                         </form>

                                    </div>

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();
        app.helpers.carregarMascaras();

    }




    CamposImoveis(idTipoImovel,nomeTipoImovel){


        this._content.html(`
               
               <div class="container">
               
                 <div class="row view-editarTipoImoveis" view-name="view-editarTipoImoveis">

                      <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Editar campos de cadastro desse tipo de imóvel: ${nomeTipoImovel}</h4>
                                    <p>Caso queira remover um campo ou desistiu de adicioná-lo, é só deixar o campo "Nome do campo" em branco<br>
                                       Campos como nome do imóvel, descrição e endereço, não precisam ser cadastrados por que eles serão padrões para todos os tipos de imóveis.</p>


                                    <div class="form" style="display:block;padding-top:30px;">
                                         
                                         <form id="formCamposTipoImoveis" method="post" action="javascript:void(0)" onsubmit="app.procEditarCamposTipoImoveis(event)">
                                            
                                            <input type="hidden" name="tipoImoveisId" id="tipoImoveisId" value="${idTipoImovel}" />

                                            <!-- AREA APPEND -->
                                            <div class="appendCadastradosCampos"></div>
                                            <!-- AREA APPEND -->
                                            
                                            <!-- LINHA -->
                                            <div class="row">

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Nome do campo</label>
                                                           <input type="text" class="form-control" name="CamposImoveisNomeNew[]" placeholder="Nome do campo" />
                                                        </div>

                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Tipo de campo</label>
                                                           <select class="form-control" name="CamposImoveisTipoNew[]">
                                                               <option value="curto">Texto curto</option>
                                                               <option value="longo">Texto longo</option>
                                                           </select>
                                                        </div>

                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Obrigatoriedade</label>
                                                           <select class="form-control" name="CamposImoveisObrigatorioNew[]">
                                                               <option value="nao">Não</option>
                                                               <option value="sim">Sim</option>
                                                           </select>
                                                        </div>

                                                    </div>

                                            
                                            </div>
                                            <!-- LINHA -->

                                            <!-- AREA APPEND -->
                                            <div class="appendNewCampos"></div>
                                            <!-- AREA APPEND -->

                                            <!-- LINHA -->
                                            <div class="row">
                                                <div class="col-12">
                                                   <a href="javascript:void(0)" class="btn btn-default btn-sm" onclick="app.appendNewCamposImoveis()" title="Adicionar campo">
                                                       <i class="fa fa-plus"></i> adicionar campo
                                                   </a>
                                                </div>
                                            </div>
                                            <!-- LINHA -->
                                            

                                            <p>&nbsp;</p>
                                            
                                            <!-- LINHA -->
                                            <div class="row">

                                               <div class="col-12">
                                                
                                                    <div class="form-group text-right">
                                                     <button type="submit" class="btn btn-primary" id="btnEditarItem">Editar campos do tipo de imóvel</button>
                                                   </div>

                                               </div>

                                            </div>
                                            <!-- LINHA -->


                                         </form>

                                    </div>

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();
        


    }

    appendNewCamposImoveis(){

      console.log("INSERINDO NOVOS CAMPOS");

      $(".appendNewCampos").append(`

                                            <!-- LINHA -->
                                            <div class="row">

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Nome do campo</label>
                                                           <input type="text" class="form-control" name="CamposImoveisNomeNew[]" placeholder="Nome do campo" />
                                                        </div>

                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Tipo de campo</label>
                                                           <select class="form-control" name="CamposImoveisTipoNew[]">
                                                               <option value="curto">Texto curto</option>
                                                               <option value="longo">Texto longo</option>
                                                           </select>
                                                        </div>

                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Obrigatoriedade</label>
                                                           <select class="form-control" name="CamposImoveisObrigatorioNew[]">
                                                               <option value="nao">Não</option>
                                                               <option value="sim">Sim</option>
                                                           </select>
                                                        </div>

                                                    </div>

                                            
                                            </div>
                                            <!-- LINHA -->


      `);

    }

    appendCadastradosCamposImoveis(campos){
        
        $(".appendCadastradosCampos").html(`
                  
                   ${campos.map((n) => {

                          return `
                                            <!-- LINHA -->
                                            <div class="row">

                                                    <input type="hidden" name="CamposImoveisId[]" value="${n.id}" />

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Nome do campo</label>
                                                           <input type="text" class="form-control" name="CamposImoveisNome[]" placeholder="Nome do campo" value="${n.nome_campo}" />
                                                        </div>

                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Tipo de campo</label>
                                                           <select class="form-control" name="CamposImoveisTipo[]">
                                                               <option value="curto" ${function(){if(n.tipo_campo=="curto"){ return `selected`; }}}>Texto curto</option>
                                                               <option value="longo" ${function(){if(n.tipo_campo=="longo"){ return `selected`; }}}>Texto longo</option>
                                                           </select>
                                                        </div>

                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Obrigatoriedade</label>
                                                           <select class="form-control" name="CamposImoveisObrigatorio[]">
                                                               <option value="nao" ${function(){if(n.obrigatorio=="nao"){ return `selected`; }}}>Não</option>
                                                               <option value="sim" ${function(){if(n.obrigatorio=="sim"){ return `selected`; }}}>Sim</option>
                                                           </select>
                                                        </div>

                                                    </div>

                                            
                                            </div>
                                            <!-- LINHA -->
                            
                          `

                    }).join('')}`);


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

           $(".sidemenu nav ul li").removeClass("ativo");
           $("#menuImoveis").addClass("ativo");

           this._content.html(`
            
              <div class="container">
                 
                   <div class="row view-acessosAdmin" view-name="view-acessosAdmin">
                       <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                           
                           <!-- TÍTULOS DA PÁGINAS --> 
                           <h4>Imóveis</h4>
                           <p>Imóveis disponíveis na plataforma</p>
                           <p>&nbsp;</p>
                           <!-- TÍTULOS DA PÁGINAS -->
                           
                           <div class="row">
                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 offset-xl-7 offset-lg-7 offset-md-7 offset-sm-7" style="padding-right:0px;">
                                     
                                     <a href="javascript:void(0)" style="float: right;" onclick="app.adicionarImoveis()" class="btn btn-primary" title="Adicionar novo tipo de imóvel">
                                       <i class="fa fa-plus"></i> Adicionar
                                     </a>

                                     <!-- BUSCA AVULSA -->
                                     <div class="busca-avulsa">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                   <span class="input-group-text">
                                                      <i class="fa fa-search" aria-hidden="true"></i>
                                                   </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Faça uma pesquisa" onkeyup="app.filtrotabelaImoveis();" id="filtroTabelaImoveis">
                                            </div>
                                     </div>
                                     <!-- BUSCA AVULSA -->
                                     
                              </div>
                           </div>
                           <div class="table-responsive">
                               
                               <table class="table table-striped">
                                   <thead>
                                      <th>#</th>
                                      <th>Nome</th>
                                      <th style="width:150px;">Ações</th>
                                   </thead>

                                   <tbody id="conteudoImoveis">
                                      ${this.carregandoTabela}
                                   </tbody>

                               </table>

                           </div>
                           
                           <div class="text-right">
                              <a href="javascript:void(0)" onclick="app.adicionarImoveis()" class="btn btn-primary" title="Adicionar novo imóvel">
                                 <i class="fa fa-plus"></i> Adicionar
                              </a>
                              
                           </div>


                       </div>
                   </div>

              </div>

        `);

        this.animarTransicao();
      

    }



    popularImoveis(dados){

         if(dados.sucesso=="200"){

             $(".carregandoTabela").hide(0);

             if(dados.imoveis.length==0){

                aviso("Sem informações para mostrar","Nenhum imóvel cadastrado");
             
             }
         
             $("#conteudoImoveis").html(`
                  
                   ${dados.imoveis.map((n) => {

                          return `
                            <tr id="linha${n.id}">
                              <td>${n.id}</td>
                              <td>${n.nome}</td>
                              <td style="width:150px;">
                                  
                                  <a href="javascript:void(0)" onclick="app.perguntarRemoverImoveis(${n.id})" class="btn btn-warning btn-sm" title="Apagar">
                                    <i class="fa fa-trash"></i>
                                  </a>

                                  <a href="javascript:void(0)" onclick="app.editarImoveis(${n.id})" class="btn btn-primary btn-sm" title="Editar">
                                     <i class="fa fa-pencil"></i>
                                  </a>

                              </td>
                            </tr>
                          `

                    }).join('')}


             `);

         }else{

          aviso("Oops! Algo deu errado","Não conseguimos recuperar as informações, tente novamente em alguns minutos.");
         
         }

    }
    adicionarImoveis(tipoImoveis){

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-adicionarTipoImoveis" view-name="view-adicionarTipoImoveis">

                      <div class="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Adicionar Imóvel</h4>
                                    <p>&nbsp;</p>

                                    <form id="formAddImoveis" method="post" action="javascript:void(0)" onsubmit="app.procAdicionarImoveis(event)">
                                            
                                        <!-- ROW -->
                                        <div class="row">
                                        
                                              <!-- COL 9 -->
                                              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 no-padding-left-desktop">

                                                  <div class="row">
                                                      
                                                      <!-- COLUNA UM -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Nome do imóvel</label>
                                                             <input type="text" class="form-control" name="imoveisNome" id="imoveisNome" placeholder="Nome do imóvel" required />
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA UM -->

                                                      <!-- COLUNA DOIS -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>Tipo de imóvel</label>
                                                             <select class="form-control" required name="imoveisTipo" id="imoveisTipo" onchange="app.buscarCamposImoveis(this.value)">
                                                                <option value="">Selecione uma opção</option>
                                                             </select>
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA DOIS -->

                                                  </div>

                                                  
                                                  <!-- APPEND CAMPOS -->
                                                  <div class="row" id="appendCamposCadastroImoveis">
                                                  </div>
                                                  <!-- APPEND CAMPOS -->

                                                  <div class="row" id="defaultCamposCadastroImoveis" style="display:none;">
                                                      
                                                      <!-- COLUNA UM -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Descrição curta (resumo)</label>
                                                             <textarea class="form-control" rows="3" name="desc_curta" placeholder="Descrição curta do imóvel"></textarea>
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA UM -->

                                                      <!-- COLUNA DOIS -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>Descrição longa </label>
                                                             <textarea class="form-control" rows="3" name="desc_longa" placeholder="Descrição longa do imóvel"></textarea>
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA DOIS -->



                                                      <!-- COLUNA UM -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>CEP</label>
                                                             <input type="text" class="form-control" name="cep" placeholder="Código postal" id="cepCadastrarImovel" onchange="app.buscaCep(this)" />
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA UM -->

                                                      <!-- COLUNA DOIS -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>Logradouro </label>
                                                             <input type="text" class="form-control" name="endereco" placeholder="Endereço" id="imovelEndereco" />
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA DOIS -->


                                                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>Bairro </label>
                                                             <input type="text" class="form-control" name="bairro" placeholder="Bairro" id="imovelBairro" />
                                                          </div>

                                                      </div>
                                                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>Cidade </label>
                                                             <input type="text" class="form-control" name="cidade" placeholder="Cidade" id="imovelCidade" />
                                                          </div>

                                                      </div>
                                                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>UF </label>
                                                             <select class="form-control" name="estado" id="imovelEstado">
                                                                <option value="">Selecione uma opção</option>
                                                                <option value="AC">Acre</option>
                                                                <option value="AL">Alagoas</option>
                                                                <option value="AP">Amapá</option>
                                                                <option value="AM">Amazonas</option>
                                                                <option value="BA">Bahia</option>
                                                                <option value="CE">Ceará</option>
                                                                <option value="DF">Distrito Federal</option>
                                                                <option value="ES">Espírito Santo</option>
                                                                <option value="GO">Goiás</option>
                                                                <option value="MA">Maranhão</option>
                                                                <option value="MT">Mato Grosso</option>
                                                                <option value="MS">Mato Grosso do Sul</option>
                                                                <option value="MG">Minas Gerais</option>
                                                                <option value="PA">Pará</option>
                                                                <option value="PB">Paraíba</option>
                                                                <option value="PR">Paraná</option>
                                                                <option value="PE">Pernambuco</option>
                                                                <option value="PI">Piauí</option>
                                                                <option value="RJ">Rio de Janeiro</option>
                                                                <option value="RN">Rio Grande do Norte</option>
                                                                <option value="RS">Rio Grande do Sul</option>
                                                                <option value="RO">Rondônia</option>
                                                                <option value="RR">Roraima</option>
                                                                <option value="SC">Santa Catarina</option>
                                                                <option value="SP">São Paulo</option>
                                                                <option value="SE">Sergipe</option>
                                                                <option value="TO">Tocantins</option>
                                                             </select>
                                                          </div>
                                                      </div>


                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                             <div class="form-group">
                                                                <label>Iframe mapa </label>
                                                                <textarea class="form-control" rows="3" name="iframe_mapa" placeholder="Descrição longa do imóvel"></textarea>
                                                             </div>


                                                      </div>

                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                             <div class="form-group">
                                                                <label>JS adicional </label>
                                                                <textarea class="form-control" rows="3" name="custom_js" placeholder="Código adicional JS"></textarea>
                                                             </div>

                                                      </div>


                                                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 no-padding-left-desktop">
                                                          <div class="form-group">
                                                             <label>Campo Pagto 1</label>
                                                             <select class="form-control" name="id_pagto1" id="id_pagto1">
                                                                <option value="">Selecione uma opção</option>
                                                             </select>
                                                          </div>
                                                      </div>

                                                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 no-padding-left-desktop">
                                                          <div class="form-group">
                                                             <label>Campo Pagto 2</label>
                                                             <select class="form-control" name="id_pagto2" id="id_pagto2">
                                                                <option value="">N/A</option>
                                                             </select>
                                                          </div>
                                                      </div>

                                                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 no-padding-left-desktop">
                                                          <div class="form-group">
                                                             <label>Campo Pagto 3</label>
                                                             <select class="form-control" name="id_pagto3" id="id_pagto3">
                                                                <option value="">N/A</option>
                                                             </select>
                                                          </div>
                                                      </div>

                                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>Descrição do pagamento </label>
                                                             <input type="text" class="form-control" name="desc_pagto" placeholder="Descrição do pagamento" id="desc_pagto" />
                                                          </div>

                                                      </div>




                                                </div>
                                                      





                                                  

                                                  

                                                  <!-- BOTAO DE ENVIAR -->
                                                  <div class="row">
                                                      <div class="col-12 no-padding-left-desktop">
                                                           <div class="form-group text-right">
                                                             <button type="submit" disabled class="btn btn-primary" id="btnAddItem">Adicionar</button>
                                                           </div>
                                                      </div>
                                                  </div>
                                                  <!-- BOTAO DE ENVIAR -->

                                                  </form>

                                              </div>
                                              <!-- COL 9 -->
                                              <!-- COL 4 -->
                                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 no-padding-left-desktop galeria-imovel">
                                                  <h4 style="font-size: 15px;margin-bottom: 14px;text-align: center;">Imagens do Imóvel</h4>
                                                  
                                                  <div class="card">
                                                     <p style="text-align:center;font-size:12px;">
                                                         Nenhuma imagem ainda
                                                     </p>
                                                  </div>

                                                  <p style="text-align:right;padding-top:12.5px;">
                                                      <a href="javascript:void(0)" title="Adicionar imagens" onclick="app.defineDestinyImages(1)" data-toggle="modal" data-target="#modalUploadImages" class="btn btn-default">
                                                         Adicionar imagens
                                                      </a>
                                                  </p>

                                              </div>
                                              <!-- COL 4 -->

                                        </div> 
                                        <!-- ROW -->

                                    

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

        app.helpers.carregarMascaras();

    }

    popularTipoImoveisParaCadastroImoveis(dados){

       $("#imoveisTipo").append(`

            ${dados.imovel_tipo.map((n) => {
                  return `
                      <option value="${n.id}">${n.nome}</option>
                  `
            }).join('')}

      `);

       



    }

    popularCampos(dados){

      $("#btnAddItem").removeAttr("disabled");
      $("#defaultCamposCadastroImoveis").fadeIn(500);

      // LIMPAR OS CAMPOS ANTES DA IMPRESSAO
      $("#appendCamposCadastroImoveis").html("");
      $("#id_pagto1").html(`<option value="">Selecione uma opção</option>`);
      $("#id_pagto2").html(`<option value="">N/A</option>`);
      $("#id_pagto3").html(`<option value="">N/A</option>`);
      
      var required = "";

      $("#appendCamposCadastroImoveis").append(`

            ${dados.campos.map((n) => {

                  if(n.obrigatorio=="sim"){ required = "required"; }else{ required = ""; } 
                  
                  if(n.tipo_campo=="curto"){
                     return `
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 form-group no-padding-left-desktop">
                          <label>${n.nome_campo}</label>
                          <input type="text" class="form-control" name="${n.id}" placeholder="${n.nome_campo}" ${required} />
                        </div>
                     `
                  }

                  if(n.tipo_campo=="longo"){
                     return `
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 form-group no-padding-left-desktop">
                          <label>${n.nome_campo}</label>
                          <textarea rows="3" class="form-control" name="${n.id}" placeholder="${n.nome_campo}" ${required} />
                        </div>
                     `
                  }
                  
            }).join('')}

      `);

      $("#id_pagto1").append(`

            ${dados.campos.map((n) => {
                  return `
                      <option value="${n.id}">${n.nome_campo}</option>
                  `
            }).join('')}

      `);

       $("#id_pagto2").append(`

            ${dados.campos.map((n) => {
                  return `
                      <option value="${n.id}">${n.nome_campo}</option>
                  `
            }).join('')}

      `);

       $("#id_pagto3").append(`

            ${dados.campos.map((n) => {
                  return `
                      <option value="${n.id}">${n.nome_campo}</option>
                  `
            }).join('')}

      `);

    }

    popularCamposEndereco(endereco){

      $("#imovelEndereco").val(endereco.logradouro);
      $("#imovelBairro").val(endereco.bairro);
      $("#imovelCidade").val(endereco.localidade);
      $("#imovelEstado").val(endereco.uf);

    }


    editarImoveis(){

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-editarTipoImoveis" view-name="view-editarTipoImoveis">

                      <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Editar imóvel</h4>

                                    <div class="placeholder">

                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->

                                    </div>

                                    <div class="form">
                                         
                                         <form id="formEditarImoveis" method="post" action="javascript:void(0)" onsubmit="app.procEditarImoveis(event)">
                                            
                                            <input type="hidden" id="imoveisId" value="" />

                                            
                                                <div class="form-group text-right">
                                                 <button type="submit" class="btn btn-primary" id="btnEditarItem">Editar</button>
                                               </div>
                                            

                                         </form>

                                    </div>

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();
        app.helpers.carregarMascaras();

    }













/**
*  ------------------------------------------------------------------------------------------------
*
*
*   OUTRAS VIEWS
*
*
*  ------------------------------------------------------------------------------------------------
*/
    view2(){

            this._content.html(`
               
               <div class="container">
               
                 <div class="row view-editarPerfil" view-name="view-editarPerfil">

                      <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                         <h2>View 2</h2>
                         <p>Essa é a segunda view</p>
                      </div>

                 </div>

               </div>
            
            `);

            this.animarTransicao();
        
    }

    view3(){

            this._content.html(`
            
               <div class="row view-3" view-name="view-3">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>View 3</h2>
                     <p>Esse é a terceira view</p>
                  </div>
               </div>
            
            `);

            this.animarTransicao();
        
    }


    viewLogin(){

            this._content.html(`
             <div class="container">
               <div class="row view-login" view-name="view-login">
                  
                     <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 offset-xl-4 offset-lg-4 offset-md-4 offset-sm-4 col-12 card wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     

                     <h2>
                        <img src="assets/images/logo.png" alt="Rômulo Imóveis" />
                     </h2>
                     <p></p>
                     
                     <form method="post" action="javascript:void(0)" onsubmit="app.procLoginSms(event)">
                        <div class="form-group">
                           <label>Seu celular com DDD</label>
                           <input type="tel" class="form-control" id="loginUsuario" placeholder="Digite o número do seu celular" required />
                        </div>
                        

                        <div class="form-group">
                           <button class="btn btn-primary" id="btnViewLogin">
                              Próximo
                           </button>
                        </div>
                        
                     </form>
                     
                     <!--
                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.esqueciMinhaSenha()" title="Esqueci minha senha">
                                Esqueci minha senha
                            </a>
                          </div>

                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.cadastro()" title="Criar uma conta">
                                Criar uma conta
                            </a>
                       </div>
                     -->

                  </div>
                  </div>
               </div>
            
            `);

            $("footer").hide();

            this.animarTransicao();
            app.helpers.carregarMascaras();
        
    }

    viewCodigoSms(){

        this._content.html(`

            <div class="container">
               <div class="row view-login" view-name="view-login">

                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 offset-xl-4 offset-lg-4 offset-md-4 offset-sm-4 col-12 card wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>
                        <img src="assets/images/logo.png" alt="Rômulo Imóveis" />
                     </h2>
                     <p>Insira o código que recebeu por SMS</p>
                     
                     <form method="post" action="javascript:void(0)" onsubmit="app.procVerificarSms(event)">
                        <div class="form-group">
                           <label>Ele irá chegar em até 2 minutos</label>
                           <input type="tel" class="form-control text-center" id="codigoSms" placeholder="Digite os cinco digitos que recebeu via SMS" required />
                        </div>
                        
                        <div class="form-group">
                           <button class="btn btn-primary text-center" id="btnConfirmarCodigo">
                              Confirmar código
                           </button>
                        </div>
                        
                     </form>
                     
                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.viewLoginEmailSenha()" title="Prefiro entrar usando e-mail e senha">
                                Prefiro entrar usando e-mail e senha
                            </a>
                          </div>

                       <!--
                         <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.cadastro()" title="Criar uma conta">
                                Criar uma conta
                            </a>
                         </div>
                       -->
                     

                  </div>
               </div>
            
            `);


            $("footer").hide();

            this.animarTransicao();
            app.helpers.carregarMascaras();

    }

    viewLoginEmailSenha(){

      this._content.html(`
             
             <div class="container">
               <div class="row view-login" view-name="view-login">
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 offset-xl-4 offset-lg-4 offset-md-4 offset-sm-4 col-12 card wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>
                        <img src="assets/images/logo.png" alt="Rômulo Imóveis" />
                     </h2>
                     <p>Entrar com o seu e-mail e senha</p>
                     
                     <form method="post" action="javascript:void(0)" onsubmit="app.procLogin(event)">
                       
                        <div class="form-group">
                           <label>Seu email de cadastro</label>
                           <input type="text" class="form-control" id="loginUsuario" placeholder="Seu e-mail ou usuário" required />
                        </div>

                        <div class="form-group">
                           <label>Senha</label>
                           <input type="password" class="form-control" id="loginSenha" placeholder="Sua senha cadastrada" required />
                        </div>
                        
                        <div class="form-group">
                           <button class="btn btn-primary" id="btnLoginEmailSenha">
                              Login
                           </button>
                        </div>
                        
                     </form>
                     
                    
                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.esqueciMinhaSenha()" title="Esqueci minha senha">
                                Esqueci minha senha
                            </a>
                          </div>
                      <!--
                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.cadastro()" title="Criar uma conta">
                                Criar uma conta
                            </a>
                       </div>
                     -->

                  </div>
               </div>
               </
            
            `);

            $("footer").hide();

            this.animarTransicao();

    }


    viewCadastro(){

      this._content.html(`
           
           <div class="container">
            <div class="row view-login" view-name="view-login">
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 offset-xl-4 offset-lg-4 offset-md-4 offset-sm-4 col-12 card wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                  <h2>
                        <img src="assets/images/logo.png" alt="Rômulo Imóveis" />
                     </h2>
                  <p>Faça seu cadastro na plataforma</p>
                  
                  <form method="post" action="javascript:void(0)" onsubmit="app.procCadastro(event)">
                     <input type="hidden" id="cadastroCelular" name="celularCadastro" value="${localStorage.getItem("celularCadastro")}" />
                     <div class="form-group">
                        <label>Seu Nome</label>
                        <input type="text" id="cadastroNome" onclick="ativarFormularioFlutuante('#cadastroNome','Seu nome completo')" class="form-control" placeholder="Seu nome completo" required />
                     </div>
                     <div class="form-group">
                        <label>Seu login</label>
                        <input type="email" id="cadastroEmail" onclick="ativarFormularioFlutuante('#cadastroEmail','Seu e-mail (será o login)')" class="form-control" placeholder="Seu e-mail ou usuário" required />
                     </div>
                     <div class="form-group">
                        <label>Sua senha</label>
                        <input type="password" id="cadastroSenha" class="form-control" placeholder="Sua senha de acesso" required />
                     </div>
                     <div class="form-group">
                        <button class="btn btn-primary" id="btnViewCadastro">
                           Cadastrar
                        </button>
                     </div>
                  </form>

                  <div class="form-group link-apoio text-center">
                       <a href="javascript:void(0)" onclick="app.viewLogin()" title="Já tenho uma conta">
                           Já tenho uma conta
                       </a>
                     </div>

               </div>
            </div>
            </div>
         
         `);

         $("footer").hide();

         this.animarTransicao();

 }
    
    viewEsqueciMinhaSenha(){

          this._content.html(`
            
             <div class="container">
               <div class="row view-login" view-name="view-login">
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 offset-xl-4 offset-lg-4 offset-md-4 offset-sm-4 col-12 card wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>
                        <img src="assets/images/logo.png" alt="Rômulo Imóveis" />
                     </h2>
                     <p>Informe seu e-mail cadastrado</p>
                     
                     <form method="post" action="javascript:void(0)" onsubmit="app.procResetSenha(event)">
                        
                        <div class="form-group">
                           <label>Seu e-mail ou usuário cadastrado</label>
                           <input type="email" class="form-control" id="resetEmail" onclick="ativarFormularioFlutuante('#resetEmail','Seu e-mail cadastrado')" placeholder="Seu e-mail ou usuário" required />
                        </div>
                       
                        <div class="form-group">
                           <button class="btn btn-primary" id="btnViewResetarSenha">
                              Resetar senha
                           </button>
                        </div>
                     </form>

                     <div class="form-group link-apoio text-center">
                          <a href="javascript:void(0)" onclick="app.viewLoginEmailSenha()" title="Cancelar reset de senha">
                              Cancelar
                          </a>
                        </div>

                  </div>
               </div>
               </div>
            
            `);

            $("footer").hide();

            this.animarTransicao();

    }
    

    // VIEW UPLOAD DE FOTO
    viewUploadFoto(){
        
        this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>Upload de foto</h2>
                     <p>Fazer upload de imagens via input ou camêra</p>
                     
                     <form class="fileForm" method="post" enctype="multipart/form-data" action="${app.urlApi}v1-imagens-upload.php">
                        
                        <input type="hidden" name="token" value="${app.token}" />
                        <input type="hidden" name="id_usuario" value="${localStorage.getItem("idUsuario")}" />

                         <div class="form-group">
                           <label for="fileArquivo" class="btn btn-default" style="width:100%;">Selecionar arquivo</label>
                           <input style="opacity:0;display:block;height:auto;width:100%;" type="file" id="fileArquivo" class="upload-imagem" name="arquivo" />
                         </div>



                     </form>

                     <div class="form-group">
                         <a href="javascript:void(0)" class="btn btn-primary" onclick="uploadLocal();">
                            Enviar o arquivo
                         </a>
                     </div>

                     <div class="retorno-upload"></div>

                     <div class="form-group link-apoio text-center">
                          <a href="javascript:void(0)" onclick="app.inicio()" title="Cancelar upload de imagens">
                              Cancelar
                          </a>
                     </div>

                  </div>
               </div>
            
            `);
        
        this.animarTransicao();

    }


    desativarTodosMenus(){
    	this._allMenus.css("font-weight","normal");
    }

    ativarMenuUm(){
    	this.desativarTodosMenus();
       	this._menu1.css("font-weight","bold"); 
    }
    ativarMenuDois(){
    	this.desativarTodosMenus();
       	this._menu2.css("font-weight","bold"); 
    }
    ativarMenuTres(){
    	this.desativarTodosMenus();
       	this._menu3.css("font-weight","bold"); 
    }



}

